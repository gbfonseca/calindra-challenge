import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 226px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding: 47px 150px;
  display: flex;

  h1 {
    color: ${({ theme }) => theme.colors.brownLight};
    font-size: 27.2px;
    font-weight: 700;
    max-width: 488px;
  }

  @media (max-width: 810px) {
    height: 334px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 32px;
    div {
      flex: 1;
    }
  }
`;

export const FollowBox = styled.div`
  display: flex;
  flex-direction: column;
  div {
    margin-top: 10px;
    div {
      margin-right: 10px;
    }
  }

  @media (max-width: 810px) {
    justify-content: center;
    align-items: center;
  }
`;

export const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 270px;
  p {
    color: ${({ theme }) => theme.colors.brownLight};
    font-size: 16.2px;
    font-weight: 400;
    max-width: 121px;
    margin-top: 15px;
  }
  @media (max-width: 810px) {
    margin: 0px 0 0 0;
    justify-content: center;
    align-items: center;
    p {
      text-align: center;
    }
  }
`;
