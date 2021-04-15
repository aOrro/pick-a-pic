import styled from 'styled-components';

export const MainSearchComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 250px;
  width: 450px;
  margin: 0 auto 100px auto;
`;

export const SearchInputElement = styled.input`
  background: #f1f1f1;
  width: 250px;
  height: 30px;
  padding: 5px 10px;
  border: none;
  border-radius: 10px;
  box-shadow: inset 1px 1px 3px #e1e1e1, inset 2px 2px 6px #e1e1e1,
    inset -2px -2px 4px rgba(255, 255, 255, 0.7);
`;
