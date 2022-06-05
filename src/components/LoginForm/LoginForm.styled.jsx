import styled from 'styled-components';

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  input {
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

    :not(:last-child) {
      margin-bottom: 16px;
    }
  }

  button {
    background-color: #7b6ef6;
    color: white;
    border-radius: 12px;
    border: none;
    text-decoration: none;
    cursor: pointer;
    padding: 16px 18px;
    margin-top: 40px;
  }
`;
