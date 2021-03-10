import React from 'react';
import './Team.css';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';

const Team = (props) => {
    const history = useHistory();
    const setUrl = teamName => {
        const url = `/team/${teamName}`;
        history.push(url);
    }
    const {strTeamBadge, strTeam, strSport} = props.team;
    return (
        <Col md={4}>
            <div className="team">
                <img src={strTeamBadge}/>
                <h3>{strTeam}</h3>
                <span>Sports type: {strSport}</span><br/>
                <button onClick={() => setUrl(strTeam)}>Explore <FontAwesomeIcon icon={faArrowRight}/></button>
            </div>
        </Col>
    );
};

export default Team;