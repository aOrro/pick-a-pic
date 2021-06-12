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
  width: 300px;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;

  button {
    width: 100px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CollectionsList = styled.form`
  display: flex;
  flex-direction: column;
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

export const StyledCloseIcon = styled(CloseIcon)`
  margin-right: 10px;
`;

export const StyledAddIcon = styled(AddIcon)`
  margin-right: 10px;
`;
