const admin = require('../utils/firebase');

async function authenticate(req, res, next) {
  // Extract token from Authorization header (Bearer token)
  const authHeader = req.header('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'No token provided' });
  }
  
  const idToken = authHeader.split(' ')[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken; // Attach decoded user info to request
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Invalid or expired token' });
  }
}

function isTeacher(req, res, next) {
  // Support either custom claim boolean (teacher) or role string 'teacher'
  const role = req.user?.role;
  if (req.user?.teacher === true || role === 'teacher') {
    return next();
  }
  return res.status(403).json({ success: false, message: 'Teacher access required' });
}

function isStudent(req, res, next) {
  const role = req.user?.role;
  if (req.user?.student === true || role === 'student') {
    return next();
  }
  return res.status(403).json({ success: false, message: 'Student access required' });
}

function isAdmin(req, res, next) {
  const role = req.user?.role;
  if (req.user?.admin === true || role === 'admin') {
    return next();
  }
  return res.status(403).json({ success: false, message: 'Admin access required' });
}

module.exports = authenticate;
module.exports.isTeacher = isTeacher;
module.exports.isStudent = isStudent;
module.exports.isAdmin = isAdmin;
