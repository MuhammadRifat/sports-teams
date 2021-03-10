import React from 'react';
import backgroundImage from '../../Background/Background3.jpg';
import { Container } from 'react-bootstrap';
import './Header.css';

const Header = (props) => {
    return (
        <div>
            <Container fluid className="header">
                {props.teamLogo && <img src={props.teamLogo} alt=""/> || <h1>Team Tracker</h1>}
            </Container>
        </div>
    );
};

export default Header;