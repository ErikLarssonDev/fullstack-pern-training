import React from 'react'
import { useState } from 'react'
import './SignUpForm.css'
import { User } from '../../types'

const SignUpForm = () => {

    const [userData, setUserData] = useState<User>({
        userName: '',
        email: '',
        dateOfBirth: ''
    })

    const handleSubmit = async (e: any) => { /* Check typing convention of e */
        e.preventDefault()
        try {
            const userName: string = userData.userName
            const email: string = userData.email
            const dateOfBirth: string = userData.dateOfBirth

            const body = { userName, email, dateOfBirth }
            const response = await fetch(process.env.REACT_APP_HOST + "users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            setUserData({
                userName: '',
                email: '',
                dateOfBirth: ''
            })
        } catch (err) {
            console.error(err)
        }

    }

    return (
        /* TODO Add data validation and user feedback */
        <form className='center-column' onSubmit={handleSubmit}>
            <div className='form-control'>
                <label>Name</label>
                <input type='text' placeholder='Name' value={userData.userName} onChange={((e) => setUserData({ ...userData, userName: e.target.value }))}></input>
            </div>
            <div className='form-control'>
                <label>Email</label>
                <input type='email' placeholder='Email' value={userData.email} onChange={((e) => setUserData({ ...userData, email: e.target.value }))}></input>
            </div>
            <div className='form-control'>
                <label>Date if birth</label>
                <input type='text' placeholder='YYYY-MM-DD' value={userData.dateOfBirth} onChange={((e) => setUserData({ ...userData, dateOfBirth: e.target.value }))}></input>
            </div>
            <input type='submit' value='Submit' />
        </form>
    )
}

export default SignUpForm
