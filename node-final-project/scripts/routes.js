const router = require('express').Router();
const UserController = require('./userController');
const UserMiddleware = require('./authenticate');

router.get('/', (request, response) => {
  response.send('Hello world!');
});

router.post('/scripts/signup', UserController.signUp);
router.post('/scripts/login', UserController.login);
router.get(
  '/scripts/logout',
  UserMiddleware.authenticate,
  UserController.logout
);
router.get('/scripts', UserMiddleware.authenticate, UserController.getAllUsers);

module.exports = router;
