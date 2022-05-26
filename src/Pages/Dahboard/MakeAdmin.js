import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UsersRow from './UsersRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="overflow-x-auto">
                <div className="pl-4 lg:px-10 2xl:px-20 flex flex-row lg:py-5 items-end space-x-4">
                    <h1 className="text-2xl font-semibold leading-9 text-gray-800">Make Admin</h1>
                </div>
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UsersRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            >

                            </UsersRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;