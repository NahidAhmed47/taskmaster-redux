import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasks: [
        {
            id: 1,
            status: 'pending',
            title: 'Remove Button',
            description:
                'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
            date: '2023-08-28',
            assignedTo: 'Mir Hussain',
            priority: 'high',
        }
    ],
    userTask: [],
}

const tasksSlice = createSlice({
    name: 'tasksSlice',
    initialState,
    reducers: {
        addTask: (state, { payload }) => {
            if (state.tasks.length === 0) {
                state.tasks.push({ id: 1, status: "pending", ...payload });
            }
            else {
                state.tasks.push({ id: state.tasks.at(-1).id + 1, status: "pending", ...payload });
            }
        },
        removeTask: (state, { payload }) => {
            state.tasks = state.tasks.filter(task => task.id !== payload);
        },
        updateTask: (state, { payload }) => {
            const targetTask = state.tasks.find(task => task.id === payload);
            if (targetTask.status === "pending") {
                targetTask.status = "running";
            }
            else if (targetTask.status === "running") {
                targetTask.status = "completed";
            }
            else {
                targetTask.status = "archived";
            }
        },
        setUserTask: (state, { payload }) => {
            state.userTask = state.tasks.filter(task => task.assignedTo === payload);
        }
    },
})
export const { addTask, removeTask, updateTask, setUserTask } = tasksSlice.actions;
export default tasksSlice.reducer;