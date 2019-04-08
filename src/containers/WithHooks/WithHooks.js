import useTitle from '../../sauce/useTitle';
import Loader from '../../components/Loader';
import { getUser } from '../../service/users';
import React, { useState, useEffect } from 'react';
import ProfileCard from '../../components/ProfileCard';

const Profile = () => {
  useTitle('SDJS - with Hooks');
  
  const [data, setData] = useState(null);
    
  useEffect(() => {
    getUser()
      .then(response => {
        setData(response);
      })
  }, []);

  if(!data) return <Loader />

  return (
    <ProfileCard 
      email={data.email}  
      phone={data.phone}
      image={data.picture.large}
      displayName={`${data.name.first} ${data.name.last}`}
    />
  )
}

export default Profile;