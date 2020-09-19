import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody } from 'reactstrap';


function RenderCharacterCard ({profile}) {
    if (profile) {
        return (
            <div>
                <Card className="text-center">
                   <CardImgOverlay>
                        <img top width="50%" src={profile.img} alt={profile.name} />
                        <CardBody>
                            <CardTitle>{profile.name}</CardTitle>
                            <CardText>Fun Fact: {profile.fact}</CardText>
                            <CardText>Birthday: {profile.dob}</CardText>
                            <CardText>Favorite Color: {profile.color}</CardText>
                        </CardBody>
                    </CardImgOverlay>
                </Card>
            </div>
        );
    }
}

function CharacterCard (props){
    return <RenderCharacterCard profile={props.profile}/>
}

export default CharacterCard;