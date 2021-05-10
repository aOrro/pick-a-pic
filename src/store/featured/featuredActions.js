import {
  HANDLE_INPUT_CHANGE,
  HANDLE_ICON_CLICK,
  HANDLE_FORM_SUBMIT,
} from './featuredTypes';

export const handleChange = e => {
  return {
    type: HANDLE_INPUT_CHANGE,
    payload: e.target.value,
  };
};

export const handleClick = index => {
  return {
    type: HANDLE_ICON_CLICK,
    payload: index,
  };
};

export const handleSubmit = e => {
  e.preventDefault();
  return {
    type: HANDLE_FORM_SUBMIT,
  };
};
