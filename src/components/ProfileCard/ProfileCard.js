import Box from '../Box';
import React from 'react';
import Text from '../Text';
import SuspenseImage, { RoundImage } from '../RoundImage';
import { useSpring, animated } from 'react-spring';

const ProfileCard = ({ displayName, email, image, suspense }) => {
	const Image = suspense ? SuspenseImage : RoundImage;

	const animation = useSpring({
		from: {
			opacity: 0,
			transform: 'translateY(5rem)',
		},
		to: {
			opacity: 1,
			transform: 'translateY(0)',
		},
	});

	return (
		<animated.div style={animation}>
			<Box width="40vw" height="30vh">
				<Image src={image} alt={displayName} />
				<Text>
					<h1 style={{ marginBottom: '.5rem' }}>{displayName}</h1>
					{email}
				</Text>
			</Box>
		</animated.div>
	);
};

export default ProfileCard;
