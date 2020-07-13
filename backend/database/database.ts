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
    DB[id] = info;
    return DB[id];
}

function isDuplicateId(id: string): boolean {
    for (let index: number = 0; index < DB.length; index++) {
        if (DB[index].id === id) {
            return true;
        }
    }
    return false;
}

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

function createSession(sessionId, userId): void {
    sessionDB[sessionId] = userId;
}

function getUserBySession(sessionId: string): User {
    const userId: string = sessionDB[sessionId];
    if (userId) {
        return findUserByUserId(userId);
    }
    return;
}

function deleteSession(sessionId: string): void {
    const userId: string = sessionDB[sessionId];
    if (userId) {
        delete sessionDB[sessionId];
        return;
    }
    return;
}

module.exports = { insertUser, isDuplicateId, isCorrectPassword, createSession, getUserBySession, deleteSession };