import { createSlice  } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'users',
    initialState: {},
    reducers: {
        getUser() {},
        setUser(state, action) {
            console.log("we are in the user slice for setting user")
            const userData = action.payload; 
            return { ...state, ...userData }
        }
    }
})

export const { getUser, setUser } = userSlice.actions;

export default userSlice.reducer 