import React, { Component } from 'react';
import { Card, CardImg, CardBody,CardText,CardTitle } from 'reactstrap';
import moment from "moment";

const Details = (props) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return(
        <div>
            <h1>Comments</h1>
            {props.dishcomment.map(home => 
            <blockquote class="blockquote">
                <p class="mb-0">{home.comment}</p>
                <footer class="blockquote-footer">{home.author},<cite title="Source Title">{moment(new Date(home.date)).format("MMMM Do YYYY")}</cite></footer>
            </blockquote> 
            )}
        </div>
    );
}

export default Details;