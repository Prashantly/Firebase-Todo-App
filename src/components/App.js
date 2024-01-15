import { useEffect, useState } from 'react';
import { collection, onSnapshot } from "firebase/firestore";
import Header from './Header';
import Form from './Form';
import { db } from '../FirebaseInit';
import TodoList from './TodoList';

function App() {
  // State to store the list of todos
  const [todos, setTodos] = useState([]);

  // State to store the todo being edited
  const [editTodo, setEditTodo] = useState(null);

  // Effect to fetch todos from Firestore on component mount
  useEffect(() => {
    // Subscribe to changes in the 'todos' collection in Firestore
    const unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
      // Map Firestore documents to a more usable format
      //for getting realTime updates
      const todos = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      // Set the todos in the state
      setTodos(todos);
    });

    // Cleanup function to unsubscribe from Firestore when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="container">
      <div className="app-wrapper">
        {/* Header component */}
        <div>
          <Header />
        </div>

        {/* Form component for adding/editing todos */}
        <div>
          <Form
            todos={todos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>

        {/* TodoList component to display the list of todos */}
        <div>
          <TodoList
            todos={todos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;





// async function fetchTodos() {
//   const snapshot = await getDocs(collection(db, "todos"));
//   const todos = snapshot.docs.map((doc) => {

//     return {
//       id: doc.id,
//       ...doc.data()
//     }
//   })

//   setTodos(todos)
// }

// fetchTodos();