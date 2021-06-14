import styled from 'styled-components';
import { ReactComponent as AddIcon } from '../../assets/images/add-icon-2.svg';
import { ReactComponent as CloseIcon } from '../../assets/images/close-window-icon.svg';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const BlurryDiv = styled.div`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
`;

export const Modal = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${props => props.theme.cardBackground};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;

  button {
    width: 120px;
    height: 30px;
    font-size: 12px;
    margin-top: 20px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin-left: 15px;
  }
`;

export const CollectionsList = styled.form`
  display: flex;
  width: auto;
  flex-direction: column;
  align-items: left;
  margin: 0 auto;
  padding: 15px 0;
  border-top: 1px solid ${props => props.theme.secondary};
  border-bottom: 1px solid ${props => props.theme.secondary};

  label {
    margin-right: 20px;
    width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  input {
    -webkit-appearance: none;
    margin: 0 10px 0 15px;
    background: ${props => props.theme.cardBackground};
    border: 2px solid ${props => props.theme.secondary};
    width: 15px;
    height: 15px;
    vertical-align: middle;
  }
`;

export const NewCollectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 20px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NewCollectionSpan = styled.span`
  display: flex;
  justify-content: center;
  margin: 15px 10px;
  width: 150px;
`;

export const StyledInput = styled.input`
  border: none;
  background: ${props => props.theme.cardBackground};
  font-size: 14px;
  height: 25px;
  width: 120px;
  color: ${props => props.theme.secondary};
  margin-top: 5px;

  &:focus {
    outline: none;
    border-bottom: 1px solid ${props => props.theme.secondary};
  }
`;

export const StyledCloseIcon = styled(CloseIcon)`
  margin-right: 15px;
  transform: scale(0.7);

  & path {
    fill: ${props => props.theme.secondary};
  }
`;

export const StyledAddIcon = styled(AddIcon)`
  margin: 0 10px 0 0;

  & path {
    fill: ${props => props.theme.secondary};
  }
`;
