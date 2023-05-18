import { styled } from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.gray.light};
  border-radius: 6px;
  border: 1px solid #6c6c6c;
  padding: 0 12px;
  margin: 20px 0 30px;
  width: 100%;

  @media (min-width: 780px) {
    padding: 12px;
    }


  ul {
    @media (min-width: 780px) {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
      gap: 8px;

    }

    li {
      background: ${({ theme }) => theme.colors.gray.light};
      border-radius: 6px;
      border: 1px solid ${({ theme }) => theme.colors.green.pdp};
      padding: 8px 16px;
      margin: 16px 0;
      width: 100%;
      color: white;
      text-align: center;
      font-size: var(--fsize-s);
      font-weight: 300;
      letter-spacing: .6px;

      @media (min-width: 780px) {
        padding: 4px 16px;
        width: calc(50% - 8px);
        margin: 0;
        cursor: pointer;
      }
    }
  }
`;
