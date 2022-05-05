import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: #121829;
  /* border-bottom: 1px solid #323b54; */
  -webkit-box-shadow: 0px -9px 51px 0px rgba(50, 59, 84, 0.2);
  -moz-box-shadow: 0px -9px 51px 0px rgba(50, 59, 84, 0.2);
  box-shadow: 0px -9px 51px 0px rgba(50, 59, 84, 0.2);

  .active {
    color: #0077ff;
  }

  div {
    display: flex;
  }

  a {
    display: block;
    padding: 28px;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;

    letter-spacing: 0.02em;

    color: #a8aebf;
  }
`;
