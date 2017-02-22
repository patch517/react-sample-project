export const ADD_MESSAGES = 'auth/ADD_MESSAGES';

const DEFAULT_STATE = {
  text: '',
  messages: [
    {
      'from': 'person',
      'time': 0,
      'content': 'hi'
    },
    {
      'from': 'man',
      'time': 0,
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
