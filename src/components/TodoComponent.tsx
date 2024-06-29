import { useAppSelector } from "../redux/hooks";
import AddTodo from "./AddTodo";
import FilterTodo from "./FilterTodo";
import TodoCard from "./TodoCard";



const TodoComponent = () => {
    const {todos} = useAppSelector((state) => state.todoReducer);
    
    return (
        <div className="flex justify-center items-center max-w-7xl mx-auto">
            <div className='bg-teal-600 w-full rounded-2xl p-10 h-full flex flex-col gap-3'>

                <div className="flex items-center justify-between">
                <AddTodo/>
                <FilterTodo/>
                </div>
                {
                    todos.map((item, index) => 
                    <TodoCard 
                    key={index}
                    title={item.title}
                    deadline={item.deadline}
                    description={item.description}
                    isCompleted={item.isCompleted}
                    />
                    )
                }
            </div>
        </div>
    );
};

export default TodoComponent;