import React from 'react'

function UserItem({id,first_name,last_name, email, gender, profile }) {
  return (
    <div className='user-item'>
<img src={profile} alt={first_name} />
<p>{first_name}</p>
<p>{last_name}</p>
<p>{email}</p>
<p>{gender}</p>
    </div>
  )
}

export default UserItem