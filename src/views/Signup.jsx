import { Main, Button, TextField, Label, Form, FormLogo } from './styles';
import { FiUserPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FiArrowLeftCircle } from 'react-icons/fi';
import styled from 'styled-components';

const Logo = styled(FormLogo)`
	width:60px;
	padding:1.5% 2.5%;
`;

const SignUp = styled(Form)`
	height:75vh;
`;

export default function Signup(){
	return (
		<Main>
			<SignUp>
				<Logo>
					<FiUserPlus />
				</Logo>

				<TextField placeholder='Username'/>
				<TextField placeholder='Password'/>
				<TextField placeholder='Confirm username'/>
				<TextField placeholder='Confirm password'/>

				<Button>Sign up</Button>

				<Label>Do you already have an account? <Link to='/'>Log in</Link></Label>
			</SignUp>
		</Main>
	);
}