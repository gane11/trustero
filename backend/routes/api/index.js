const router = require('express').Router();

const routes = ['lists', 'tasks','comments'];

for (let route of routes) {
    router.use(`/${route}`, require(`./${route}`));
};


module.exports = router;