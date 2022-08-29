//@desc    Get all bootcamps
//@route   GET /api/v1/bootcamps
//@access  PUBLIC
exports.getBootcamps = (req,res,next)=>{
  res.status(200).json({success:true, msg:'Show all bootcamps'});
}

//@desc    Get single bootcamp
//@route   GET /api/v1/bootcamps/:id
//@access  PUBLIC
exports.getBootcamp = (req,res,next)=>{
  res.status(200).json({success:true, msg:`Show bootcamp ${req.params.id}`});
}

//@desc    Create a new bootcamp
//@route   POST /api/v1/bootcamps
//@access  PUBLIC
exports.createBootcamp = (req,res,next)=>{
  res.status(200).json({success:true, msg:'Create new bootcamp'});
}

//@desc    Update a bootcamps
//@route   PUT /api/v1/bootcamps/:id
//@access  PUBLIC
exports.updateBootcamps = (req,res,next)=>{
  res.status(200).json({success:true, msg:`Updated bootcamp ${req.params.id}`});
}

//@desc    Delete a bootcamps
//@route   DELETE /api/v1/bootcamps/:id
//@access  PUBLIC
exports.deleteBootcamps = (req,res,next)=>{
  res.status(200).json({success:true, msg:`Delete bootcamp ${req.params.id}`});
}
