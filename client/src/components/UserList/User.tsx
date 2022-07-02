import React from 'react'
import moment from 'moment'

const User = ({ userName, email, dateOfBirth }: { userName: string, email: string, dateOfBirth: string }) => {

    const calculateAge = (dateOfBirth: string): number => {
        return moment().diff(dateOfBirth, 'years')
    }

    return (
            <tr>
                <td>{userName}</td>
                <td>{email}</td>
                <td>{calculateAge(dateOfBirth)}</td>
            </tr>
    )
}

export default User
