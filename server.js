const express = require('express')
const morgan = require('morconst morgan')
const corrs = require('corrs')
const connectDB = require('./config/db')
const passport = require('passport')
const bodyParser = require('bodyParser')

connectDB()