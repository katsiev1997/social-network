import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import SettingsPage from "./pages/SettingsPage"
import HomePage from "./pages/HomePage"
import SearchPage from "./pages/SearchPage"
import ProfilePage from "./pages/ProfilePage"
import MessengerPage from "./pages/MessengerPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/messenger" element={<MessengerPage />} />
      </Routes>
    </>
  )
}

export default App
