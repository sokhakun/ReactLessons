import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderCard({item}) {
    return(
        <card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </card>
    );
}
function Home(props) {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <RenderCard item={props.campsite} />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.partner} />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
            </div>
        </div>
    );
}

export default Home;