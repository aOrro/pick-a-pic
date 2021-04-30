import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
`;

export const SearchInputElement = styled.input`
  background: #e6e6e6;
  width: 250px;
  height: 40px;
  padding: 0 15px;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  position: relative;

  &:focus {
    outline: none;
  }
`;
