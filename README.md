Notes Taking Web App

📌 Project Overview

This is a simple Notes Taking Web App built using Node.js, Express.js, EJS, and the File System (fs) module. Users can create, read, edit, and delete text-based notes, which are stored as individual .txt files inside a files/ folder.

🛠️ Tech Stack

Frontend: HTML, CSS, EJS (Embedded JavaScript)

Backend: Node.js, Express.js

File Handling: fs (File System) module

Styling: Bootstrap and Tailwind CSS & Toastr.js for notifications

🏗️ Folder Structure

📂 MyTaskManager
├── 📂 files             # Stores all notes as .txt files
├── 📂 public            # Static assets (CSS, JS, images)
├── 📂 views             # EJS templates
│   ├── index.ejs       # Homepage - displays all notes
│   ├── show.ejs        # Displays a single note
│   ├── edit.ejs        # Edit a note
├── index.js           # Main server file (Express app)
├── package.json        # Project dependencies & scripts
├── README.md           # Project documentation

🚀 Features

✅ View All Notes: Reads .txt files from the files/ directory and displays them.

✅ Create New Note: Users can create a note, which gets stored as a .txt file.

✅ Read Note Content: Click on a note to view its full content.

✅ Edit a Note: Update the content of a note.

✅ Delete a Note: Remove unwanted notes permanently.

✅ Toaster Notifications: Shows success/error messages for all actions.

⚡ How It Works

Homepage (index.ejs)

Lists all files stored in the files/ directory.

Displays buttons for Create, Read, Edit, and Delete actions.

Create a New Note (/create route)

User enters a title & details.

A new .txt file is created inside files/.

Read a Note (/file/:filename route)

Reads and displays the content of the selected .txt file.

Edit a Note (/edit/:filename route)

Allows renaming of the file.

Delete a Note (/delete route)

Deletes the selected .txt file permanently.

🔧 Installation & Setup

Clone the repository:

git clone 

Install dependencies:

npm install

Run the server:

node server.js

Open in Browser:

Go to: http://localhost:3000

🛠️ Dependencies Used

express → Web framework for Node.js

ejs → Templating engine for rendering HTML

fs → Node.js File System module for file handling

path → Helps in handling file paths

toastr.js → Displays success/error notifications

📌 Future Enhancements

✅ Store notes in a database (MongoDB/MySQL)

✅ User authentication (Login/Signup)

✅ Tagging & Search functionality

✅ Rich text editor for better formatting

📩 Contact

If you have any questions or suggestions, feel free to reach out!

Email: vrajpatil4444@gmail.com
