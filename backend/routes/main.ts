import express = require('express');
import {User} from "../model/User";
const router = express.Router();

const {getUserBySession} = require('../database/database.ts')

router.get('/', (request: express.Request, response: express.Response) => {
    const sessionId: string = request.cookies.sessionId;
    if (sessionId) {
        const userData: User = getUserBySession(sessionId);
        if (userData) {
            response.status(200).send({
                status: "OK",
                body: userData,
            });
        }
    }
    return;
})

module.exports = router;