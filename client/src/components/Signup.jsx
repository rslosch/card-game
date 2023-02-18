import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Signup = () => {

  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordConfirmation: ""
  })

  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    // TODO: handle form submission
  }

  const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.id] : e.target.value
    })
}

  return (
    <div className="flex justify-center items-center h-screen bg-white dark:bg-black">
      <div className="md:border md:border-black md:dark:border-white bg-white dark:bg-black rounded-lg md:shadow-lg p-8 w-5/6 md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-bold mb-4 dark:text-gray-300">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              className="form-input w-full border p-2 rounded-lg dark:border-white dark:bg-gray-700 placeholder:dark:text-white"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="form-input w-full border p-2 rounded-lg dark:border-white dark:bg-gray-700 dark:text-white placeholder:dark:text-white"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <input
              className="form-input w-full border p-2 rounded-lg dark:border-white dark:bg-gray-700 dark:text-white placeholder:dark:text-white"
              type="password"
              name="password_confirmation"
              id="password_confirmation"
              placeholder="Confirm Password"
              value={form.passwordConfirmation}
              onChange={handleChange}
              required
            />
          </div>
          <button className="bg-black text-white font-medium py-2 px-4 rounded hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100" type="submit">
            Sign up
          </button>
        </form>
        <div className="mt-4">
          <p className="text-gray-700 dark:text-white">Already have an Account? 
            <button onClick={() => navigate('/login')}className="ml-2 text-primary-3 hover:text-primary-5 dark:text-primary-3 dark:hover:text-blue-100">
                Login here
            </button>
        </p>
        </div>
      </div>
    </div>
  )
}

export default Signup
