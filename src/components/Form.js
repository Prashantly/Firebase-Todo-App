import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { db } from '../FirebaseInit';

const Form = ({ todos, editTodo, setEditTodo }) => {
    // State to manage the input value
    const [input, setInput] = useState("");

    // Effect to update input value when editTodo changes
    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.todo);
        } else {
            setInput("");
        }
    }, [editTodo]);

    // Handle input change
    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    // Handle form submission
    const onFormSubmit = async (event) => {
        event.preventDefault();

        // Check if input is empty
        if (input === "") {
            toast.error("Task input text cannot be empty 😭😭");
            return;
        }

        // If editing an existing task
        if (editTodo) {


            await setDoc(doc(db, "todos", editTodo.id), {
                id: editTodo.id,
                todo: input,
                createdOn: editTodo.createdOn,
                updatedOn: new Date(),
            });

            setEditTodo(null)
            toast.success("Task Updated successfully 👍👍");
        } else {
            // If adding a new task
            await addDoc(collection(db, "todos"), {
                todo: input,
                completed: false,
                createdOn: new Date(),
            });

            toast.success("Task added successfully 😍😍");
        }

        // Reset input after submission
        setInput("");
    };

    return (
        <>
            <form onSubmit={onFormSubmit}>
                {/* Input field for task */}
                <input
                    type="text"
                    placeholder="Enter a Todo..."
                    className="task-input"
                    value={input}
                    onChange={onInputChange}
                />

                {/* Submit button */}
                <button type="submit" className="button-add ">
                    {editTodo ? "OK" : "ADD"}
                </button>
            </form>

            {/* Display total task count */}
            <p className="task-count">
                Total tasks :{" "}
                <span
                    style={{
                        color: "#21f9fec9",
                        fontWeight: "bold",
                    }}
                >
                    {todos.length}
                </span>
            </p>
        </>
    );
}

export default Form;
