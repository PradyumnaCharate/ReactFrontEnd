import React,{Component} from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

    function ConvertDateToCommentDateFormat(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
      }

   function RenderDish({dish}){
        if (dish != null) {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>

                </Card>
            );

        }
        else{
            return(
                <div></div>
            );
        }
    }
    function RenderComments({comments}){
        if (comments == null || comments.length === 0) {
            return (
              <div></div>
            );
          }
      
          const renderedComments = comments.map((comment) => {
            return (
              <li>
                <p>{comment.comment}</p>
                <p>-- {comment.author}, {ConvertDateToCommentDateFormat(comment.date)} </p>
              </li>
            );
          });
      
          return (
            <div>
              <h4>Comments</h4>
              <ul className="list-unstyled">
                { renderedComments }
              </ul>
            </div>
          );
        }
      
        const DishDetail=(props) => {
          if (props.dish != null) {
            return (
            <div className="container">
                <div className="row">
                <div className="col-12 col-md-5 m-1">
                   <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.dish.comments}/>

                </div>
              </div>

            </div>
            );
          }
          else {
            return (
              <div></div>
            );
          }
        }
      

      
export default DishDetail;