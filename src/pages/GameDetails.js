import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, UncontrolledCarousel, Button } from "reactstrap"
import { listGame } from "../data/listGame";
import GameListCard from "./GameListCard";

class GameDetails extends Component {
    constructor() {
        super();
        this.state = { listGame }
    }

    render() {
        const gameCards = this.state.listGame.map(listGame => {
            return (
                <Col sm="4">
                    <GameListCard gamelist={listGame} />
                </Col>
            )
        })
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Row>
                            <h2>Title</h2>
                        </Row>
                        <Row>
                            <Col className="">
                                <UncontrolledCarousel
                                    items={[
                                        {
                                            altText: 'Slide 1',
                                            key: 1,
                                            src: 'https://picsum.photos/id/123/1200/600'
                                        },
                                        {
                                            altText: 'Slide 2',
                                            key: 2,
                                            src: 'https://picsum.photos/id/456/1200/600'
                                        },
                                        {
                                            altText: 'Slide 3',
                                            key: 3,
                                            src: 'https://picsum.photos/id/678/1200/600'
                                        }
                                    ]}
                                />
                            </Col>
                            <Col className=" ms-1">
                                <Row>Description</Row>
                                <Row>tes</Row>
                            </Col>
                        </Row>
                        <Row className=" mt-1">
                            <div>
                                <Link to="/game">
                                    <Button
                                        active
                                        block
                                        color="success"
                                        size="md"
                                    >
                                        Play Me!
                                    </Button>
                                </Link>
                            </div>
                        </Row>
                    </Row>
                    <Row>
                        <Row className=" mt-4">
                            <h2>Explored Other Games</h2>
                        </Row>
                        <Row className=" mt-2">
                            {gameCards}
                        </Row>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default GameDetails