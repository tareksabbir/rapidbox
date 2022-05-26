
import React, { useState } from 'react';

import Swal from 'sweetalert2';


const UsersRow = ({ user, refetch }) => {

    const { email, role, } = user;
    const [users, setUsers] = useState([])
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    Swal.fire(
                        'Sorry!',
                        'Filed to Make An Admin!',
                        'error'
                    )

                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire(
                        'Congratulation!',
                        'Successfully Made An Admin!',
                        'success'
                    )
                }

            })
    }

    const userDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this user?');
        if (proceed) {
            console.log(id);
            const url = `http://localhost:5000/user/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Item Deleted!',
                            'Your Item Deleted Successfully!',
                            'success'
                        )
                        const remaining = users.filter(user => user._id !== id);
                        setUsers(remaining);
                    }
                })
        }

    }
    return (
        <>
            <tr>
                <th></th>
                <td>{user.displayName}</td>
                <td>{email}</td>
                <td>
                    {
                        role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs text-white bg-primary border-0">Admin</button>
                    }

                </td>
                <td>
                    <button onClick={() => userDelete(user._id)} class="btn btn-xs text-white">Delete</button>


                </td>
            </tr>
        </>
    );
};

export default UsersRow;