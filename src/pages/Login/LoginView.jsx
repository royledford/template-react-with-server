export default function Login({ login }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center w-full max-w-md p-4 m-4 bg-white rounded-md shadow-md">
        <h1 className="mb-4 text-3xl font-bold text-center">Login</h1>
        <form className="w-full">
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-semibold text-gray-600">Email</label>
            <input
              className="px-4 py-2 border border-gray-300 rounded-md"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-semibold text-gray-600">Password</label>
            <input
              className="px-4 py-2 border border-gray-300 rounded-md"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex flex-col mb-4">
            <button
              className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
              onClick={login}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
