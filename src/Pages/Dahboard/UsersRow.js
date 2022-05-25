import React from 'react';
import Swal from 'sweetalert2';


const UsersRow = ({ user, refetch }) => {

    const { email, role, } = user;
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
                    <button class="btn btn-xs text-white">Remove</button>
                </td>
            </tr>
        </>
    );
};

export default UsersRow;