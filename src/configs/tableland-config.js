import { Database } from "@tableland/sdk";
import { FastForward } from "lucide-react";
import { useEffect } from "react";
// import { Wallet, getDefaultProvider } from "ethers";

// const privateKey = "your_private_key";
// const wallet = new Wallet(privateKey);
// // To avoid connecting to the browser wallet (locally, port 8545).
// // For example: "https://polygon-mumbai.g.alchemy.com/v2/YOUR_ALCHEMY_KEY"
// const provider = getDefaultProvider("http://127.0.0.1:8545");
// const signer = wallet.connect(provider);
// Connect to the database



const tableName = "profile_420_23"; // Our pre-defined health check table
let db;


export function init() {
    db = new Database();
}
useEffect(() => {
    async function callOnLoad() {
        const { results } = await db
            .prepare(`SELECT * FROM ${tableName};`)
            .all();
        console.log(results);
    }
    callOnLoad();
});

export async function readFromTable() {
    const { results } = await db
        .prepare(`SELECT * FROM ${tableName};`)
        .all();
    console.log(results);
    return results;
}

export async function writeintoTable({ id, name, age, gender, bio }) {
    // Insert a row into the table
    const { meta: insert } = await db
        .prepare(
            `INSERT INTO ${tableName} (id, name, age, gender, bio) VALUES (?, ?, ?, ?, ?);`
        )
        .bind(id, name, age, gender, bio)
        .run();
    try {

        await insert.txn.wait();
        return true;
    }
    catch (e) {
        return false;
    }
    // Wait for transaction finality

    // Perform a read query, requesting all rows from the table

}

