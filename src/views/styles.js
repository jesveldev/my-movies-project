import styled from 'styled-components';

const LateralMenu = styled.aside`
	background-color: #EEE;
	width:25vw;
	height:95vh;

	display:flex;
	flex-flow:column nowrap;
	justify-content: space-evenly;
	align-items: center;
	position:fixed;
	top:10px;
	left:10px;

	border-radius:5px;
	box-shadow: 0px 0px 10px 3px black;
	box-shadow: -3px 3px 3px 1px #AAA;
`;

const Main = styled.main`
  width:100vw;
  min-height:100vh;
  background:linear-gradient(to left, #FFDAC4, #EEE);
  color:white;

  display:flex;
  justify-content:center;
  align-items:center;
`;

const Form = styled.form`
	min-width:35vw;
	height: 70vh;
	box-shadow:0px 5px 8px 1px rgba(0,0,0,0.3);
	border-radius:5px;
	background: linear-gradient(to bottom, #ffc3a0 0%,#ffc3a0 20%, #EEE 0%, #EEE 100%); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

	display:flex;
	flex-flow:column nowrap;
	align-items:center;
	justify-content:space-evenly;
`;

const FormLogo = styled.figure`
	background: linear-gradient(to right, #ffc3a0, #FFAFBD);
	width:65px;

	overflow:hidden;
	border-radius:90%;
	padding:1% 2%;
	border:5px solid #EEE;

	& svg{
		width:100%;
		height:100%;
	}
`;

const TextField = styled.input`
	box-shadow:0px 3px 6px 2px #CCC;
	border-radius:5px;
	border:none;
	outline:none;
	font-size:1.15em;
	padding:1% 2%;;
	color:gray;

	&::placeholder{
		color:rgba(0,0,0,0.28);
		margin-left:5%;
	}
`;

const Button = styled.button`
	border:none;
	border-radius:5px;
	color:white;
	background-color:#FFAFBD;
	font-size:1.2em;
	padding:1% 3%;
	box-shadow:0px 3px 4px 1px #CCC;

	transition:0.2s ease-in-out;
	cursor:pointer;

	&:hover{
		letter-spacing:1px;
	}

	& > a {
		text-decoration:none;
		color:white;
	}
`;

const Label = styled.p`
	color:gray;
	letter-spacing:1px;
	font-size:0.8em;
`;

export {
	Main,
	Button,
	TextField,
	Label,
	Form,
	FormLogo,
	LateralMenu
};