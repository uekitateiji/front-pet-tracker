import React from 'react';
import { Container, Title } from './styles';

const Template = ({ children }) => {
  return (
    <Container>
      <Title> PET TRACKER </Title>
      {children}
    </Container>
  );
};

export default Template;
