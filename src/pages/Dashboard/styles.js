import styled from 'styled-components';
import themes from '~/styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px;
`;

export const List = styled.div`
  margin-top: 40px;
  h1 {
    font-size: 24px;
    color: ${themes.colors.title};
    text-align: center;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;

  th {
    color: ${themes.colors.text};
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }

  tbody {
    tr {
      border-radius: ${themes.borderRadius.borderRadiusSM};
      background: ${themes.colors.shap};
      td {
        padding: 1rem 2rem;
        border: 0;
        color: ${themes.colors.title};
      }

      div {
        display: flex;
        align-items: center;
        height: 100%;
        flex-direction: row;
        justify-content: space-around;
        padding: 1rem 2rem;

        cursor: pointer;
      }
    }
  }
`;
