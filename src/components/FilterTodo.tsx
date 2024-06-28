

const FilterTodo = () => {
    return (
        <div>
            <details className="dropdown">
  <summary className="btn m-1">Filter</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-36 right-10 p-4 shadow flex flex-col gap-3">
    <li className="cursor-pointer">High</li>
    <li  className="cursor-pointer">Medium</li>
    <li  className="cursor-pointer">Low</li>
  </ul>
</details>
        </div>
    );
};

export default FilterTodo;