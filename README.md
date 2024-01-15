# # Todo App with Firebase

This Todo App is built using React and Firebase, allowing you to manage your tasks seamlessly with features such as adding, fetching, updating, deleting, and marking todos as complete.

## Features

- **Add Todo:**

  - Add a new todo with a todo name and completed boolean value.

- **Get All Todos:**

  - Retrieve the list of all todos from the Firebase database.

- **Update Todo:**

  - Edit the title and details of an existing todo.

- **Delete Todo:**

  - Remove a todo from the list.

- **Mark Todo as Complete:**
  - Toggle the completion status of a todo.

## Technologies Used

- React: Frontend framework for building user interfaces.
- Firebase: Real-time NoSQL cloud database for storing and syncing data.

## Getting Started

### Prerequisites

- Node.js installed
- Firebase project set up with Firestore database

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Prashantly/Firebase-Todo-App.git

   ```

2. Navigate to the project directory:

   ```bash
   cd todo-app-firebase

   ```

3. Navigate to the project directory:

   ```bash
   npm install

   ```

4. Create a Firebase project and set up Firestore database.

5. Update the Firebase configuration in `FirebaseInit.js` with your project credentials.

6. Run the app: `npm start`

7. Access the app in your browser at `http://localhost:3000`.

## Usage

- Add new todos by entering the todo and clicking the "Add" button.
- View the list of todos on the main page.
- Click on the "Edit" button to update a todo's name and Click "OK".
- Click on the "Delete" button to remove a todo.
- Click on the checkbox to mark a todo as complete or incomplete.
