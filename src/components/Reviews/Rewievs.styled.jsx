import { ListItem } from 'components/FilmsList/FilmsList.styled';
import styled from 'styled-components';

export const ReviewItem = styled(ListItem)`
  :not(:last-child) {
    margin-bottom: 12px;
  }

  span {
    font-weight: 600;
    font-size: 20px;
    line-height: 1.5;

    letter-spacing: 0.02em;

    color: #ebeef5;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.6;
    color: #c3c8d4;
  }
`;
