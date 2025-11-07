const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
	{
		uid: { type: String, required: true, unique: true },
		name: { type: String },
		email: { type: String, required: true, unique: true },
		role: { type: String, enum: ['admin', 'teacher', 'student'], required: true }
	},
	{ timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
