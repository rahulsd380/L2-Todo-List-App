import { removeTodo, toggleState } from "../redux/features/todoSlice";
import { useAppDispatch } from "../redux/hooks";

type TTodoCardProp = {
    title: string;
    deadline: string;
    description: string;
    isCompleted: boolean;
    priority: string;
};


const TodoCard: React.FC<TTodoCardProp> = ({title, deadline, description, isCompleted, priority}) => {
    const dispatch = useAppDispatch();
    
    const handleToggleState = () => {
        dispatch(toggleState(title));
    }
    return (
        <div className="bg-white p-3 rounded-xl border flex items-center justify-between">
            <input onChange={handleToggleState} type="checkbox" name="" id="" />
        <h1 className="text-xl font-semibold">{title}</h1>
        <div>
            <p className={`
                ${priority === "High" ? "text-rose-500" : ""}
                ${priority === "Medium" ? "text-yellow-500" : ""}
                ${priority === "Medium" ? "text-teal-500" : ""}
                `}>{priority}</p>
        </div>
        <div>
        {
           isCompleted ? 
           <p className="text-green-500">Done</p>
           : 
           <p className="text-rose-500">Pending</p> 
        }
        </div>
        <p>{deadline}</p>
        <p>{description}</p>

        <div className="flex items-center gap-4">
        <button className="btn btn-active btn-accent">Edit</button>
        <button onClick={() => dispatch(removeTodo(title))} className="btn btn-error">Delete</button>
        </div>
    </div>
    );
};

export default TodoCard;