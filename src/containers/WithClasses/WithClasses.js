import { isEmpty } from 'lodash';
import React, { Component } from 'react';
import Loader from '../../components/Loader';
import { getUser } from '../../service/users';
import ProfileCard from '../../components/ProfileCard';

class Profile extends Component {
  constructor(props){
    super(props);

    this.state = { 
      data: null,
    };
  }

  componentDidMount(){
    document.title = 'SDJS - with Classes';
    
    getUser().then(data => {
      this.setState({ data });
    });
  }

  render(){
    const { data } = this.state; 

    if(isEmpty(data)) return <Loader />

    return (
      <ProfileCard 
        email={data.email}  
        phone={data.phone}
        image={data.picture.large}
        displayName={`${data.name.first} ${data.name.last}`}
      />
    )
  }
}

export default Profile;