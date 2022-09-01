const Course = require('../models/Course');
const Bootcamp = require('../models/Bootcamp');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

//@desc    Get courses
//@route   GET /api/v1/bootcamps
//@route   GET /api/v1/bootcamps/:bootcampId/courses
//@access  PUBLIC
exports.getCourses = asyncHandler(async (req, res, next) => {
  let query;
  if (req.params.bootcampId) {
    query = Course.find({ bootcamp: req.params.bootcampId });
  } else {
    query = Course.find().populate({
      path: 'bootcamp',
      select: 'name description',
    });
  }

  const courses = await query;

  res.status(200).json({
    success: true,
    count: courses.length,
    data: courses,
  });
});

//@desc    Get Single course
//@route   GET /api/v1/bootcamps/:id
//@access  PUBLIC
exports.getCourse = asyncHandler(async (req, res, next) => {
  const course = await Course.findById(req.params.id).populate({
    path: 'bootcamp',
    select: 'name description',
  });

  if (!course) {
    return next(new ErrorResponse(`No course with id ${req.param.id}`), 404);
  }

  res.status(200).json({
    success: true,
    data: course,
  });
});

//@desc    Add course
//@route   POST /api/v1/bootcamps/:bootcampId/courses
//@access  PRIVATE
exports.addCourses = asyncHandler(async (req, res, next) => {
  req.body.bootcamp = req.params.bootcampId;

  const bootcamp = await Bootcamp.findById(req.params.bootcampId);

  if (!bootcamp) {
    return next(
      new ErrorResponse(`No bootcamp with id ${req.param.bootcampId}`),
      404
    );
  }

  const course = await Course.create(req.body);

  res.status(200).json({
    success: true,
    data: course,
  });
});

//@desc    Update course
//@route   PUT /api/v1/courses/:id
//@access  PRIVATE
exports.updateCourses = asyncHandler(async (req, res, next) => {
  let course = await Course.findById(req.params.id);

  if (!course) {
    return next(new ErrorResponse(`No course with id ${req.params.id}`), 404);
  }

  course = await Course.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: course,
  });
});

//@desc    Delete course
//@route   DELETE /api/v1/courses/:id
//@access  PRIVATE
exports.deleteCourses = asyncHandler(async (req, res, next) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    return next(new ErrorResponse(`No course with id ${req.params.id}`), 404);
  }

  await course.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});
