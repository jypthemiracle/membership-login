import express = require('express');
import uuid4 = require('uuid4');
const router = express.Router();
const { isDuplicateId, isCorrectPassword, createSession } = require("../database/database.ts")

router.post('/', (request: express.Request, response: express.Response) => {
    if (isDuplicateId(request.body.id)) {
        if (isCorrectPassword(request.body.id, request.body.password)) {
            const sessionId: string = uuid4();
            createSession(sessionId, request.body.id);
            response.cookie('sessionId', sessionId, {
                maxAge: 60 * 30 * 1000
            })
            sendResponse(response, 200, "OK", request.body.id);
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