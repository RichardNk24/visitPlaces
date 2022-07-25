import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {

    const USERS = [
        {id: 'u1', 
        name: 'Rich Nk', 
        image: 'https://richardnkulu.com/img/1.jpg', 
        places: 23
        }, 
    ];

    return <UsersList 
        items={USERS}
    />;
}


export default Users