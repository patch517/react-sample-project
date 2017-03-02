export const ADD_MESSAGES = 'chat/ADD_MESSAGES';
export const SET_USERNAME_LIST = 'chat/SET_USERNAME_LIST';

const DEFAULT_STATE = {
  text: '',
  messages: [
    {
      'time': 0,
      'username': 'person',
      'content': 'test'
    }
  ],
  usernameList: []
};

export const addMessages = (dat) => {
  return { type: ADD_MESSAGES, message: dat }
}

export const setUsernameList = (dat) => {
  return { type: SET_USERNAME_LIST, usernameList: dat }
}

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ADD_MESSAGES:
      return Object.assign({}, state, {
        messages: [
          ...state.messages,
          action.message
        ]
      });
    case SET_USERNAME_LIST:
      return Object.assign({}, state, {
        usernameList: action.usernameList
      });
  }
  return state;
};
