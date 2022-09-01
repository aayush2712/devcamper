const express = require('express');

const {
  getCourses,
  getCourse,
  addCourses,
  updateCourses,
  deleteCourses,
} = require('../controllers/courses');

const Course = require('../models/Course');
const advancedResults = require('../middleware/advancedResults');

const router = express.Router({ mergeParams: true });
router
  .route('/')
  .get(
    advancedResults(Course, {
      path: 'bootcamp',
      select: 'name description',
    }),
    getCourses
  )
  .post(addCourses);
router.route('/:id').get(getCourse).put(updateCourses).delete(deleteCourses);

module.exports = router;
