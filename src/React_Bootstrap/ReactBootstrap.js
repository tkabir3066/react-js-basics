import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ReactBootstrap = () => {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="m-3">
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            reiciendis voluptatum at cupiditate voluptate, dolorem sed provident
            vitae ex. Placeat.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ReactBootstrap;
