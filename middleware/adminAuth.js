const admin = require('firebase-admin');

async function adminAuthMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'No token provided' });
  }
  const idToken = authHeader.split(' ')[1];
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    if (decodedToken.admin) {
      req.user = decodedToken;
      next();
    } else {
      return res.status(403).json({ success: false, message: 'Admin access required' });
    }
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Invalid token' });
  }
}

module.exports = adminAuthMiddleware;
