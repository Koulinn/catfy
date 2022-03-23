import React from "react";
import { Button, Card } from "react-bootstrap";

function Cards({ img, category }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        {category &&
          category.map((category, i) => {
            // if you need you can add extra logic here or console.log!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            return <Card.Title key={i}>{category.name}</Card.Title>;
          })}
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default Cards;
