import { createAction } from '../utils'
import * as countService from '../services/count';

export default {
  namespace: 'count',

  state: 0,

  reducers: {
    minus(state) {
      return state - 1;
    },
    plus(state) {
      return state + 1;
    },
  },

  effects: {
    *decrement(_, { call, put }) {
      yield call(countService.decrement, 0);
      yield put(createAction('minus')());
    },
    *increment(_, { call, put }) {
      yield call(countService.increment, 0);
      yield put(createAction('plus')());
    },
  },

  subscriptions: {
    setup({ dispatch }, done) {
      done();
    },
  },
}
