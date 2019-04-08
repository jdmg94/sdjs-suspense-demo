import React from 'react';
import useTitle from '../../sauce/useTitle';
import { getUser } from '../../service/users';
import ProfileCard from '../../components/ProfileCard';
import createResource from '../../sauce/createResource';

const resource = createResource(getUser);

const Profile = () => {
  const data = resource.read();
  useTitle('SDJS - with Suspense');

  return (    
    <ProfileCard 
      email={data.email}  
      phone={data.phone}
      image={data.picture.large}
      thumbnail={data.picture.thumbnail}
      displayName={`${data.name.first} ${data.name.last}`}
    />
  )
}

export default Profile;