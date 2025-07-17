import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./shared/layout/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Recomendation from "./pages/recomendation/Recomendation";
import ChatsPage from "./pages/chats/ChatsPage";
import ChatWindow from "./shared/components/chats/ChatWindow";
import RegistrationForm from "./core/auth/RegistrationForm";
import UserCreate from "./pages/login/UserCreate";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="profile" />} />
            <Route path="profile" element={<Profile />} />
            <Route path="recommendations" element={<Recomendation />} />
            <Route path="chats" element={<ChatsPage />} />
            <Route path="chats-window" element={<ChatWindow profile={{
              id: "",
              name: "",
              avatar: "",
              online: false
            }} onClose={function (): void {
              throw new Error("Function not implemented.");
            } } />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="new-user-create" element={<UserCreate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
