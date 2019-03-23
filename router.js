const Router = require('@eggjs/router');

const router = new Router();

router.get('/', require('./routes'));
router.post('/json', require('./routes/json'));

module.exports = router;
