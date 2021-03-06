import react from 'react';
import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";
import { Loading } from './LoadingComponent';
import { baseUrl } from "../shared/baseUrl";
//Link to allows only to specify URL but we have to pass dish-id so we will pass it in back quotes so that it evaluate js code and then dollar sign
//so dish.id value will be evaluated
    function RenderMenuItem ({dish, onClick}) {
        return (
            <Card>
                <Link to={`/menu/${dish.id}`}>
                    <CardImg width="100%" src={baseUrl+dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle id="dishname">{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        );
    }

    const Menu = (props) => {
        

        const menu = props.dishes.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1"  key={dish.id}>
                    <RenderMenuItem dish={dish} />
                </div>
            );
        });
        if (props.dishes.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.dishes.errMess) {
            return(
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{props.dishes.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else

            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem> 
                            <BreadcrumbItem active>Menu</BreadcrumbItem>
                            <div className="col-12">
                                <h3>Menu</h3>
                                <hr/>
                            </div>
                        </Breadcrumb>
                    </div>
                    <div className="row">
                        {menu}
                    </div>
                </div>
            );
    }

export default Menu;