import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import moment from "moment";

    function RenderComments({comments}) {
        if (comments != null) {

            const menu = comments.map((cmnt) => {
                return (
                    <blockquote key={cmnt.id} className="blockquote">
                        <p className="mb-2">{cmnt.comment}</p>
                        <footer className="blockquote-footer">{cmnt.author},<cite title="Source Title">{moment(new Date(cmnt.date)).format("MMMM Do YYYY")}</cite></footer>
                    </blockquote>
                );
            });

            return (
                <div className="col-12 col-md-5 m-1">
                    <h1>Comments</h1>
                    {menu}
                </div>
            );

        } else {
            <div className="col-12 col-md-5 m-1"></div>
        }
    }

    function RenderDishDetails({dish}) {
        if (dish != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card> 
                </div>
            );
        } else {
            <div className="col-12 col-md-5 m-1"></div>
        }
    }

    const DishDetail = (props) => {
        if (props.dish != null) {
                return (
                    <div className="container">
                        <div className="row">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <div className="col-12">
                                <h3>{props.dish.name}</h3>
                                <hr />
                            </div>                
                        </div>
                        <div className="row">
                            <RenderDishDetails dish={props.dish} />
                            <RenderComments comments={props.comments} />
                        </div>
                    </div>
                );
        } else {
            return (
                <div className="row">
                </div>
            );
        }
    }

export default DishDetail;