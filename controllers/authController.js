const admin = require('../utils/firebase');

exports.getProfile = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    const intendedRole = req.headers['x-user-role']; // "admin", "student", "teacher"
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'No token provided' });
    }
    const idToken = authHeader.split(' ')[1];
    const decodedToken = await admin.auth().verifyIdToken(idToken);

    // Strict role matching
    if (!decodedToken[intendedRole]) {
      return res.status(403).json({ success: false, message: `Not authorized as ${intendedRole}` });
    }

    res.json({
      success: true,
      message: 'Profile data accessed successfully',
      userId: decodedToken.uid,
      email: decodedToken.email,
      role: intendedRole
    });
  } catch (err) {
    res.status(401).json({ success: false, message: 'Invalid token', error: err.message });
  }
};
