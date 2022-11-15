export default {
    namespace: 'products',
    state: [],

    effects: {
        *fetch({ payload }, { call, put }) {
            yield put({ type: 'save' });

        },
    },
    reducers: {
        'delete'(state, { payload: id }) {
            return state.filter(item => item.id !== id);
        },
        'save'(state, { payload: id }) {
            return state
        },
    },
};