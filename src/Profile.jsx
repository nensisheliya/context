import React, { useContext } from 'react'
import { data } from './Context'

const Profile = () => {
    let{name}=useContext(data);
  return (
    <div>
      <h1>User</h1>
      <h1>{name}</h1>
    </div>
  )
}

export default Profile
