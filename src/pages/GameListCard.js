import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";

class GameListCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Card className="my-3" style={{height: 350}}>
                    <CardImg
                        alt="Card image cap"
                        src={this.props.gamelist.gameImg}
                        top
                        width="100%"
                        height="40%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            {this.props.gamelist.gameTitle}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-warning"
                            tag="h6"
                        >
                            {this.props.gamelist.gameSubtitle}
                        </CardSubtitle>
                        <CardText>
                            {this.props.gamelist.excerpt}
                        </CardText>
                        <Link to={this.props.gamelist.gamePage}>
                        <Button className="position-absolute bottom-0 end-0 mx-3 my-3">
                            Lihat Games
                        </Button>
                        </Link>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default GameListCard