export const profileIntrests = ["Sports", "Music", "Travel", "Reading", "Art", "Gaming", "Photography", "Dancing", "Coding", "Hiking", "Pet lover", "Gadgets freak", "Camping", "Fashion", "Fitness Guru", "Meeting new people", "Dancing", "Foodie", "Caffine addict"];
export const web3AuthLoginType = "google";
export const web3AuthClientId =
    "BFWg2RH35EKxZJtntj1l-G2XU8AY0l-yFgFIs9iDbgKAW45ZxE9_qfj6COAWwI-RhOs2pN6OHwgZHgtoHjOlMFM";
export const productName = "Clink Safe";
export const oauthClientId =
    "97006979879-hpprsfnk927avhc0368fvbqjra6h5c4t.apps.googleusercontent.com";
export const web3AuthVerifier = "micropay";

export const polygonTestnet = {
    index: 10,
    id: "polygon-mumbai",
    name: "Mumbai Testnet",
    logo: "https://storage.googleapis.com/frontier-wallet/blockchains/polygon/info/logo.svg",
    coinId: 8453,
    symbol: "MATIC",
    chainId: "80001",
    chainIdHex: "0x13881",
    decimals: 18,
    blockchain: "ethereum",
    derivation: {
        path: "m/44'/60'/0'/0/0",
    },
    curve: "secp256k1",
    publicKeyType: "secp256k1Extended",
    explorer: {
        url: "https://mumbai.polygonscan.com",
        explorerName: "polygon scan",
        txPath: "/tx/",
        accountPath: "/address/",
    },
    info: {
        url: "https://mumbai.polygonscan.com/",
        rpc: "https://polygon-mumbai-bor.publicnode.com",
    },
};