import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    tasks: [],
}

const tasksSlice = createSlice({
    name: 'tasksSlice',
    initialState,
    reducers: {
        addTask: (state, {payload}) => {
            if(state.tasks.length === 0){
                state.tasks.push({id: 1, status: "pending", ...payload});
            }
            else{
                state.tasks.push({id: state.tasks.at(-1).id + 1, status: "pending", ...payload});
            }
        },
        removeTask: (state, {payload}) => {
            state.tasks = state.tasks.filter(task => task.id !== payload);
        }
    },
})
export const {addTask} = tasksSlice.actions;
export default tasksSlice.reducer;