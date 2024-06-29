import { FormEvent, useState } from "react";
// import { useAppDispatch } from "../redux/hooks";
// import { addTodo } from "../redux/features/todoSlice";
import { useAddTodoMutation } from "../redux/api/api";


const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');

  // const dispatch = useAppDispatch();


  const [addTodo, {data, isError, isLoading, isSuccess}] = useAddTodoMutation();


  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();
    // dispatch(addTodo({title, deadline, description}));

    const todoDetails = {
      title: title,
      deadline : deadline,
      description : description,
      priority : priority,
      isCompleted : false,
    };

    addTodo(todoDetails);



    // Clear form fields after submission
    setTitle('');
    setDeadline('');
    setDescription('');
  };



    return (
        <div>
            <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Add Todo</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
   
  <form onSubmit={handleAddTodo} className="">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="title">Title</label>
          <input
          onBlur={(e) => setTitle(e.target.value)}
          name="title"
            type="text"
            id="title"
            className="p-3 border rounded-md bg-white focus:outline-none w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="title">Priority</label>
          <input
          onBlur={(e) => setPriority(e.target.value)}
          name="title"
            type="text"
            id="title"
            className="p-3 border rounded-md bg-white focus:outline-none w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="deadline">Deadline</label>
          <input
          onBlur={(e) => setDeadline(e.target.value)}
          name="deadline"
            type="date"
            id="deadline"
            className="p-3 border rounded-md bg-white focus:outline-none w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="description">Description</label>
          <textarea
          onBlur={(e) => setDescription(e.target.value)}
          name="description"
            id="description"
            className="p-3 border rounded-md bg-white focus:outline-none w-full"
            rows={4}
          />
        </div>
        <div className="mt-6">
          <button type="submit" className="btn btn-active btn-accent w-full">Submit</button>
        </div>
      </form>




    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
    );
};

export default AddTodo;