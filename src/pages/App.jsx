import "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import YourProjectPage from "./YourProjectPage";
import ProjectListPage from "./ProjecListPage";
import NotFoundPage from "./NotFoundPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/your-project/:id" element={<YourProjectPage />} />
      <Route path="/project-list" element={<ProjectListPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
