import { FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Main, Button, TextField, Label, Form, FormLogo } from './styles';

export default function Login() {
  return (
    <Main>
	    <Form>	    	
	    	<FormLogo>
				<FiUser />
	    	</FormLogo>

	    	<TextField placeholder='Username' required/>
	    	<TextField placeholder='Password'type='password' required/>

	    	
	    	<Button onClick={ (e)=>e.preventDefault() }>
	    		<Link to='/dashboard'>Log-in</Link>
	    	</Button>

	    	<Label>Don't have an account? <Link to='/sign-up'>Sign up here</Link></Label>
	    </Form>
    </Main>
  )
}

