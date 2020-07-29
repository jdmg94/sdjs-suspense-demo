import Item from '../../components/Item';
import useTitle from '../../sauce/useTitle';
import Loader from '../../components/Loader';
import { getUser } from '../../service/users';
import { getPokedex } from '../../service/pokemons';
import React, { useState, useEffect } from 'react';
import ProfileCard from '../../components/ProfileCard';

const Posts = () => {
	const [posts, setPosts] = useState();

	useEffect(() => {
		getPokedex(6).then((values) => setPosts(values));
	}, []);

	if (!posts) return <Loader />;

	return (
		<ul>
			{posts?.map((pokemon) => (
				<Item key={pokemon.name} label={pokemon.name} link={pokemon.url} />
			))}
		</ul>
	);
};

const ProfileDetails = () => {
	const [user, setuser] = useState(null);

	useEffect(() => {
		getUser().then((response) => {
			setuser(response);
		});
	}, []);

	if (!user) return <Loader />;

	return (
		<ProfileCard
			email={user.email}
			phone={user.phone}
			image={user.picture.large}
			displayName={`${user.name.first} ${user.name.last}`}
		/>
	);
};

const Profile = () => {
	useTitle('With Hooks');

	return (
		<>
			<ProfileDetails />
			<Posts />
		</>
	);
};

export default Profile;
