export const ADD_MESSAGES = 'auth/ADD_MESSAGES';

const DEFAULT_STATE = {
  text: '',
  messages: [
    {
      'time': 4,
      'username': 'person',
      'content': 'hi'
    },
    {
      'username': 'man',
      'time': 22,
      'content': 'fuck off'
    }
  ]
};

export const addMessages = (dat) => {
  return { type: ADD_MESSAGES, messages: dat }
}

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ADD_MESSAGES:
      return Object.assign({}, state, {
        messages: [
          ...state.messages,
          ...action.messages
        ]
      });
  }
  return state;
};
