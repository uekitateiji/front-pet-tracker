import React, { useState } from 'react';
import { Button, Alert } from 'react-native';
import { InputText, BoxAction, Description, BoxButton } from './styles';
import Template from '../../components/template';
import api from '../../config/api';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    if (!email) {
      openAlert('Error', 'Email inválido');
      return;
    }

    if (password.length < 8) {
      openAlert('Error', 'Senha inválida');
      return;
    }

    try {
      const response = await api.post('/login', {
        email: email,
        password: password,
      });
      const { token } = response?.data;
      console.log('Token', token);
      openAlert('Sucesso', 'Usuário logado com sucesso');
    } catch (err) {
      console.log('err', err);
      openAlert(
        'Error',
        'Ocorreu um erro. Verifique a sua conexão no arquivo api.ts'
      );
    }
  };

  const handleForgetPassword = () => {
    openAlert('Esquei a senha', 'Em breve...');
  };

  const openAlert = (title: string, subTitle: string) => {
    Alert.alert(title, subTitle);
  };

  return (
    <Template>
      <BoxAction>
        <InputText
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          value={email}
        />
        <InputText
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          placeholder="Senha"
          value={password}
          maxLength={8}
        />
        <Button onPress={handleSubmit} title="Entrar" />

        <BoxButton>
          <Button
            onPress={() => navigation.navigate('GpsValidation')}
            color="#CCC"
            title="Voltar"
          />
        </BoxButton>
        <Description onPress={handleForgetPassword}>
          Esqueci a senha
        </Description>
      </BoxAction>
    </Template>
  );
};

export default Login;
