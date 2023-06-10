import axiosInstance from "api/config";

export const getTodos = async () => {
  try {
    // const response = await fetch("http://localhost:5000/todos", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // const res = await response.json();

    const { data } = await axiosInstance.get("/todos");

    return data.todos;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const addTodo = async (todo: string) => {
  try {
    // const response = await fetch("http://localhost:5000/todos", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // const res = await response.json();

    console.log(todo);

    const { data } = await axiosInstance.post("/todos", { name: todo });

    return data.todos;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const deleteTodo = async (id: number) => {
  try {
    // const response = await fetch("http://localhost:5000/todos", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // const res = await response.json();

    return axiosInstance.delete(`/todos/${id}`);

    // return message;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const updateTodo = async (todo) => {
  try {
    const { id, ...todoData } = todo;
    // const response = await fetch("http://localhost:5000/todos", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    console.log({ todoData });

    // const res = await response.json();

    return axiosInstance.patch(`/todos/${id}`, todoData);

    // return message;
  } catch (error) {
    console.log(error);
    return error;
  }
};
