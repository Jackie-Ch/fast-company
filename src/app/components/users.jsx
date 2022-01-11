import React from 'react';
import User from "./user";


const Users = ({ users, ...rest }) => {

return (
    <>
        {users.length > 0 && (
            <table className='table table-hover'>
                <thead>
                <tr>
                    <th>Имя</th>
                    <th>Качества</th>
                    <th>Профессия</th>
                    <th>Встретился, раз</th>
                    <th>Оценка</th>
                    <th>Избранное</th>
                    <th />
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <User {...rest} {...user} key={user._id}/>
                ))}

                </tbody>
            </table>
        )}

    </>

);

};

export default Users;