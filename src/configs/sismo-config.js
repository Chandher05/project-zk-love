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
            // EVM Data Sources
            // "dhadrien.sismo.eth",
            // "0xA4C94A6091545e40fc9c3E0982AEc8942E282F38",
            // "0x1b9424ed517f7700e7368e34a9743295a225d889",
            // "0x82fbed074f62386ed43bb816f748e8817bf46ff7",
            // "0xc281bd4db5bf94f02a8525dca954db3895685700",
            // // Github Data Source
            // "github:dhadrien",
            // // Twitter Data Source
            // "twitter:dhadrien_",
            // // Telegram Data Source
            // "telegram:dhadrien",
            "0xCB324757Cf99Ce31bE317d2b6379df2c6d6BaF94",
            "0xCB324757Cf99Ce31bE317d2b6379df2c6d6BaF94"

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
    { authType: AuthType.GITHUB, isOptional: true },
    // { authType: AuthType.TWITTER, isOptional: true },
    // { authType: AuthType.TELEGRAM, userId: "875608110", isOptional: true },
];

export const CLAIMS = [
    {
        groupId: "0xf18f74317f10571909cd736da1ce15f8", // impersonated github:dhadrien has 1 contribution, eligible
    },
    {
        // request user to prove membership in the group with value >= 18
        groupId: "0xa8117bd4579c2d04d371f207b4db1edd",
        claimType: ClaimType.GTE,
        value: 18,
        isSelectableByUser: true,
    },
];

// Request users to sign a message
export const SIGNATURE_REQUEST = {
    message: "Verify credentials using Sismo!",
    isSelectableByUser: true,
};
