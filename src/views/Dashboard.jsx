import { Main as main, Label, LateralMenu, Button} from './styles';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiFilm, FiSettings, FiStar, FiUsers, FiPower, FiMail } from "react-icons/fi";
import Eren from '../assets/Eren.jpg';
import styled from 'styled-components';

const Main = styled(main)`
	color:#444;
`;

const Container = styled.div`
	width:80%;
	padding:2% 1%;
	box-sizing:border-box;

	display:flex;
	justify-content:flex-start;
	align-items:center;

	border-bottom: 4px solid #444;
`;

const ImgContainer = styled.figure`

	overflow:hidden;
	border-radius: 100%;
	width:50px;
	height:50px;
	margin:0 1.5%;
	border: 2px solid #444;
	& > img{
		width:100%;
		height:100%;
	}
`;

const ListElement = styled.li`
	color:#444;
	font-size:1.25em;
	display:flex;
	justify-content:space-between;
	width:80%;
	transition:0.1s ease-in-out;

	a{
		transition:0.1s ease-in-out;
		color:#444;
		text-decoration:none;	
	}

	&:hover{
		color:palevioletred;

		a{
			color:palevioletred;
		}
	}
`;

export default function Dashboard(){
	return (
		<Main>
			<LateralMenu>
				<Container>
					<ImgContainer>
						<img alt='Profile photo' src={Eren}/>
					</ImgContainer>
					<p>Username</p>
				</Container>

				<ListElement>
					<Link>Movies</Link>
					<FiFilm />
				</ListElement>

				<ListElement>
					<Link>Favorites</Link>
					<FiStar />
				</ListElement>

				<ListElement>
					<Link>Community</Link>
					<FiUsers />
				</ListElement>

				<ListElement>
					<Link>Support</Link>
					<FiMail />
				</ListElement>

				<ListElement>
					<Link>Settings</Link>
					<FiSettings />
				</ListElement>

				<ListElement>
					<Link to='/'>Log out</Link>
					<FiPower />
				</ListElement>
			</LateralMenu>
		</Main>
	);
}