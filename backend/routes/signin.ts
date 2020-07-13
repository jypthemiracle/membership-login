import express = require('express');
const router = express.Router();
const { isDuplicateId, isCorrectPassword } = require("../database/database.ts")

router.post('/', (request: express.Request, response: express.Response) => {
    if (isDuplicateId(request.body.id)) {
        if (isCorrectPassword(request.body.id, request.body.password)) {
            sendResponse(response, 200, "OK", "로그인 완료");
            return;
        }
        sendResponse(response, 400, "FAIL", "비밀번호가 틀립니다.");
        return;
    }
    sendResponse(response, 400, "FAIL", "가입되지 않은 아이디입니다.");
    return;
})

function sendResponse(response: express.Response, code: number, status: string, message: string) {
    response.status(code).send({
        status: status,
        message: message
    });
}

module.exports = router;