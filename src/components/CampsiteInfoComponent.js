import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class CampsiteInfo extends Component {
  renderCampsite(campsite) {
    return (
      <div className="col-md-5 m-1">
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
          <CardBody>
            <CardTitle>{campsite.name}</CardTitle>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
  // Need to break line 24 in 2 lines and also work on the putting campsite image and comment side by side
  renderComments(comments) {
    return (
      <div className="col-md-5 m-1">
        <h4>Comments</h4>
        {comments.map((comment) => (
          <div>
            {comment.text} <br />
            -- {comment.author},{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(Date.parse(comment.date)))}
          </div>
        ))}
      </div>
    );
  }

  render() {
    if (this.props.campsite) {
      return (
        <div>
          <div>{this.renderCampsite(this.props.campsite)}</div>
          <div>{this.renderComments(this.props.campsite.comments)}</div>
        </div>
      );
    }
    return <div />;
  }
}
export default CampsiteInfo;
