import styled, { css } from 'styled-components';

interface NavProps {
  open: boolean;
}

export const Container = styled.header`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px 53px;

  > div {
    display: flex;

    h1 {
      font-size: 41.2px;
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 700;
    }

    h6 {
      font-size: 16.2px;
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 300;
      letter-spacing: 5.4px;
    }
  }

  a {
    padding-right: 20px;
  }

  @media (max-width: 810px) {
    flex-direction: column;
    justify-content: center;
    padding: 20px 0;
    height: auto;

    div {
      flex: 1;
      justify-content: center;
      align-items: center;

      a {
        div {
          img {
            width: 40px !important;
            height: 39px;
          }
        }
      }

      a + a {
        display: none;
      }
    }
  }
`;

export const Nav = styled.nav<NavProps>`
  ul {
    display: flex;

    li {
      font-weight: 300;
      letter-spacing: 5.4px;
      color: ${({ theme }) => theme.colors.primary};
      list-style: none;
      text-transform: uppercase;
      margin-left: 128px;
    }
  }

  @media (max-width: 1050px) {
    ul {
      li {
        margin-left: 20px;
      }
    }
  }

  @media (max-width: 810px) {
    width: 100%;

    ${(props) =>
      props.open
        ? css`
            display: block;
          `
        : css`
            display: none;
          `};

    ul {
      flex-direction: column;
      width: 100%;
      padding-top: 5px;
      li {
        margin: 15px 0;
        text-align: center;
      }
    }
  }
`;

export const CollapseButton = styled.button`
  display: none;
  position: absolute;
  left: 25px;
  top: 25px;
  cursor: pointer;
  background: none;
  border: none;

  @media (max-width: 810px) {
    display: block;
  }
`;
