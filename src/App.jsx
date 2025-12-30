import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import Auth from "./components/Auth";
import CreateIssue from "./components/CreateIssue";
import IssueList from "./components/IssueList";
import "./App.css";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  if (!user) return <Auth onAuthSuccess={() => {}} />;

  return (
    <div className="ai-root">
      {/* Sidebar */}
      <aside className="ai-sidebar">
        <div className="ai-logo">SIB</div>

        <div className="ai-user-box">
          <span className="ai-user-label">Logged in as</span>
          <span className="ai-user-email">{user.email}</span>
        </div>

        <button
          className="ai-logout"
          onClick={() => signOut(auth)}
        >
          Logout
        </button>
      </aside>

      {/* Main Area */}
      <main className="ai-main">
        <header className="ai-header">
          <h1 className="ai-title">Smart Issue Board</h1>
          <p className="ai-subtitle">
            AI-powered issue tracking & collaboration
          </p>
        </header>

        <section className="ai-content">
          <div className="ai-card">
            <CreateIssue user={user} />
          </div>

          <div className="ai-card">
            <IssueList />
          </div>
        </section>
      </main>
    </div>
  );
}
