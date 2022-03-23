import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Cards from "./Cards";

const { REACT_APP_CAT_API_KEY, REACT_APP_CAT_URL } = process.env;

function Sections({ categoryId }) {
  const [cats, setCats] = useState([]);

  const getCats = async () => {
    try {
      const res = await fetch(
        `${REACT_APP_CAT_URL}?category_ids=${categoryId}&limit=4`,
        {
          headers: {
            "x-api-key": REACT_APP_CAT_API_KEY,
          },
        }
      );

      const data = await res.json();

      setCats(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCats();
  }, []);

  return (
    <Container>
      <Row>
        {cats.map((cat) => {
          return (
            <Col key={cat.id}>
              <Cards img={cat.url} category={cat.categories} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Sections;
