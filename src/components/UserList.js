import React from 'react'
import UserItem from './UserItem'
function UserList({users}) {
  return (
    <div className='user-container'>

        {users.map( user=> <UserItem  key={user.id} {...user}/>)}
    </div>
  )
}

export default UserList