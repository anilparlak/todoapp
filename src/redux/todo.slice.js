import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../utils/api.utils";

const initialState = {
  todoList:[],
  pending: false,
  error: false,
};

export const getAllTodos = createAsyncThunk("todo/getAll",async () => {
    const response = await api().get("/todo");
    return response.data;
  });

export const postTodo = createAsyncThunk("todo/postTodo",async (data) => {
  try {
    const response = await api().post("/todo",data);
    return response.data;
  } catch (error) {
    console.log(error)
  }
})

export const deleteAllTodos = createAsyncThunk("todo/deleteAll",async () => {
  try {
    await api().delete("/todo");
  } catch (error) {
    console.log(error)
  }
})

export const deleteTodo = createAsyncThunk("todo/deleteTodo", async (id) => {
  try {
   const response = await api().delete(`/todo/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
})

export const checkTodoItem = createAsyncThunk("todo/checkTodo", async ({id,status}) => {
  try {
    const response = await api().put(`/todo/${id}`,{checked:status})
    return response.data
  } catch (error) {
    
  }
})

export const todoSlice = createSlice({
  name: "todoApp",
  initialState:initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTodos.pending, (state) => {
        state.pending = true;
      })
      .addCase(getAllTodos.fulfilled, (state, action) => {
        state.pending = false;
        state.todoList = [...action.payload]
      })
      .addCase(getAllTodos.rejected, (state) => {
        state.pending = false;
        state.error = true;
      })
      .addCase(postTodo.pending,(state)=>{
        state.pending = true;
      })
      .addCase(postTodo.fulfilled,(state,action)=>{
        state.pending = false;
        state.todoList.push(action.payload)
      })
      .addCase(postTodo.rejected, (state) => {
        state.pending = false;
        state.error = true;
      })
      .addCase(deleteAllTodos.pending,(state)=>{
        state.pending = true;
      })
      .addCase(deleteAllTodos.fulfilled,(state)=>{
        state.pending = false;
        state.todoList = []
      })
      .addCase(deleteAllTodos.rejected, (state) => {
        state.pending = false;
        state.error = true;
      })
      .addCase(deleteTodo.pending,(state)=>{
        state.pending = true;
      })
      .addCase(deleteTodo.fulfilled,(state,action)=>{
        state.pending = false;
        state.todoList = state.todoList.filter((item) => item._id !== action.payload._id)
      })
      .addCase(deleteTodo.rejected, (state) => {
        state.pending = false;
        state.error = true;
      })
      .addCase(checkTodoItem.pending,(state)=>{
        state.pending = true;
      })
      .addCase(checkTodoItem.fulfilled,(state,action)=>{
        state.pending = false;
        state.todoList = state.todoList.map((item) => {
          if(item._id === action.payload._id){
            return {...item,checked:action.payload.checked}
          }
          return item
        })
      })
      .addCase(checkTodoItem.rejected, (state) => {
        state.pending = false;
        state.error = true;
      })
  },
});

export const {} = todoSlice.actions;
export default todoSlice.reducer;
