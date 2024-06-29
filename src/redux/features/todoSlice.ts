import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTodo = {
    title: string;
    deadline : string;
    description: string;
    isCompleted?: boolean;
    priority: string;
};

type TInitialState = {
    todos: TTodo[];
}

const initialState: TInitialState[] = {
    todos : []
};
const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers : {
        addTodo : (state, action: PayloadAction<TTodo>) => {
                state.todos.push({...action.payload, isCompleted: false})
        },
        removeTodo : (state, action: PayloadAction<string>) => {
            state.todos= state.todos.filter((item) => item.title != action.payload)
        },
        toggleState : (state, action) => {
            const task = state.todos.find(item => item.title === action.payload);
            task!.isCompleted = !task.isCompleted
        }
    }
});

export const {addTodo, removeTodo, toggleState} = todoSlice.actions;

export default todoSlice.reducer