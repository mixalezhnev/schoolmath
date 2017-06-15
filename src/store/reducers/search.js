import { TOGGLE_SEARCH } from '../constants/search';

const initialState = {
  modalState: false
}

const search = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SEARCH:
      return {
        modalState: !state.modalState
      }
      default:
        return state;
  }
}

export default search;
