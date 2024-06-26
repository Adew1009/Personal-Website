import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { app } from "./components/firebase";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="app-container">
        <div>
          <NavBar />
        </div>
        <div className="main-content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
