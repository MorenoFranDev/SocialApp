import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthenticationPage from "./Pages/AuthenticationPage";
import PicksPage from "./Pages/PicksPage";
import UploadPage from "./Pages/UploadPage";
import { ProfilePage } from "./Pages/ProfilePage";
import ActualizePage from "./Pages/ActualizePage";
import "./App.css"

function App() {
  const token = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={token ? <PicksPage /> : <AuthenticationPage />}
        />
        <Route path="/login" element={<AuthenticationPage />} />
        <Route path="/register" element={<AuthenticationPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/actulize/:id" element={<ActualizePage />} />
        <Route path="/user/:profile/" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
