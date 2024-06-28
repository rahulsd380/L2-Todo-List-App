import AddTodo from "./AddTodo";
import FilterTodo from "./FilterTodo";
import TodoCard from "./TodoCard";


const TodoComponent = () => {
    
    return (
        <div className="flex justify-center items-center max-w-7xl mx-auto">
            <div className='bg-teal-600 w-full rounded-2xl p-10 h-full flex flex-col gap-3'>

                <div className="flex items-center justify-between">
                <AddTodo/>
                <FilterTodo/>
                </div>
                <TodoCard/>
            </div>
        </div>
    );
};

export default TodoComponent;