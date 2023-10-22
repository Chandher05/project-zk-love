import { Client } from "@xmtp/xmtp-js";
import { ethers } from 'ethers';
// import {
//     AttachmentCodec,
//     RemoteAttachmentCodec,
// } from "@xmtp/content-type-remote-attachment";

class XMTPProtocol {
    constructor(walletClient) {
        this.xmtpClient = null;
        this.walletClient = walletClient;
        this.xmtpConversation;
    }

    async initializeUser() {
        this.xmtpClient = await Client.create(this.walletClient, { env: "dev" });
        // this.xmtpClient.registerCodec(new AttachmentCodec());
        // this.xmtpClient.registerCodec(new RemoteAttachmentCodec());
    }

    async initializeConversation(address) {
        const broadcasts_canMessage = await this.xmtpClient.canMessage([address]);
        console.log(broadcasts_canMessage, "broadcasts_canMessage");
        let initialize = false;
        if (broadcasts_canMessage?.[0]) {
            this.xmtpConversation = await this.xmtpClient.conversations.newConversation(
                address,
            );
            initialize = true;
        }

        return initialize;
    }


    async getAllConversations() {
        const xmtpConversation = await this.xmtpClient?.conversations.list();
        console.log({ xmtpConversation })
        return xmtpConversation;
    }

    // for fetching all conversations
    async getConversation(address) {
        await this.initializeUser();
        const checkInit = await this.initializeConversation(address);
        if (checkInit) {
            const messages = await this.xmtpConversation.messages();
            return messages;
        } else {
            return [];
        }
    }

    // for sending message
    async sendXMTPMessage(address, message) {
        await this.initializeUser();
        await this.initializeConversation(address);
        const messages = await this?.xmtpConversation?.send(message);
        return messages;
    }
}

const customXMTPMessagingService = () => {
    if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        return new XMTPProtocol(signer);
    } else {
        return false;
    }
};

export { customXMTPMessagingService };
