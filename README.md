# 🧠 Smart Issue Board

A modern, responsive **Issue Tracking Web Application** built using **React** and **Firebase**, designed to help teams create, manage, and track issues efficiently.

---

## 🚀 Features

### 🔐 Authentication

- Email & Password authentication using Firebase Auth
- Secure login and signup flow
- User session handling with auto login/logout

### 📝 Issue Management

- Create new issues with:

  - Title
  - Description
  - Priority (Low / Medium / High)
  - Status (Open / In Progress / Done)
  - Assigned user

- Duplicate issue detection using **smart title similarity check**
- Real-time issue updates using Firestore listeners

### 📋 Issue List

- View all issues in real time
- Sort issues by **newest first**
- Filter issues by:

  - Status
  - Priority

- Update issue status with rule enforcement:

  - ❌ Cannot move directly from **Open → Done**
  - ✅ Must go through **In Progress**

### 🎨 UI & UX

- Clean, card-based modern UI
- Fully responsive (Desktop / Tablet / Mobile)
- Separate CSS files for maintainability
- Smooth hover effects and transitions

---

## 🛠 Tech Stack

| Technology           | Usage                    |
| -------------------- | ------------------------ |
| **React (Vite)**     | Frontend framework       |
| **Firebase Auth**    | User authentication      |
| **Cloud Firestore**  | Real-time database       |
| **CSS**              | Styling & responsiveness |
| **JavaScript (ES6)** | Application logic        |

---

## 📁 Project Structure

```
smart-issue-board/
│
├── src/
│   ├── components/
│   │   ├── Auth.jsx
│   │   ├── CreateIssue.jsx
│   │   └── IssueList.jsx
│   │
│   ├── styles/
│   │   ├── Auth.css
│   │   ├── CreateIssue.css
│   │   └── IssueList.css
│   │
│   ├── firebase.js
│   ├── App.jsx
│   └── main.jsx
│
├── public/
├── .env
├── package.json
└── README.md
```

---

## 📸 Screenshots
<img width="1920" height="1080" alt="Screenshot 2025-12-30 130233" src="https://github.com/user-attachments/assets/2e204e29-6284-4639-8840-d1f78463e991" />
<img width="1920" height="1080" alt="Screenshot 2025-12-30 130217" src="https://github.com/user-attachments/assets/5c530add-5062-4106-aef4-3ecce7d02548" />
<img width="1920" height="1080" alt="Screenshot 2025-12-30 130259" src="https://github.com/user-attachments/assets/1b7f803d-95ca-4271-8e07-2f0c7f0e162d" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/28db4848-0f5a-447a-8bd2-ad2fb7d78d0c" />

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Subrata-032/smartissueboard.git
cd smart-issue-board
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Firebase

Create a `.env` file in the root directory:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

> ⚠️ Never commit `.env` files to GitHub.

---

### 4️⃣ Run the App

```bash
npm run dev
```

Open:
👉 `http://localhost:5173`

---

## 🔒 Firestore Security Rules (Basic)

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /issues/{issueId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

---

## 🧪 Key Validations & Rules

- Title & Description are mandatory
- Smart duplicate detection before issue creation
- Status transition rule:

  - Open → In Progress → Done

- Real-time UI updates via Firestore listeners

---

## 📌 Future Improvements (Optional)

- User-based issue visibility
- Role-based access (Admin / User)
- Comments on issues
- Dark mode
- Search by title
- Pagination

---

## 👨‍💻 Author

**Subrata Bera**
Built as a learning + demonstration project using modern frontend and cloud technologies.

---

## 📄 License

This project is for **educational and demonstration purposes**.
