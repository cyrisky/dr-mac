import React, { Component, Fragment } from "react";
import { Container, Row, Col, UncontrolledCarousel } from "reactstrap"
import GameListCard from "./GameListCard";
import { listGame } from "../data/listGame";

class GameList extends Component {
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
                        <Col xs={{ size: 3 }} className="">
                            {/* Logo */}
                            <Row className="mb-2 align-content-center" style={{height: 100}}>
                                <h1>DR. MAC</h1>
                            </Row>

                            {/* Filter Section */}
                            <Row className="mb-2">
                                <Col className="justify-content-center">
                                    Browse by Category
                                </Col>
                            </Row>
                            <Row className="ms-3 mt-1">
                                Arcade
                            </Row>
                            <Row className="ms-3 mt-1">
                                Moba
                            </Row>
                            <Row className="ms-3 mt-1">
                                Open World
                            </Row>
                        </Col>
                        <Col xs={{ size: 8, offset: 1 }} className="">
                            <Row className="mt-3 ms-2 ">
                                <h2>Featured Games</h2>
                            </Row>

                            {/* Featured Games Carousel */}
                            <Row>
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
                            </Row>
                            <Row className="mt-3">
                                <strong>All Games</strong>
                            </Row>

                            {/* All Games Card Lists */}
                            <Row>
                                {gameCards}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default GameList