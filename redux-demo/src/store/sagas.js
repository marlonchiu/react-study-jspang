// 中间件业务逻辑
import { takeEvery, put } from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes'
import { getListAction } from './actionCreators'
import axios from 'axios'

// 增强函数
function* mySaga() {
    yield takeEvery(GET_MY_LIST, getMyList)
}

function* getMyList() {
    // axios.get('https://www.easy-mock.com/mock/5d2dee54de00e614545eaff3/getList').then((res)=>{
    //         const data = res.data.data
    //         const action = getListAction(data)
    //         put(action)
    //     })
    const res = yield axios.get('https://www.easy-mock.com/mock/5d2dee54de00e614545eaff3/getList')
    const action = getListAction(res.data.data)
    yield put(action)
}

export default mySaga