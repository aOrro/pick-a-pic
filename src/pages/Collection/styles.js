import styled from 'styled-components';

export const Container = styled.div`
  width: 55%;
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
    margin-right: 30px;
    font-size: 18px;
    font-weight: 600;
  }
`;
