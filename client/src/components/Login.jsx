import { useState, useContext } from "react"

import { useNavigate } from "react-router-dom"

import { UserContext } from "../context/userContext"

const Login = () => {

  const [form, setForm] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState(null)

  const { login } = useContext(UserContext)

  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    // write async function to send form data to '/login' endpoint
    const loginPost = async () => {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        const data = await response.json()
        if (data.errors) {
            setError(data.errors)
        } else {
            login(data)
            navigate('/')
        }
    }
    loginPost()
  }

  const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.id] : e.target.value
    })
}

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-white dark:bg-black ">
      <div className="md:border md:border-black md:dark:border-white rounded-lg md:shadow-lg p-8 w-5/6 md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-bold mb-4 dark:text-gray-300">Log In</h2>
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
          <button className="bg-black text-white font-medium py-2 px-4 rounded hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100" type="submit">
            Log in
          </button>
        </form>
        <div className="mt-2">
          <p className="text-gray-700 dark:text-white">Don't have an Account yet? 
            <button onClick={() => navigate('/signup')}className="ml-2 text-primary-3 hover:text-primary-5 dark:text-primary-3 dark:hover:text-blue-100">
                Sign up here
            </button>
        </p>
        </div>
        {error && <p className="text-red-600 text-start font-medium uppercase tracking-wide leading-4 mt-4">{error}</p>}
      </div>
    </div>
  )
}

export default Login