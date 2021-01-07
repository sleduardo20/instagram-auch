import React from 'react';

import bg from '../../assets/img/bg.png';
import logo from '../../assets/img/logo.png';

import Input from '../../components/Input';

import * as S from './styles';

const SignIn: React.FC = () => {
  return (
    <S.Container>
      <S.Main>
        <S.TopLeft>
          <img src={bg} alt="smarthphones show instagram" />
        </S.TopLeft>
        <S.TopRigth>
          <S.Login>
            <img src={logo} alt="instagram logo" />

            <form>
              <Input
                name="user"
                placeholder="Telefone, nome de usuário ou email"
              />
              <Input name="password" placeholder="Senha" />

              {/* <button type="button">Entrar</button> */}
            </form>
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
