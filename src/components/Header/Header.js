import React from 'react';
import { Container } from 'react-bootstrap';
import './Header.css';

const Header = (props) => {
    return (
        <div>
            <Container fluid className="header">
                <nav>
                    <a href="/home">Home</a>
                </nav>
                {
                    props.teamLogo ? <img src={props.teamLogo} alt=""/> : <h1>Team Tracker</h1>
                }
            </Container>
        </div>
    );
};

export default Header;