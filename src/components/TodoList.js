import React from 'react';
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '../FirebaseInit';
import { toast } from 'react-toastify';

const TodoList = ({ todos, setEditTodo }) => {
    // Function to handle todo task edit
    const handleEditTodo = (todo) => {
        if (todo.completed) {
            toast.warn("Cannot update completed task");
            return;
        }
        setEditTodo(todo);
    };

    // Function to handle todo task completion
    const handleTaskCompletion = async (todo) => {
        // Get reference to the todo document in Firestore
        const todoRef = doc(db, "todos", todo.id);

        // Toggle the 'completed' field in the document
        await updateDoc(todoRef, {
            completed: !todo.completed
        });
    };

    // Function to handle deletion of a todo with a confirmation dialog
    const handleDelete = async (todo) => {
        // Display a confirmation dialog
        const confirmDelete = window.confirm(`Are you sure you want to delete "${todo.todo}" task?`);

        // If user confirms, delete the todo and show success toast
        if (confirmDelete) {
            await deleteDoc(doc(db, "todos", todo.id));
            toast.success("Task Deleted successfully ✌️✌️");
        } else {
            // If user cancels, show info toast about the cancellation
            toast.info("Task deletion canceled. 🚫");
        }
    };

    return (
        <div>
            {/* Mapping through todos to render each todo */}
            {todos.map((todo) => (
                <li key={todo.id} className="list-item">
                    {/* Displaying todo text in an input field */}
                    <input
                        type="text"
                        value={todo.todo}
                        className={`list ${todo.completed ? "complete" : ""}`}
                        onChange={() => { }}
                    />
                    {/* Buttons for completing, editing, and deleting the todo */}
                    <div>
                        <button
                            className="button-complete task-button"
                            onClick={() => handleTaskCompletion(todo)}
                        >
                            {/* Icon for completing the todo */}
                            <i className="fa fa-check-circle"></i>
                        </button>
                        <button
                            className="button-edit task-button"
                            onClick={() => handleEditTodo(todo)}
                        >
                            {/* Icon for editing the todo */}
                            <i className="fa fa-edit"></i>
                        </button>
                        <button
                            className="button-delete task-button"
                            onClick={() => handleDelete(todo)}
                        >
                            {/* Icon for deleting the todo */}
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </li>
            ))}
        </div>
    );
}

export default TodoList;
