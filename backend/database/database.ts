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

const DB = {
    Jin,
    soo,
};

const insertUser = (id: string, info: any) => {
    DB[id] = info;
    return DB[id];
}

module.exports = { insertUser };