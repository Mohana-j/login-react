import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Dashboard = () => {
    const navigate = useNavigate();
    const subjects = ["Math", "Physics", "Chemistry", "Biology", "English"];
    const [marks, setMarks] = useState({ Math: "", Physics: "", Chemistry: "", Biology: "", English: "" });

    const handleChange = (e) => {
        setMarks({ ...marks, [e.target.name]: e.target.value });
    };

    const handleAdd = () => {
        alert("Marks Added Successfully!");
        console.log("Entered Marks:", marks);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-3xl font-bold mb-6 text-white">Student Dashboard</h2>

            <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-lg w-auto border border-white border-opacity-30">
                <table className="border-collapse border border-gray-400 w-full">
                    <thead>
                        <tr className="bg-gray-900 text-white">
                            {subjects.map((subject, index) => (
                                <th key={index} className="border p-3 text-center">{subject}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {subjects.map((subject, index) => (
                                <td key={index} className="border p-3">
                                    <input
                                        type="number"
                                        name={subject}
                                        value={marks[subject]}
                                        onChange={handleChange}
                                        className="border p-2 rounded w-full text-center focus:ring-2 focus:ring-green-400"
                                    />
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>

                <div className="flex justify-center gap-4 mt-6">
                    <button
                        onClick={handleAdd}
                        className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-700 transition-transform transform hover:scale-110"
                    >
                        Add
                    </button>
                    <button
                        onClick={() => navigate("/")}
                        className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-700 transition-transform transform hover:scale-110"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
