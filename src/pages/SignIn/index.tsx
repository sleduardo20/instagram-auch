import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import bg from '../../assets/img/bg.png';
import logo from '../../assets/img/logo.png';

import Button from '../../components/Button';
import Input from '../../components/Input';

import * as S from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(data => {
    console.log({ data });
  }, []);
  return (
    <S.Container>
      <S.Main>
        <S.TopLeft>
          <img src={bg} alt="smarthphones show instagram" />
        </S.TopLeft>
        <S.TopRigth>
          <S.Login>
            <img src={logo} alt="instagram logo" />

            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input
                name="user"
                type="text"
                placeholder="Telefone, nome de usuário ou email"
              />
              <Input name="password" placeholder="Senha" />

              <Button title="Entrar" type="submit" />
            </Form>
          </S.Login>
          <S.Register>
            <p>
              Não tem uma conta? <strong>Cadastre-se</strong>
            </p>
          </S.Register>

          <S.Apps>
            <span>Obtenha o aplicativo</span>
            <S.GroupButtonApps>
              <S.Button />
              <S.Button />
            </S.GroupButtonApps>
          </S.Apps>
        </S.TopRigth>
      </S.Main>
    </S.Container>
  );
};

export default SignIn;
