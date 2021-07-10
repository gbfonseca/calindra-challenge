import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Mensuring = styled.section`
  width: 100%;
  height: 880px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    /* border: 5px solid red; */
  }

  h1 {
    color: ${({ theme }) => theme.colors.brownLight};
    font-size: 82.2px;
    font-weight: 700;
    max-width: 348px;
    padding-right: 10px;
  }

  @media (max-width: 1050px) {
    flex-direction: column;
    padding: 30px;
    h1 {
      font-size: 53.2px;
    }
  }

  @media (max-width: 810px) {
    height: 490px;
  }
`;

export const MensureTape = styled.section`
  width: 100%;
  height: 1024px;
  background-color: ${({ theme }) => theme.colors.blueLight};
  display: flex;
  justify-content: center;
  align-items: center;

  article {
    margin-right: 520px;
    margin-top: 320px;
    z-index: 1;
    h1 {
      color: ${({ theme }) => theme.colors.white};
      font-size: 69.2px;
      font-weight: 700;
      max-width: 488px;
    }

    p {
      color: ${({ theme }) => theme.colors.white};
      font-size: 48.2px;
      font-weight: 300;
      max-width: 493px;
    }
  }

  @media (max-width: 1050px) {
    flex-direction: column;
    /* padding: 30px; */
    article {
      margin: 0;
      padding: 30px;
      h1 {
        font-size: 41.2px;
      }
      p {
        font-size: 26.2px;
      }
    }
  }

  @media (max-width: 810px) {
    height: 920px;
  }

  @media (max-width: 520px) {
    height: 490px;
    article {
      margin: 0;
      padding: 16px;
    }
  }
`;

export const Figure = styled.figure`
  display: flex;
  flex: 1;
  position: absolute;
  right: 0;

  div {
    img {
      filter: brightness(35%);
    }
  }

  @media (max-width: 1050px) {
    position: relative;
    right: 0;
    justify-content: flex-end;
    div {
      img {
        margin-left: 2000px;
      }
    }
  }
`;
