import express = require('express');
const router = express.Router();
const { insertUser, isDuplicateId } = require("../database/database.ts");

router.post('/', function signUp(request: express.Request, response: express.Response) {
    if (isDuplicateId(request.body.id)) {
        response.status(400).send({
            status: "400",
            msg: "중복된 아이디입니다."
        });
        return;
    }
    const data = insertUser(request.body.id, request.body);
    response.status(200).send({
        status: "200",
        data: data,
        msg: "회원가입 완료"
    });
    return;
})

module.exports = router;