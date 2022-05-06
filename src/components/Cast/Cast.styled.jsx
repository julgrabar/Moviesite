import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(6, 1fr);

  li {
    color: #c3c8d4;
    background-color: rgb(32, 40, 62, 80%);
    padding: 5px;
    border-radius: 8px;
  }
  span {
    font-weight: 600;
  }
`;
