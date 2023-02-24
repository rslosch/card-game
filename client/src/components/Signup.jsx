import { useState, useContext } from "react"

import { useNavigate } from "react-router-dom"

import { UserContext } from "../context/userContext"

const Signup = () => {

  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordConfirmation: ""
  })
  const [error, setError] = useState([])
  
  const { signup } = useContext(UserContext)

  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    // async function to send form data to '/signup' endpoint
    const signupPost = async () => {
        const response = await fetch('/signup', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        const data = await response.json()
        console.log("data:",data)
        if (data.errors) {
            setError(data.errors)
        } else {
            signup(data)
            navigate('/')
        }
    }
    signupPost()
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
              // type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
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
            />
          </div>
          <div className="mb-6">
            <input
              className="form-input w-full border p-2 rounded-lg dark:border-white dark:bg-gray-700 dark:text-white placeholder:dark:text-white"
              type="password"
              name="passwordConfirmation"
              id="passwordConfirmation"
              placeholder="Confirm Password"
              value={form.passwordConfirmation}
              onChange={handleChange}
            />
          </div>
          <button className="bg-black text-white font-medium py-2 px-4 rounded hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100" type="submit">
            Sign up
          </button>
        </form>
        <div className="mt-1 mb-3">
          <p className="text-gray-700 dark:text-white">Already have an Account? 
            <button onClick={() => navigate('/login')}className="ml-2 text-primary-3 hover:text-primary-5 dark:text-primary-3 dark:hover:text-blue-100">
                Login here
            </button>
        </p>
        </div>

        {error.length > 0 && error.map((err, index) => {
            return (
                <div key={index} className="flex flex-col items-start justify-center">
                    <p className="text-red-600 text-start font-medium uppercase tracking-wide leading-4 mb-2">{err}</p>
                </div>
            )
        })}

      </div>
    </div>
  )
}

export default Signup
