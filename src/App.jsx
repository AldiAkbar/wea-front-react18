import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import ScanQR from "./Components/ScanQR";
import Register from "./Components/Register";
import Login from "./Components/Login";
import ChatRoom from "./Pages/ChatRoom";
import PhoneBook from "./Pages/PhoneBook";
import Groups from "./Pages/Groups";
import AutoReply from "./Pages/AutoReply";
import Setting from "./Pages/Setting";
import CreateCampaign from "./Pages/CreateCampaign";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/scan" element={<ScanQR />} />
        <Route path="/chat" element={<ChatRoom />} />
        <Route path="/phonebook" element={<PhoneBook />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/reply" element={<AutoReply />} />
        <Route path="/create" element={<CreateCampaign />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  </Router>
  )
}

export default App
