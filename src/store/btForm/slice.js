import { createSlice } from "@reduxjs/toolkit";
import { removeVietnameseTones } from "../../util/removeKey";

const initialState = {
    valueList: [],
    valueEdit: null,
    valueFind: [],
}

export const { reducer: btFormReducer, actions: btFormActions } = createSlice({
    name: 'btForm',
    initialState,
    reducers: {
        setValueList: (state, action) => {
            state.valueList.push(action.payload)
        },

        deleteValue: (state, { payload }) => {
            state.valueList = state.valueList.filter(item => item.id != payload)
        },

        editValue: (state, { payload }) => {
            state.valueEdit = payload
        },
        updateValue: (state, { payload }) => {
            state.valueList = state.valueList.map((item) => {
                if (item.id === payload.id) return payload
                return item
            })
            state.valueEdit = null
        },
        findValue: (state, { payload }) => {
            let key = removeVietnameseTones(payload.toLowerCase().trim());
            state.valueFind = state.valueList.filter((item) => {
                let check = removeVietnameseTones(item.name.toLowerCase().trim())
                if (check.includes(key)) return item
            })
            console.log(state.valueFind.length)
        }
    }
})