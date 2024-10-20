import { useNavigate } from "react-router-dom";

function Reports() {
  const navigate = useNavigate();
  return (
    <div className="w-full p-2 flex flex-col gap-3 items-center">
      <h1 className="font-bold text-xl">Reports Page</h1>
      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 w-fit bg-blue-200 rounded-md"
      >
        Go back
      </button>
    </div>
  );
}

export default Reports;
