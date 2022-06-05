import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, login, refreshTokenQuery, signUp } from "services/api-service";
import { getToken } from "./authSelectors";

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
            return true
        } catch (error) {
            notify(error.response?.data?.password?.join(" "))
        }
    }
)

export const loginRequest = createAsyncThunk(
    "auth/login",
    async (userData, {rejectWithValue}) =>{
        try {
            const response = await login(userData);
            localStorage.getItem(JSON.stringify(response))
            notify(`Welcome, ${response.username}!`)
            return response
        } catch (error) {
            notify(error.response?.data?.detail) 
            console.log(error)
        }
    }
)

export const refreshTokenRequest = createAsyncThunk(
    "auth/refreshToken",
    async (refreshToken) =>{
        try {
            const response = await refreshTokenQuery(refreshToken);
            return  response
        } catch (error) {
            console.log(error)
    }}
)

export const userDataRequest = createAsyncThunk(
    "auth/refreshUser",
    async () =>{
        try {
            const response = await getUserData();
            return  response
        } catch (error) {
            console.log(error)
        }
    }
)


