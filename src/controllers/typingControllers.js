const User = require('../models/User');

exports.submitTypingResult = async (req, res) => {
	const { wpm } = req.body;
	if (typeof wpm !== 'number' || wpm < 0) return res.status(400).json({ error: 'Invalid wpm' });
	const user = req.user;
	if (!user) return res.status(401).json({ error: 'Unauthorized' });
	try {
		let updated = false;
		if (wpm > user.highestWpm) {
			user.highestWpm = wpm;
			await user.save();
			updated = true;
		}
		res.json({ updated, highestWpm: user.highestWpm });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Server error' });
	}
};

exports.getHighestWpm = async (req, res) => {
	const user = req.user;
	if (!user) return res.status(401).json({ error: 'Unauthorized' });
	res.json({ highestWpm: user.highestWpm });
};

