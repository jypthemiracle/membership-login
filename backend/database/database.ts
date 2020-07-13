import {User} from "../model/User";

const Jin: User = new User(
    "Jin",
    new Date("1998-03-05"),
    "jypthemiracle",
    "test",
    "남자",
    "hophfg@yahoo.co.kr",
    "010-3408-8826",
    ["축구", "야구"]
);

const soo: User = new User(
    "Soo",
    new Date("1990-03-05"),
    "soovely",
    "test",
    "여자",
    "soo@gmail.com",
    "010-1234-5678",
    ["축구", "야구"]
);

const DB = [
    Jin,
    soo,
];

const sessionDB = {};

const insertUser = (id: string, info: any) => {
    // @ts-ignore
    DB[id] = info;
    // @ts-ignore
    return DB[id];
}

function isDuplicateId(id: string): boolean {
    for (let index: number = 0; index < DB.length; index++) {
        if (DB[index].getId() === id) {
            return true;
        }
    }
    return false;
}

// @ts-ignore
function findUserByUserId(userId: string): User {
    for (let index: number = 0; index < DB.length; index++) {
        if (DB[index].id === userId) {
            return DB[index];
        }
    }
}

function isCorrectPassword(userId: string, password: string): boolean {
    const user: User = findUserByUserId(userId);
    return user.getPassword() === password;

}

function createSession(sessionId: string | number, userId: any): void {
    // @ts-ignore
    sessionDB[sessionId] = userId;
}

// @ts-ignore
function getUserBySession(sessionId: string): User {
    // @ts-ignore
    const userId: string = sessionDB[sessionId];
    if (userId) {
        return findUserByUserId(userId);
    }
}

function deleteSession(sessionId: string): void {
    let userId: string;
    // @ts-ignore
    userId = sessionDB[sessionId];
    if (userId) {
        // @ts-ignore
        delete sessionDB[sessionId];
        return;
    }
    return;
}

module.exports = { insertUser, isDuplicateId, isCorrectPassword, createSession, getUserBySession, deleteSession };