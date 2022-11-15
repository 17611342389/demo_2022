import { call, put, takeEvery } from 'redux-saga/effects'

// 用于API请求的saga
function* fetchBooks() {
   // 使用普通的try/catch来处理函数
   try {
      // 调用call发起API请求
      console.log(123123123);
      const books = yield call(Promise.resolve(1));
      console.log(1);
      // 调用put将结果存入redux store
      yield put({type: "BOOK_FETCH_SUCCEEDED", books: books});
   } catch (e) {
   		// 错误信息，存入redux store
      yield put({type: "BOOK_FETCH_FAILED", message: e.message});
   }
}

// 入口saga
function* mySaga() {
  // 监听BOOK_FETCH_REQUESTED类型的action，如果监听到就发出API请求
  console.log(2333);
  yield takeEvery("BOOK_FETCH_REQUESTED", fetchBooks);
}

export default mySaga;