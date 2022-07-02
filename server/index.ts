//import express, { Express, Request, Response } from 'express'


/* Grundstruktur inför test 1.

const express = require("express")
const app = express()
app.listen(8000, () => {
    console.log("Server has started on port 8000")
})

*/

import { Express, Request, Response } from 'express'
import pool from './db'
const express = require("express")
const app: Express = express()
const cors = require("cors");

app.use(cors());
app.use(express.json()); //req.body



// Routes

// Creates a user in the database
app.post("/users", async (req: Request, res: Response) => {
    try {
        const { userName, email, dateOfBirth }: { userName: string, email: string, dateOfBirth: string } = req.body
        const newUser = await pool.query(
            "INSERT INTO users (userName, email, dateOfBirth) VALUES($1, $2, $3) RETURNING *",
            [userName, email, dateOfBirth]
        )
        res.json(newUser.rows[0])
    } catch (err) {
        console.error(err)
    }
})

// Gets all the users from the database
app.get("/users", async (req: Request, res: Response) => {
    try {
        const allUsers = await pool.query("SELECT * FROM users")
        res.json(allUsers.rows)
    } catch (err) {
        console.error(err)
    }
})



app.listen(8000, () => {
    console.log("Server has started on port 8000")
})