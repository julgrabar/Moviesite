import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 350px;
  margin-bottom: 52px;
  input {
    /* background-color: inherit; */
    background: rgba(0, 0, 0, 0.1);
    width: 100%;

    border: 1px solid #323b54;

    border-radius: 12px;
    box-sizing: border-box;
    padding: 24px 56px 24px 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.14;

    color: #475069;

    &:focus {
      border: 1px solid #323b54;
    }
  }
  button {
    position: absolute;
    top: 12px;
    right: 12px;
    background-color: inherit;
    border: none;
    cursor: pointer;
    padding: 8px;
  }
`;
