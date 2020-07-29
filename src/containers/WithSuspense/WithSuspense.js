import React, { Suspense } from 'react';
import Item from '../../components/Item';
import useTitle from '../../sauce/useTitle';
import Loader from '../../components/Loader';
import { getUser } from '../../service/users';
import { getPokedex } from '../../service/pokemons';
import ProfileCard from '../../components/ProfileCard';
import createResource from '../../sauce/createResource';

const resource = {
	users: createResource(getUser),
	pokemons: createResource(getPokedex),
};

const ProfileDetails = () => {
	const data = resource.users.read();

	return (
		<ProfileCard
			email={data.email}
			phone={data.phone}
			image={data.picture.large}
			thumbnail={data.picture.thumbnail}
			displayName={`${data.name.first} ${data.name.last}`}
		/>
	);
};

const Posts = () => {
	const data = resource.pokemons.read(9);

	return (
		<ul>
			{data.map((pokemon) => (
				<Item key={pokemon.name} label={pokemon.name} link={pokemon.url} />
			))}
		</ul>
	);
};

const Profile = () => {
	useTitle('With Suspense');

	return (
		<>
			<Suspense fallback={<Loader />}>
			<ProfileDetails suspense />
			</Suspense>
			<Suspense fallback={<Loader />}>
				<Posts />
			</Suspense>
		</>
	);
};

export default Profile;
