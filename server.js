const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger')


//Route files
const bootcamps = require('./routes/bootcamps')

//load env vars
dotenv.confg({path:'./cofig.env'});

const app=express();

//Logger
app.use(logger);

//Mount routers
app.use('/api/v1/bootcamps',bootcamps)

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

