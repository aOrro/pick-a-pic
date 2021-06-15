import styled from 'styled-components';
import { ReactComponent as AddIcon } from '../../assets/images/add-icon-2.svg';
import { ReactComponent as SuccessIcon } from '../../assets/images/check-success.svg';

export const Container = styled.div`
  width: 320px;
  margin-top: 50px;
  position: fixed;
  top: 85px;
  right: 22.5%;

  h3 {
    margin: 0;
    padding: 15px 0;
  }
`;

export const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid ${props => props.theme.secondary};
  background: none;
  font-size: 16px;
  height: 25px;
  color: ${props => props.theme.secondary};

  &:focus {
    outline: none;
  }
`;

export const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  background: ${props => props.theme.cardBackground};
  border: 1px solid ${props => props.theme.borders};
  border-radius: 5px;
  height: 60px;
  box-shadow: 0 2px 5px -1px rgba(50, 50, 93, 0.25),
    0 1px 3px -1px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;

  span {
    cursor: pointer;
  }
`;

export const HoverDiv = styled.div`
  height: 45px;
  width: 305px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  border-radius: 5px;

  &:hover {
    background: ${props => props.theme.third};
  }
`;

export const StyledIcon = styled(AddIcon)`
  margin: 0 10px 0 15px;
  background: ${props => props.theme.third};
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;

  & path {
    fill: ${props => props.theme.secondary};
  }
`;

export const StyledSuccessIcon = styled(SuccessIcon)`
  margin: 0 10px 0 15px;
  background: ${props => props.theme.third};
  border-radius: 50%;
  padding: 7px;
  cursor: pointer;

  &:hover {
    background: red;
  }

  & path {
    fill: ${props => props.theme.secondary};
  }
`;
