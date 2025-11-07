const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		description: { type: String },
		dueDate: { type: Date },
		teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Assignment', AssignmentSchema);

