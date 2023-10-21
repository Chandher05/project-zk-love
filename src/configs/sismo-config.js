import {
    ClaimType,
    AuthType,

} from "@sismo-core/sismo-connect-client";

export { ClaimType, AuthType };
export const CONFIG = {
    appId: "0x32403ced4b65f2079eda77c84e7d2be6",
    vault: {
        // For development purposes insert the Data Sources that you want to impersonate
        // Never use this in production
        impersonate: [
            "0xCB324757Cf99Ce31bE317d2b6379df2c6d6BaF94",
            "0xdbd71c0b92caa92e37b2bcc43019f38947a2b0e6",
            "0xba8285d91e63d9ddfc1704aa989589e0b3677aff",
            "0x3e78e7f55b27bcb9f34c5ed562280e6d175e94e5",
            "0x74d3352e3fd9220615f205d9ba26a026287d5521",
            "0x4931568c1cad44fcaed48c8f7c82fdaacf0f8251",
            "0x6adbf81a803be5cc2f0db2f1c812df4d3b0fe5c4",
            "0x854224988c32a58f977b4c56c053738db98b7bed",
            "0xaa338a0e59b017f9b0d1012e555035818ac7b03e",
            "0xcb324757cf99ce31be317d2b6379df2c6d6baf94",
            "0x7eb7b73b887045d44907516fd52f9d9595331581",
            "0x85a766558fc782072f052e2234e68b9eb59cbc86",
            "0xc1bc273d71c72fc333021dcfa7c8b67e596c4b58",
            "0x4242c2c68aa9d91a7499537c3ba1ea2ff03309a0",
            "0xaed596ca13eb1ec22f910492cb7385f41cde71c7",
            "0xccacfcc74714363b4a3279cf39c5bd391015ff4b",
            "0x08e7bd39e3fad334dde3570335f2f5adbf26df8a",
            "0x2bf7fe7e4c7f435ded322494b73108b613b6529c",
            "0x06e70f295b6337c213dde82d13cc198027687a7b",
            "0x04e24908d31416d0e68283e9e28ca241c4d33dfd",
            "0x376f99661d4c9b7b6782511bca83d9f5414669eb",
            "0x8bf6cc735a48a13102f9ec2a10d26845c7fcb960",
            "0x3c78186ee3e5db06a1ce66c6e6a3bde41fc7007b"
        ],
    },
    // displayRawResponse: true, // this enables you to get access directly to the
    // Sismo Connect Response in the vault instead of redirecting back to the app
};

// Request users to prove ownership of a Data Source (Wallet, Twitter, Github, Telegram, etc.)
export const AUTHS = [
    // Anonymous identifier of the vault for this app
    // vaultId = hash(vaultSecret, appId).
    // full docs: https://docs.sismo.io/sismo-docs/build-with-sismo-connect/technical-documentation/vault-and-proof-identifiers
    { authType: AuthType.VAULT },
    { authType: AuthType.EVM_ACCOUNT },
    // { authType: AuthType.TWITTER, isOptional: true },
    // { authType: AuthType.TELEGRAM, userId: "875608110", isOptional: true },
];

export const CLAIMS = [
    {
        groupId: "0x335188c640fa7dab5e10a640fba81913",
    },
    {
        // request user to prove membership in the group with value >= 18
        groupId: "0xa8117bd4579c2d04d371f207b4db1edd",
        claimType: ClaimType.GTE,
        value: 18,
    },
];

// Request users to sign a message
export const SIGNATURE_REQUEST = {
    message: "Verify credentials using Sismo!",
    isSelectableByUser: true,
};
