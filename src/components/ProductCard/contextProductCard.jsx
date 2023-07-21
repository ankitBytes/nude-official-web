import React from "react";
import { Card, Text, Row, Button, Col, Spacer } from "@nextui-org/react";
import { css } from "@emotion/react";

import { useState } from "react";
import { useNavigate} from "react-router-dom";


const ContextProductCard = ({data}) => {
    const navigate = useNavigate();

    const navigateProduct = () => {
      navigate(`/product/${data.id}`)
    }

//   console.log("inside the product context card")

  return (
    <>
      <Card isPressable isHoverable css={{ w: "100%", h: "400px" }} onClick={() => navigateProduct()}>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            showSkeleton
            src={data.image}
            objectFit="contain"
            width="100%"
            height="100%"
            alt={data.category}
          />
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: "absolute",
            bgBlur: "#0f111466",
            borderTop: "$borderWeights$light solid $gray800",
            bottom: 0,
            zIndex: 1,
            color: "white",
          }}
        >
          <Row>
            <Col>
              <Row justify="space-between">
                <Text css={{ color: "white" }}>{data.title}</Text>
                <Text css={{ color: "white" }}>{data.price}</Text>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </>
  );
};

export default ContextProductCard;
