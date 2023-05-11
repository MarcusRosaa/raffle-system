import styled from 'styled-components';

export const MainContainer = styled.main`
  background: ${({ theme }) => theme.colors.gray.light};
  /* min-height: calc(100vh - 250px); */

  form {
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px 16px 32px;
    color: white;

    @media (min-width: 800px) {
      display: flex;
      align-items: start;
      justify-content: space-between;
    }
  }

  ul {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px 24px;
    display: flex;
    flex-direction: column;

    a {
      text-decoration: none;
      color: white;
      display: block;
      max-width: 510px;
      margin-bottom: 24px;

      &:visited {
        color: white;
      }
    }

    li {
      display: flex;
      border-radius: 8px;
      padding: 16px;
      width: 100%;
      background-color: #262626;
      flex-wrap: wrap;
    }
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const ThumbContainer = styled.div`
  margin-right: 8px;

  img {
    width: 130px;
    height: 130px;
    object-fit: cover;
    border-radius: 5px;
  }
  margin-bottom: 8px;
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: var(--fsize-regular);
  font-weight: 500;
  margin-bottom: 8px;
`;

export const Date = styled.p`
  font-size: var(--fsize-s);
  color: #9b9b9b;
  margin-bottom: 8px;
`;

export const Qunatity = styled.p`
  margin-bottom: 8px;
  font-size: var(--fsize-s);
  color: #9b9b9b;

  span {
    font-weight: bold;
    margin-left: 4px;
  }
`;

export const Price = styled.p`
  margin-bottom: 8px;
  font-size: var(--fsize-s);
  color: #9b9b9b;

  span {
    font-weight: bold;
    margin-left: 4px;
  }
`;

export const Status = styled.p`
  margin-bottom: 8px;
  font-size: var(--fsize-s);
  color: #9b9b9b;

  span {
    font-weight: bold;
    margin-left: 4px;
    color: ${({ theme, approved }) => (approved ? theme.colors.green.main : '#FFA500')};
  }
`;

export const See = styled.p`
  width: 100%;
  text-align: end;
  display: flex;
  align-items: center;
  justify-content: end;

  svg {
    margin-left: 4px;
  }
`;

export const NotFound = styled.p`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const TitleForm = styled.div`
  h3 {
    margin-bottom: 16px;
  }
`;

export const Input = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    margin-top: 0;
  }

  label {
    margin-bottom: 8px;
  }

  input {
    margin-bottom: 16px;
    padding: 8px;
    border-radius: 4px;
    appearance: none;
    border: 1px solid #666;
    background-color: ${({ theme }) => theme.colors.gray.dark};
    color: white;
    font-size: var(--fsize-regular);

    &:focus {
      outline: none;
      filter: brightness(1.2);
    }
  }

  button {
    padding: 12px;
    border-radius: 4px;
    appearance: none;
    color: white;
    font-size: var(--fsize-regular);
    background: ${({ theme }) => theme.colors.green.main};
    transition: filter .1s ease-in;

    &:hover {
      filter: brightness(1.05);
    }
  }
`;
