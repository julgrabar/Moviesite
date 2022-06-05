import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { loginRequest, refreshTokenRequest, userDataRequest} from "./authOperations";

const init = {
    username:null,
    token:{refresh:null, access: null},
    isLoggedIn: false
}
export const authSlice = createSlice({
    name: "auth",
    initialState: init,
    reducers:{
         logoutUser(){
        return {
            ...init
        }

    },
    refreshToken (state, {payload}) {
        console.log(payload)
        return {
        ...state,
        token:{...state.token, access: payload}
    }
    }
    },
    extraReducers: {
        [loginRequest.fulfilled]: (state, {payload})=>({...state, isLoggedIn: true, token: payload.token, username: payload.username}), 
        [userDataRequest.fulfilled]: (state, {payload})=>({...state,isLoggedIn: true,username:payload}),
        [userDataRequest.rejected]: ()=> console.log("hi")
        

  }
})

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ["token"]
}

export const {logoutUser, refreshToken} = authSlice.actions
export const persistedReducer = persistReducer(persistConfig, authSlice.reducer)