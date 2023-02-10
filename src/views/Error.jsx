import { Main } from './styles';
import styled from 'styled-components';
import { FiAlertCircle } from "react-icons/fi";

const ErrorLogo = styled.figure`

	width:50px;
	
	& svg{
		width:100%;
		height:100%;
		color:palevioletred;
	}
`;

const Container = styled(Main)`
	flex-flow:column nowrap;
`;

const Message = styled.p`
	display:block;
	color:palevioletred;
	font-size:2em;
	letter-spacing:1px;
`;

const Explaination = styled(Message)`
	font-size:1.5em;
`;

export default function Error(){
	return (
		<Container>
			<ErrorLogo>
				<FiAlertCircle />
			</ErrorLogo>
			<Message>Something went wrong :(</Message>
			<Explaination>Page not found <strong><em>404</em></strong></Explaination>
		</Container>
	);
}