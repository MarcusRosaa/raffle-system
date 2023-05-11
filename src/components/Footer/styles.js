import { styled } from 'styled-components';

export const Container = styled.footer`

`;

export const Steps = styled.div`
  background: ${({ theme }) => theme.colors.green.main};
`;

export const StepsList = styled.ul`
  max-width: 1200px;
  margin: 0 auto;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 16px 32px;


  @media (min-width: 800px) {
  flex-direction: row;
  padding: 48px 16px 32px;
  justify-content: space-between;
  align-items: start;
  gap: 0;
  }
`;

export const StepsItem = styled.li`
  color: white;
  position: relative;
  width: 100%;
  height: 200px;

  @media (min-width: 800px) {
    width: calc(25% - 32px);
    height: 100%;
  }

  h3 {
    font-size: var(--fsize-xl);
    margin-bottom: 16px;

    svg {
      margin-right: 8px;
      display: inline-block;
      -webkit-font-smoothing: antialiased;
      display: inline-block;
      font-style: normal;
      font-variant: normal;
      text-rendering: auto;
      margin-top: 2px;
      vertical-align: top;
    }
  }

  p {
    line-height: 24px;
    letter-spacing: .5px;
  }
`;

export const Navigation = styled.nav`
  background: ${({ theme }) => theme.colors.gray.dark};
`;

export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 16px;
`;

export const NavigationItem = styled.li`
  margin-right: 24px;

  a {
    text-decoration: none;
    color: white;
    font-size: var(--fsize-regular);
    text-transform: capitalize;
  }
`;

export const Copywright = styled.div`
  background: ${({ theme }) => theme.colors.gray.dark};

  p {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 16px 64px;
    text-align: center;
    color: white;
    font-size: var(--fsize-xs);
    letter-spacing: .4px;
  }
`;

export const StepNumberLayer = styled.div`
  position: absolute;
  font-size: 220px;
  line-height: 130px;
  top: -10px;
  font-weight: 700;
  color: #00000030
`;
