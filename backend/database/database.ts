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

function isCorrectPassword(id: string, password: string): boolean {
    for (let index: number = 0; index < DB.length; index++) {
        if (DB[index].id === id) {
            if (DB[index].getPassword() === password) {
                return true;
            }
        }
    }
    return false;
}

function createSession(sessionId, userId): void {
    sessionDB[sessionId] = userId;
}

module.exports = { insertUser, isDuplicateId, isCorrectPassword, createSession };