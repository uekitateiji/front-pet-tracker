import React from 'react';
import { Button } from 'react-native';
import { SubTitle, BoxButton } from './styles';
import Container from '../../components/container';
import Template from '../../components/template';

const GpsValidation = ({ navigation }) => {
  return (
    <Template>
      <Container>
        <SubTitle> Você possui um {'\n'} rastreador GPS? </SubTitle>
        <BoxButton>
          <Button onPress={() => navigation.navigate('Login')} title="Sim" />
        </BoxButton>
        <BoxButton>
          <Button
            onPress={() => navigation.navigate('GpsSearch')}
            color="#CCC"
            title="Não"
          />
        </BoxButton>
      </Container>
    </Template>
  );
};

export default GpsValidation;
