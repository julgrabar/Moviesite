import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieDetails = styled.div`
  display: flex;
  max-width: 100vw;
  padding: 0 80px 40px 80px;

  img {
    border-radius: 24px;
    margin-right: 80px;
    height: 720px;
    width: 480px;
  }
`;

export const MovieInfo = styled.div`
  span.info-block {
    display: block;
    margin-bottom: 24px;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.6;
    color: #c3c8d4;
    p:first-child {
      font-size: 16px;
      line-height: 1.5;
      color: #767e94;
      margin-bottom: 8px;
    }
  }

  .tagline {
    display: block;
    font-weight: 700;
    font-size: 24px;
    line-height: 1.33;
    letter-spacing: -0.015em;
    color: #ebeef5;
    margin-bottom: 24px;
  }

  .overview {
    font-weight: 400;
    font-size: 20px;
    line-height: 1.6;
    color: #8e95a9;
    margin-bottom: 24px;
  }
`;

export const StyledLink = styled(Link)`
  margin-right: 10px;
`;

export const Btn = styled(Link)`
  display: inline-block;
  padding: 14px 18px;
  background-color: #7b6ef6;
  color: white;
  border-radius: 12px;
  border: none;
  text-decoration: none;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.1);
  }

  :not(:last-child) {
    margin-right: 8px;
  }
  :not(:first-child) {
    margin-left: 8px;
  }

  &.current {
    transform: scale(1.15);
    margin: 0 14px;
    cursor: auto;
  }

  @media screen and (max-width: 480px) {
    &.hide-btn {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 8px;
    border-radius: 8px;
  }
`;

export const PagWrapper = styled.div`
  text-align: center;
  padding: 48px 0;
`;

export const BackdropPoster = styled.div`
  max-width: 1280px;
  height: 480px;
  position: relative;

  background: linear-gradient(
      180deg,
      rgba(54, 44, 146, 0.4) 0%,
      rgba(18, 98, 151, 0.4) 100%
    ),
    url(${props => props.img}) center/cover no-repeat;

  border-radius: 40px;
  margin-bottom: 150px;
`;

export const MovieTitle = styled.div`
  position: absolute;
  left: 80px;
  bottom: -70px;
  background: rgba(32, 40, 62, 0.5);
  backdrop-filter: blur(24px);
  border-radius: 24px;
  padding: 40px;
  max-width: 50%;

  h1 {
    font-weight: 600;
    font-size: 32px;
    line-height: 1.25;

    letter-spacing: -0.02em;
    color: #ebeef5;
  }
`;
