import React, { Component } from 'react';
import { Card, CardImg, CardBody,CardText,CardTitle } from 'reactstrap';
import moment from "moment";

class DishDetails extends Component {

    renderDishDetails(comments) {
        const menu = comments.map((comment) => {
            return (
                <blockquote className="blockquote">
                    <p className="mb-2">{comment.comment}</p>
                    <footer className="blockquote-footer">{comment.author},<cite title="Source Title">{moment(new Date(comment.date)).format("MMMM Do YYYY")}</cite></footer>
                </blockquote>
            );
        });
  
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
      }

    render() {
        if (this.props.dish != null) {
                return (
                <div className="container">
                    <div className="row">
                        <div key={this.props.did} className="col-12 col-md-5 m-1">
                            <Card>
                            <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                                <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card> 
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h1>Comments</h1>
                           {this.renderDishDetails(this.props.dish.comments)}
                        </div>
                    </div>
                </div>
                );
        } else {
            return (
                <div className="row"></div>
            );
        }
    }
    
}

export default DishDetails;