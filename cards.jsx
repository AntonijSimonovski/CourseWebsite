import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

 class Cards extends React.Component {
     render() { 
         return (
            <CardGroup>
                <Card className="card">
                <Card.Header>{this.props.date1}</Card.Header>
                <Card.Body>
                <Card.Title>Week {this.props.week}</Card.Title>
                <Card.Text>
                    {this.props.title}
                </Card.Text>
                <Button variant="primary" size="lg">
                     Lecture {this.props.lecture1} 
                    <span className="glyphicon glyphicon-facetime-video"></span>
                </Button>
                </Card.Body>
                <Card.Footer className="text-muted">Uploaded: {this.props.dateUploaded}</Card.Footer>
                </Card>
                <Card className="card">
                <Card.Header>{this.props.date2}</Card.Header>
                <Card.Body>
                <Card.Title>Week {this.props.week}</Card.Title>
                <Card.Text>
                    {this.props.title}
                </Card.Text>
                <Button variant="primary" size = "lg">
                    Lecture {this.props.lecture1} 
                    <span className="glyphicon glyphicon-facetime-video"></span> 
                </Button>
                </Card.Body>
                <Card.Footer className="text-muted" >Uploaded: {this.props.dateUploaded}</Card.Footer>
                </Card>
          </CardGroup>
         );
     }
 }
  
 export default Cards;