import React from 'react';
import './Team.css';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';

const Team = (props) => {
    const history = useHistory();   // For changing url dynamically
    const setUrl = teamName => {
        const url = `/team/${teamName}`; // Set dynamic url
        history.push(url);
    }
    const {strTeamBadge, strTeam, strSport} = props.team; // Destructuring an object
    return (
        <Col md={4}>
            <div className="team">
                <img src={strTeamBadge} alt=""/>
                <h3>{strTeam}</h3>
                <span>Sports type: {strSport}</span><br/>
                <button onClick={() => setUrl(strTeam)}>Explore <FontAwesomeIcon icon={faArrowRight}/></button>
            </div>
        </Col>
    );
};

export default Team;