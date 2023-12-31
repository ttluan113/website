import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : "auth",
    initialState : {
        login : {
            currentUser : null ,
            isFetching : false ,
            error : false,
        },
    },

    reducers : {
        loginStart : (state) => {
            state.login.isFetching = true ;
        },
        LoginSuccess : (state , action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.error = false;
        },
        loginFailed : (state) => {
            state.login.isFetching = false;
            state.login.error = true;
        },
    },
})

export const {
    loginStart ,
    loginFailed, 
    LoginSuccess,
} = authSlice.actions;

export default authSlice.reducer;