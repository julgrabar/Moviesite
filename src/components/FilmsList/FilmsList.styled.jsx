import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  gap: 14px;

  @media screen and (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    /* grid-template-rows: repeat(10, 1fr); */
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    /* grid-template-rows: repeat(10, 1fr); */
    gap: 24px;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    /* grid-template-rows: repeat(5, 1fr); */
    gap: 24px;
  }
`;

export const ListItem = styled.li`
  color: grey;
  background-color: rgb(32, 40, 62, 80%);
  padding: 8px;
  border-radius: 12px;
  position: relative;

  img {
    border-radius: 5px;
  }

  .film-info {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;

    letter-spacing: 0.02em;

    color: #ebeef5;
    padding-top: 18px;
  }
`;

export const Vote = styled.span`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(8px);
  padding: 4px 8px;
  border-radius: 8px;
  color: #ffad49;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  .md-16 {
    font-size: 16px;
  }
`;
