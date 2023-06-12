import InputField from "../components/Forms/InputField";
import Admin from "../components/Layouts/Admin";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <Admin>
      <div className="flex min-h-full h-screen flex-1 flex-col justify-center items-center sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-gray-800/50 border border-gray-700 px-6 py-6 shadow sm:rounded-lg sm:px-6">
            <div className="sm:mx-auto sm:w-full flex flex-col justify-center sm:max-w-md mb-5">
              <h2 className="text-2xl font-bold leading-9 tracking-tight text-white">
                Forget your password
              </h2>
              <p className="text-gray-400">
                Please enter the email address you would like your password
                reset information sent to
              </p>
            </div>

            <form className="space-y-6" action="#" method="POST">
              <InputField
                id="email"
                label="Your email"
                type="email"
                name="email"
                required
              />

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Reset Password
                </button>
              </div>

              <div>
                <Link
                  href="/admin/auth/login"
                  className="rounded-md px-3 py-1.5 text-sm leading-6 shadow-sm"
                >
                  Back to login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Admin>
  );
}
