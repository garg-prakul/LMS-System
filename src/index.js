import dotenv from "dotenv"
import express from 'express'
import connectDB from './db/index.db.js'

dotenv.config({
    path: './env'
})

connectDB()