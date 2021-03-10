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
                    props.teamLogo ? <img src={props.teamLogo} alt=""/> : <h1>Sports Teams</h1>     //For conditional image in header
                }
            </Container>
        </div>
    );
};

export default Header;