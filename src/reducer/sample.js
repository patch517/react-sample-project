export const ADD_TO_MESSAGES = 'auth/ADD_TO_MESSAGES';

const DEFAULT_STATE = {
  text: '',
  messages: [
    {
      'from': 'person1',
      'text': 'hi hello yes'
    },
    {
      'from': 'person2',
      'text': 'hi hello person1'
    }
  ]
};

export const addToMessages = (dat) => {
  return { type: ADD_TO_MESSAGES, dat: dat }
}

export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ADD_TO_MESSAGES:
      return Object.assign({}, state, {
        messages: {
          ...state.messages, // existing messages
          ...action.messages // new messages
        }
      });
  }
  return state;
};
