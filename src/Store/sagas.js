import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {GET_INIT_LIST} from './actionTypes';
import {initListAction} from './actionCreators';
import axios from 'axios';

function* getInitList() {
    try{
        const res = yield axios.get('/todolist.json');
        const action = initListAction(res.data);
        yield put(action);
    }catch(e){
        console.log('todolist.json请求失败')
    }
}

function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;