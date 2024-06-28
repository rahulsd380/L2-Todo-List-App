

const TodoCard = () => {
    return (
        <div className="bg-white p-3 rounded-xl border flex items-center justify-between">
        <h1 className="text-xl font-semibold">Title</h1>
        <p>Deadline</p>
        <p>Description</p>

        <div className="flex items-center gap-4">
        <button className="btn btn-active btn-accent">Edit</button>
        <button className="btn btn-error">Delete</button>
        </div>
    </div>
    );
};

export default TodoCard;