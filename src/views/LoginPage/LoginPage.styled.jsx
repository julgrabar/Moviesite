import styled from 'styled-components';
import loginMen from '../../images/loginMen.png';

export const LoginFormWrapper = styled.div`
  width: 100%;
  min-height: 600px;
  padding: 100px;
  margin-top: 72px;

  background: url(${loginMen}) no-repeat;
  div {
    h1 {
      margin: 0 0 40px 0;
    }
    margin-left: auto;
    max-width: 486px;
  }

  @media screen and (max-width: 1280px) {
    padding: 20px;

    background: none;
    div {
      margin-right: auto;
    }
  }
`;
