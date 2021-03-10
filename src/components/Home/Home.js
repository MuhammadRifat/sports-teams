import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Home.css';
import { Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect( () => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    }, [])
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                {
                    teams.map(team => <Team team={team} key={team.idTeam}></Team>)
                }
                </Row>
            </Container>
        </div>
    );
};

export default Home;