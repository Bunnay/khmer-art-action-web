// import InputField from "./components/Forms/InputField";
import InputField from "../../../components/Forms/InputField";
import Admin from "../../../components/Layouts/Admin";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import api from "../../../utils/api";
import { useCookies } from "react-cookie";
import ErrorMessage from "../../../components/ErrorMessage";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [cookie, setCookie] = useCookies(["access_token"]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("/auth/login", { email, password });
      const token = response.data.access_token;
      setCookie("access_token", JSON.stringify(token), {
        path: "/",
        maxAge: 3600,
        sameSite: true,
      });
      router.push("/admin/dashboard");
    } catch (error) {
      setError(error.response.data.detail);
    }
    setLoading(true);
  };

  return (
    <Admin>
      <div className="flex min-h-full h-screen flex-1 flex-col justify-center items-center sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-gray-800/50 border border-gray-700 px-6 py-6 shadow sm:rounded-lg sm:px-6">
            <div className="sm:mx-auto sm:w-full flex flex-col justify-center sm:max-w-md">
              <h2 className=" mb-5 text-2xl font-bold leading-9 tracking-tight text-white">
                Log in to your account
              </h2>
            </div>
            {error && <ErrorMessage message={error}></ErrorMessage>}
            <form className="space-y-6" onSubmit={handleLogin}>
              <InputField
                id="email"
                label="Your email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <InputField
                label="Password"
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <div className="flex items-center justify-between">
                <div className="text-sm leading-6">
                  <Link
                    href="/admin/auth/forgot-password"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Admin>
  );
}
