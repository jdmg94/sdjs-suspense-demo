import styled from 'styled-components';

const Loader = styled.div`
	margin: 2rem;
	width: 8rem;
	height: 8rem;
	border-radius: 50%;
	border: 16px solid #f3f3f3;
	border-top: 16px solid #3498db;
	animation: spin 2s linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

export default Loader;
