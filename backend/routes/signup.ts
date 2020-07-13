import express = require('express');
const router = express.Router();
const { insertUser } = require("../database/database.ts");

router.post('/', function signUp(request: express.Request, response: express.Response) {
    const body: any = JSON.parse(JSON.stringify(request.body));
    const data = insertUser(body.id, body);
    response.status(200).send({
        status: "200",
        data: data
    });
})

module.exports = router;