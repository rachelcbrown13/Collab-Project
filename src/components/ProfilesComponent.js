import React, { Component } from 'react';
import NavBar from './NavbarComponent';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { PROFILES } from '../shared/profiles';
import CharacterCard from './CharacterComponent'; 

function ProfilePage (props) {
    const profilePageGrid = props.profiles.map(profile => {
        return (  
            <div key={profile.id} className="col-4" >
                <Link to={`/profiles/${profile.id}`} onClick={() => props.onClick(profile.id)}>
                    <img src={profile.img} width="100%" alt={profile.name} className="img-thumbnail"/> 
                    <br/> 
                    <p>{profile.name}</p>
                </Link>
            </div>                
        );
    });

    return (
        <React.Fragment>
            <NavBar/>
            <h1>Choose a character to learn more...</h1>
            <div className="container">
                <div className="row">
                    {profilePageGrid}
                </div>
            </div>           
        </React.Fragment>
    );
    
}

export default ProfilePage;