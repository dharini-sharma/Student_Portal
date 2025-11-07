const adminSDK = require('firebase-admin');
const MongoUser = require('../models/User');

exports.addUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    // Create Firebase Auth user
    const userRecord = await adminSDK.auth().createUser({ email, password, displayName: name });

    // Set custom claim for role string
    await adminSDK.auth().setCustomUserClaims(userRecord.uid, { role });

    // Persist to MongoDB
    const created = await MongoUser.create({
      uid: userRecord.uid,
      name: name,
      email: email,
      role: role
    });

    res.json({ success: true, message: `${role} created`, uid: userRecord.uid, user: created });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  const { uid } = req.params;
  const { name, email, password, role } = req.body;
  try {
    const updateData = {};
    if (name) updateData.displayName = name;
    if (email) updateData.email = email;
    if (password) updateData.password = password;

    if (Object.keys(updateData).length > 0) {
      await adminSDK.auth().updateUser(uid, updateData);
    }

    if (role) {
      await adminSDK.auth().setCustomUserClaims(uid, { role });
    }

    res.json({ success: true, message: 'User updated', uid });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  const { uid } = req.params;
  try {
    await adminSDK.auth().deleteUser(uid);
    res.json({ success: true, message: 'User deleted', uid });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};