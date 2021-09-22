import React from 'react';
import { Button } from 'react-native';
import { SubTitle, Description, BoxButton } from './styles';
import Template from '../../components/template';

const descriptions = [
  {
    description: 'Av. Paulista - 2000',
  },
  {
    description: 'Av. brigadeiro luis antonio - 299',
  },
  {
    description: 'Av. Paulista - 321',
  },
  {
    description: 'Av. brigadeiro luis antonio - 762',
  },
];

const SearchGps = ({ navigation }) => {
  return (
    <Template>
      <SubTitle>
        Adquira um rastrear em {'\n'}
        um de nossos postos para utilizar {'\n'}
        os nossos serviços
      </SubTitle>
      {descriptions.map(({ description }) => (
        <Description key={description}>{description}</Description>
      ))}
      <BoxButton>
        <Button
          onPress={() => navigation.navigate('GpsValidation')}
          title="Voltar"
        />
      </BoxButton>
    </Template>
  );
};

export default SearchGps;
