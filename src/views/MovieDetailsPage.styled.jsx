import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieDetails = styled.div`
  display: flex;
  max-width: 100vw;
  img {
    max-height: 400px;
  }
`;

export const MovieInfo = styled.div`
  padding: 30px;

  span {
    font-weight: 700;
  }
`;

export const StyledLink = styled(Link)`
  margin-right: 10px;
`;

export const BtnLink = styled(Link)`
  display: inline-block;
  padding: 10px;
  margin: 10px 0;
  background-color: #3535a9;
  color: white;
  border-radius: 5px;
  text-decoration: none;
`;
