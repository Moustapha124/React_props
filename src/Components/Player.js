import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
      <Card style={{ width: "18rem", marginBottom: "20px" }}>
        <Card.Img style={{ width: "100%", height: '250px', objectFit: 'contain' }} variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title style={{ textAlign: 'center' }}>{name}</Card.Title>
          <Card.Text style={{ textAlign: 'center' }}>
            <strong>Equipe:</strong> {team}<br />
            <strong>Nationalité:</strong> {nationality}<br />
            <strong>Numéro:</strong> {jerseyNumber}<br />
            <strong>Age:</strong> {age}
          </Card.Text>
          <Button style={{ marginLeft: '80px' }} variant="primary">Voir Plus</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Player;
