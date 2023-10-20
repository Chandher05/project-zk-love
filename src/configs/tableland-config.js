import { Database } from "@tableland/sdk";

const tableName = "profile_420_23"; // Our predifined Table in Studio
let db;

export function init({ signer }) {
    if (signer) {
        db = new Database({ signer });
    }
    else {
        db = new Database();
    }
}

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
}

