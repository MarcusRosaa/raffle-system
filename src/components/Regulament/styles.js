import { styled } from 'styled-components';

export const Container = styled.div`
  padding-top: 80px;
  .subtitle {
    color: white;
    margin-bottom: 20px;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.danger.dark};
  text-transform: uppercase;
  margin-bottom: 28px;
  line-height: 20px;
  letter-spacing: .5px;

  &:nth-of-type(2) {
    text-decoration: underline;
  }

  &:nth-of-type(4) {
    margin-bottom: 48px;
  }
`;
