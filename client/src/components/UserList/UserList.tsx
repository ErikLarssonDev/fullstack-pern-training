import React, { useEffect, useState } from 'react'
import './UserList.css'
import User from './User'

const UserList = () => {

    const [users, setUsers]: any[] = useState([])

    const getUsers = async () => {
        try {
            const response = await fetch(process.env.REACT_APP_HOST + "users")
            const jsonData = await response.json()
            setUsers(jsonData)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <table className='center-column'>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                </tr>
                {users.map((user: any) => {
                    return <User key={user.id} userName={user.username} email={user.email} dateOfBirth={user.dateofbirth} />
                })}
            </tbody>
        </table>
    )
}

export default UserList
