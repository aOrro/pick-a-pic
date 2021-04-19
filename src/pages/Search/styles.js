import styled from 'styled-components';

export const Container = styled.div`
  width: 65%;
  margin: 0 auto;
`;

export const SearchTabs = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
  padding: 5px 0;
  border-bottom: 1px solid lightgrey;

  li {
    display: flex;
    align-items: center;
    margin-right: 50px;
    font-size: 16px;
  }
`;

export const Icon = styled.img`
  width: 16px;
  margin-right: 5px;
`;
