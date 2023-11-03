import { useState } from "react";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const enteredUsername = event.target.username.value;
    const enteredEmail = event.target.email.value;
    const enteredPassword = event.target.password.value;

    if (!enteredUsername || !enteredEmail || !enteredPassword) {
      setError("*Semua data harus diisi.");
      return;
    }

    if (!/^(?=.*[a-zA-Z])(?=.*\d)/.test(enteredUsername)) {
      setError("*Username harus mengandung kombinasi huruf dan angka.");
      return;
    }

    if (enteredPassword.length < 8) {
      setError("*Password harus memiliki panjang minimal 8 karakter.");
      return;
    }

    const RegisterUser = {
      username: enteredUsername,
      email: enteredEmail,
      password: enteredPassword,
    };

    localStorage.setItem("RegisterUser", JSON.stringify(RegisterUser));
    localStorage.setItem('RegisterUsername', enteredUsername);

    setUsername("");
    setEmail("");
    setPassword("");
    setError("");
    navigate("/login");
  };

  const handleInputChange = () => {
    setError("");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full bg-slate-300">
      <div className="hidden sm:block m-auto">
        <Link to="/" className="flex">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl 2xl:text-8xl">
            <span className="bg-gradient-to-r from-teal-500 via-purple-700 to-orange-400 bg-clip-text text-transparent">
              Chat
            </span>
            <span className="font-medium">Apps</span>
          </h1>
          <div className="sm:text-4xl lg:text-5xl 2xl:text-6xl -mt-4">
          <AiOutlineCodeSandbox />
          </div>
        </Link>
      </div>

      <div className="bg-gray-100 flex flex-col justify-center bg-gradient-to-r from-teal-400 via-purple-400 to-orange-400">
        <form
          className="max-w-[400px] w-full mx-auto bg-white p-4 sm:p-8 rounded-xl bg-transparent sm:scale-90 lg:scale-95 xl:scale-100 relative"
          onSubmit={handleFormSubmit}
        >
          <div className="flex justify-center">
            <h2 className="text-4xl sm:text-5xl text-center py-6">
              <span className="bg-gradient-to-r from-teal-700 via-purple-800 to-orange-600 bg-clip-text text-transparent">Chat</span>
              <span className="font-medium">Apps</span>
            </h2>
            <AiOutlineCodeSandbox size="24px" className="mt-4" />
          </div>
          <h1 className="text-2xl font-medium mb-2">Register</h1>
          <div className="flex flex-col py-2">
            <label>Username</label>
            <input
              className="border p-2 rounded text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
              type="text"
              name="username"
              placeholder="Masukkan nama pengguna..."
              value={username}
              onChange={(e) => {
              setUsername(e.target.value);
              handleInputChange();
            }}
            />
          </div>
          <div className="flex flex-col py-2 relative">
            <label>Email</label>
            <input
              className="border p-2 rounded text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"
              type="email"
              name="email"
              placeholder="Masukkan email..."
              value={email}
              onChange={(e) => {
              setEmail(e.target.value);
              handleInputChange();
            }}
            />
            <p className="text-sm m-1 text-pink-400 invisible peer-invalid:visible absolute right-0">
              Email tidak valid
            </p>
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input
              className="border p-2 rounded text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
              type="password"
              name="password"
              placeholder="Masukkan password..."
              value={password}
              onChange={(e) => {
              setPassword(e.target.value);
              handleInputChange();
            }}
            />
          </div>
          <button className="border rounded w-full mt-5 mb-2 py-2 sm:py-3 bg-indigo-600 hover:bg-indigo-500 text-white">
            Register
          </button>
          <p  className="mb-1">Sudah memiliki akun ? <Link to='/login' className="text-blue-500">Login here</Link></p>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  );
}
