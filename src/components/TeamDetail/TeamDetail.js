import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import './TeamDetail.css';
import malePhoto from '../../Photo/male.png';
import femalePhoto from '../../Photo/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faClock, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons'

const TeamDetail = () => {
    const {teamName} = useParams();
    const [team, setTeam] = useState([]);
    useEffect( () => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${teamName}`)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]))
    }, [teamName])
    const {strTeamBadge, strTeam, strCountry, strSport, intFormedYear, strGender, strDescriptionEN, strStadiumDescription, strFacebook, strTwitter, strYoutube} = team;
    return (
        <div>
            <Header teamLogo={strTeamBadge}></Header>
            <Container>
                <Row className="team-details">
                    <Col md={7}>
                        <div className="team-info">
                            <h2>{strTeam}</h2>
                            <h5><FontAwesomeIcon icon={faClock}/> Founded: {intFormedYear}</h5>
                            <h5><FontAwesomeIcon icon={faFlag}/> Country: {strCountry}</h5>
                            <h5><FontAwesomeIcon icon={faFutbol}/> Sport Type: {strSport}</h5>
                            <h5><FontAwesomeIcon icon={faMars}/> Gender: {strGender}</h5>
                        </div>
                    </Col>
                    <Col md={5} className="team-img" alt="">
                        {
                            strGender && strGender.toLowerCase() === 'female' ? <img src={femalePhoto} alt=""/> : <img src={malePhoto} alt=""/>
                        }
                    </Col>
                </Row>
                <p>
                    {strDescriptionEN}
                </p>
                <p>
                    {strStadiumDescription}
                </p>
                <div className="social">
                    <a href={"https://"+strTwitter}><FontAwesomeIcon icon={faTwitter} size="4x"/></a>
                    <a href={"https://"+strFacebook}><FontAwesomeIcon icon={faFacebook} size="4x"/></a>
                    <a href={"https://"+strYoutube}><FontAwesomeIcon icon={faYoutube} size="4x"/></a>
                </div>
            </Container>
        </div>
    );
};

export default TeamDetail;