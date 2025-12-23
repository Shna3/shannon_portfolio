import { useState } from "react";
import Home from "./Home.tsx";
import Projets from "./Projects.tsx";
import Contact from "./Contacts.tsx";
import "./App.css";

function App() {
  const [page, setPage] = useState<"home" | "projets" | "contact">("home");

  return (
    <div className="container">
      <nav className="navbar">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("projets")}>Projets</button>
        <button onClick={() => setPage("contact")}>Contact</button> 
      </nav>

      <main className="content">
        {page === "home" && <Home />}
        {page === "projets" && <Projets />}
        {page === "contact" && <Contact />}
      </main>
    </div>
  );
}

export default App;
