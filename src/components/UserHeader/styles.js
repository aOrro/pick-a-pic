import styled from 'styled-components';

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 100px;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  border: 3px solid #bf0000;
  margin: 0 50px;
`;

export const UserMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;

  img {
    width: 28px;
    height: 28px;
    margin-right: 20px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 30px;
    margin: 0 0 10px 0;
  }

  span {
    max-width: 600px;
    margin-bottom: 15px;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;

export const UserInfoIcon = styled.img`
  width: 15px;
  margin-right: 5px;
`;

export const UserStatsCount = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
`;
