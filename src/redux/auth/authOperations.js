import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { getUserData, login, refreshTokenQuery, signUp } from "services/api-service";


const notify = (message) => toast(message,{
        style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
        },
    }            
);

export const signUpRequest = createAsyncThunk(
    "auth/signUpUser",
    async (userData, {rejectWithValue}) =>{
        try {
            await signUp(userData);
            notify("You have been successfuly registered")
        } catch (error) {
            notify(error.response?.data?.password?.join(" "))
            rejectWithValue(error.message)
        }
    }
)

export const loginRequest = createAsyncThunk(
    "auth/login",
    async (userData, {rejectWithValue}) =>{
        try {
            const response = await login(userData);
            notify(`Welcome, ${response.username}!`)
            return response
        } catch (error) {
            notify(error.response?.data?.detail) 
            rejectWithValue(error.message)
        }
    }
)

export const refreshTokenRequest = createAsyncThunk(
    "auth/refreshToken",
    async (refreshToken, {rejectWithValue}) =>{
        try {
            const response = await refreshTokenQuery(refreshToken);
            return  response
        } catch (error) {
            rejectWithValue(error.message)
    }}
)

export const userDataRequest = createAsyncThunk(
    "auth/refreshUser",
    async (_, {rejectWithValue}) =>{
        try {
            const response = await getUserData();
            return  response
        } catch (error) {
            console.log(error)
            return rejectWithValue(error.message)
        }
    }
)


