import swaggerUi = require('swagger-ui-express');
import swaggereJsdoc = require('swagger-jsdoc');
import express = require('express');

const router = express.Router();

const options = {
    swaggerDefinition: {
        info: {
            title: 'Test API',
            version: '1.0.0',
            description: 'Test API with express',
        },
        host: 'localhost:3000',
        basePath: '/'
    },
    apis: ['./*.ts']
};

const specs = swaggereJsdoc(options);

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

export default router;