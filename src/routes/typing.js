const express = require('express');
const router = express.Router();
const typing = require('../controllers/typingControllers');
const authenticate = require('../middleware/authenticate');

router.post('/typing-result', authenticate, typing.submitTypingResult);
router.get('/me/highest', authenticate, typing.getHighestWpm);

module.exports = router;
