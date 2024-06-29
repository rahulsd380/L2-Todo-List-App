import { useState } from "react";
import { useGetTodosQuery } from "../redux/api/api";
// import { useAppSelector } from "../redux/hooks";
import AddTodo from "./AddTodo";
import FilterTodo from "./FilterTodo";
import TodoCard from "./TodoCard";



const TodoComponent = () => {
    // const {todos} = useAppSelector((state) => state.todoReducer);

    const [priority, setPriority] = useState('')

    const {data: todos, isLoading, isError} = useGetTodosQuery(priority);
    // console.log(todos);

    if(isLoading){
        return <p>Loading...</p>
    }
    
    return (
        <div className="flex justify-center items-center max-w-7xl mx-auto">
            <div className='bg-teal-600 w-full rounded-2xl p-10 h-full flex flex-col gap-3'>

                <div className="flex items-center justify-between">
                <AddTodo/>
                <FilterTodo priority={priority} setPriority={setPriority}/>
                </div>
                {
                    todos?.data?.map((item, index) => 
                    <TodoCard 
                    key={index}
                    title={item.title}
                    deadline={item.deadline}
                    description={item.description}
                    isCompleted={item.isCompleted}
                    priority={item.priority}
                    />
                    )
                }
            </div>
        </div>
    );
};

export default TodoComponent;