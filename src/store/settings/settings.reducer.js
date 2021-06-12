import { THEME_CHANGE } from './settings.types';

const initialState = {
  lightTheme: true,
};

function settingsReducer(state = initialState, action) {
  if (action.type === THEME_CHANGE)
    return {
      ...state,
      lightTheme: !state.lightTheme,
    };
  return state;
}

export default settingsReducer;
