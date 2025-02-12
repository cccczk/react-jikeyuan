import {
    createSlice
} from '@reduxjs/toolkit'
import {
    request
} from '@/utils/index'
import {
    setToken as _setToken,
    getToken,
    removeToken
} from '@/utils/index'
import { getProfileAPI, loginAPI } from '@/apis/user'
const userStore = createSlice({
    name: 'user',
    initialState: {
        token: getToken() || '',
        userInfo: {

        }
    },
    reducers: {
        setToken(state, action) {
            state.token = action.payload
            _setToken(action.payload)
        },
        setUserInfo(state, action) {
            state.userInfo = action.payload
        },
        clearUserInfo(state) {
            removeToken()
            state.token = ''
            state.userInfo = {}
        }
    }
})

const {
    setToken,
    setUserInfo,
    clearUserInfo
} = userStore.actions

const userReducer = userStore.reducer
const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        const res = await loginAPI(loginForm)
        dispatch(setToken(res.data.token))

    }
}
const fetchUserInfo = () => {
    return async (dispatch) => {
        const res = await getProfileAPI()
        dispatch(setUserInfo(res.data))
    }
}
export {
    fetchLogin,
    setToken,
    fetchUserInfo,
    clearUserInfo
}

export default userReducer