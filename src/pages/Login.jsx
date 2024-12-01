import logo from "../images/logo.jpg";
import coverPage from "../images/coverPage.jpg";

export default function Login() {
  return (
    <div
      className="flex flex-row min-h-screen "
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${coverPage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="flex w-full">
        <div className="min-h-full w-2/5 bg-[#1A1F7D] flex flex-col pb-10 px-8">
          <div className="p-7 flex gap-4">
            <img
              src={logo}
              alt="DC"
              className="rounded-full bg-white h-14 w-14"
            />
            <div>
              <h2 className="text-white font-bold text-2xl">
                DILIMAN PREPERATORY SCHOOL
              </h2>
              <h3>SCHOOL MANAGEMENT SYSTEM</h3>
            </div>
          </div>

          <div className="max-w-lg w-[400px] p-8 mx-auto my-auto bg-white rounded-lg shadow-md ">
            <h2 className="text-xl font-semibold text-center mb-6 text-[#1A1F7D]">
              Login
            </h2>
            <form>
              <div className="mb-4">
                <label
                  for="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="input w-full text-black bg-slate-50"
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  for="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="input input-bordered w-full text-black bg-slate-50"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  id="showPassword"
                  className="btn btn-xs mt-2 bg-[#1A1F7D]"
                >
                  Show Password
                </button>
              </div>
              <div className="flex justify-center mt-6 mb-5">
                <button type="submit" className="btn btn-primary w-full">
                  Login
                </button>
              </div>
            </form>
            <a href="/register" className="text-blue-700 underline">
              Create account
            </a>
          </div>
        </div>

        <div
          className="w-64 h-full bg-[#1A1F7D] z-20"
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 50% 50%, 0% 100%)" }}
        ></div>

        <div
          className="w-64 h-full bg-[#8186e9] -translate-x-full opacity-50"
          style={{ clipPath: "polygon(0% 100%, 100% 100%, 50% 50%, 0% 0%)" }}
        ></div>

        <div className="min-h-full w-1/2 pb-10 flex flex-col justify-center items-center flex-grow mr-[4em]">
          <h2 className="text-white font-bold text-2xl mb-8 text-center">
            LIFE INFORMATION INNOVATION KNOWLEDGE
          </h2>
          <img src={logo} alt="DC" className="rounded-full h-60 w-60" />
        </div>
      </div>
    </div>
  );
}
