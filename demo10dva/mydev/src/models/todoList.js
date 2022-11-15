import { getTodosAsync } from "../services/todoList";

export default {
    namespace: 'todoList',
    state: {
        todos: '',
    },
    reducers: {
        setTodos(state, action) {
            return {
                ...state,
                todos: action.payload
            }
        }
    },
    effects: {
        *getTodosSaga({ payload }, { call, put }) {
            // 状态机调 API
            const data = yield call(getTodosAsync);
            yield put({ type: 'setTodos', payload: data });
        }
    }
}
