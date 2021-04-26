import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 5px 80px 5px;

  img {
    width: 330px;
    height: 220px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const CollectionInfo = styled.div`
  margin-left: 10px;

  h3 {
    margin: 15px 0 10px 0;
  }
`;

export const Labels = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const Label = styled.span`
  background: #dcdcdc;
  margin-right: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
`;
