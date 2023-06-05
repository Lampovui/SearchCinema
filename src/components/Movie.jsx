import React from 'react'
import { Col } from 'antd';
import { Card } from 'antd';

const { Meta } = Card;

const Movie = ({Poster, Title, Year, Type}) => {
  return (
    <>
      <Col xs={24} sm={12} md={8} lg={6}>
        <Card
          hoverable
          style={{ width: 340 }}
          cover={<img alt="example" src={Poster} />}
        >
          <Meta title={Title} description={`${Year} ${Type}`} />
        </Card>
      </Col>
    </>
  );
};

export default Movie;