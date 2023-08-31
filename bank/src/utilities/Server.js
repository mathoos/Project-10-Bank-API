import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { login, apierror } from "./Slice";


axios.defaults.baseURL = "http://localhost:3001/api/v1/user";

// Statut initial
const initialState = {
    status: "void",
    data: null,
    error: null,
}

const serverAPISlice = createSlice({
    name: "serverAPI",
    initialState,
    reducers: {
        init: (state) => {
            state.status = "void";
            state.data = null;
        },

        setPending: (state) => {
            if (state.status === "void" || state.status === "rejected") {
                state.status = "pending";
                state.error = null;
            }
        },

        setData: (state, action) => {
            state.data = action.payload;
            state.status = "resolved";
        },
        
        setError: (state, action) => {
            state.error = action.payload;
            state.data = action.payload;
            state.status = "rejected";
        },
    },
})

export const { init, setPending, setData, setError } = serverAPISlice.actions;

export const selectStatus = (state) => state.serverAPI.status;


const request = async (dispatch, getState, url, method, payload) => {
    const { status } = getState().serverAPI;

    if (status === "pending") {
        return;
    }

    dispatch(setPending());

    try {
        const response = await method(url, payload);
        const data = await response.data;
        dispatch(setData(data.body));
    } 
    catch (error) {
        console.log(error.message);
        dispatch(setError(error.message));
        dispatch(apierror());
    }
}


const postRequest = async (dispatch, getState, dispatchAction) => {
    const { status, data } = getState().serverAPI;

    if (status === "resolved" && dispatchAction) {
        dispatch(dispatchAction(data));
    }

    dispatch(init());
};

// Actions API pour faire les requêtes et gérer les réponses
export const APILogin = (credentials) => async (dispatch, getState) => {
    await request(dispatch, getState, "/login", axios.post, credentials);
    postRequest(dispatch, getState, login);
}

export default serverAPISlice.reducer;





