import { Database } from "@tableland/sdk";

const tableName = "projectzkloveprofile_80001_7954"; // Our predifined Table in Studio
// const tableName = "zkloveprofile_80001_8038"; // Our predifined Table in Studio
let db;

export function TablelandInit() {
    db = new Database();
    // if (signer) {
    //     db = new Database({ signer });
    // }
    // else {
    // }
}

export async function readFromTable() {
    const { results } = await db
        .prepare(`SELECT * FROM ${tableName};`)
        .all();
    console.log(results);
    return results;
}

export async function readMyProfile({ id }) {
    const { results } = await db
        .prepare(`SELECT * FROM ${tableName} WHERE id=${id};`)
        .all();
    console.log(results);
    return results;
} // to get the Profule for the ID


export async function writeintoTable({ name, age, gender, bio, passions }) {
    // Insert a row into the table
    console.log({ name, gender, bio, age });
    // const id = await localStorage.getItem('addr') || '1';
    passions = JSON.stringify(passions);
    const { meta: insert } = await db
        .prepare(
            `INSERT INTO ${tableName} ( name, age, gender, bio) VALUES ( ?, ?, ?, ?);`
        )
        .bind(name, age, gender, bio)
        .run();
    try {
        await insert.txn.wait();
        return true;
    }
    catch (e) {
        return false;
    }
}

