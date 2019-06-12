export default {
  namespace: 'global',

  state: {
    user: {
      email: null,
      id: null
    }
  },

  subscriptions: {},

  effects: {
    *fetch({ payload }, { call, put }) {
      // eslint-disable-line
      yield put({ type: 'save' });
    }
  },

  reducers: {
    setUser(state, action) {
      return {
        ...state,
        user: {
          email: action.payload.email,
          id: action.payload.id
        }
      };
    }
  }
};
