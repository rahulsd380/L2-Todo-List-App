import { FormEvent, useState } from "react";


const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();
    console.log({ title, deadline, description });

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
          onBlur={(e) => e.target.value}
          name="title"
            type="text"
            id="title"
            className="p-3 border rounded-md bg-white focus:outline-none w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="deadline">Deadline</label>
          <input
          onBlur={(e) => e.target.value}
          name="deadline"
            type="date"
            id="deadline"
            className="p-3 border rounded-md bg-white focus:outline-none w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="description">Description</label>
          <textarea
          onBlur={(e) => e.target.value}
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