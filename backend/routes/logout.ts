import express = require('express');

const router = express.Router();
const {deleteSession} = require("../database/database.ts");

router.get('/', (request: express.Request, response: express.Response) => {
    const sessionId = request.cookies.sessionId;
    deleteSession(sessionId);
    response.clearCookie('sessionId').status(200).send({
        status: "200",
        message: "성공적으로 로그아웃 되었습니다."
    });
});

module.exports = router;