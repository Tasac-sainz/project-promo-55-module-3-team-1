import "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import YourProjectPage from "./YourProjectPage";
import ProjectListPage from "./ProjecListPage";
import NotFoundPage from "./NotFoundPage";
import "../styles/app.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/your-project" element={<YourProjectPage />} />
      <Route path="/project-list" element={<ProjectListPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
