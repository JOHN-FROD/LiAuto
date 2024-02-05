import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
    name: 'langSlice' ,
    initialState: {
        lang: 'uz'
    },
    reducers: {
        changleLang: (state,{payload} ) =>{
            state.lang = payload
        }
    }
})



export const {changleLang} = langSlice.actions
export default langSlice.reducer