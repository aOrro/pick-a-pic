import styled from 'styled-components';
import { ReactComponent as AddIcon } from '../../assets/images/add-icon-2.svg';

export const Container = styled.div`
  width: 40%;
  padding: 0 20px;

  h3 {
    border-bottom: 1px solid lightgrey;
    margin: 10px 0 20px 0;
    padding: 10px 0;
  }
`;

export const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid lightgrey;
  background: #efefef;
  font-size: 16px;
  height: 25px;

  &:focus {
    outline: none;
  }
`;

export const StyledSpan = styled.span`
  display: flex;
  align-items: center;
`;

export const StyledIcon = styled(AddIcon)`
  margin-right: 10px;
`;
