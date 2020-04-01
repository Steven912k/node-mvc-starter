const studentModel = require('../models/student');
// Students route
exports.getAllStudents = function(req, res) {
    studentModel.getAll({ name: 1 }, function(students) {
      res.render('students', { title: 'Students', students: students });
    });
  };