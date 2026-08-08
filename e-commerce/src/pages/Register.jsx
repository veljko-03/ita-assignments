import { useState } from "react"
import { useNavigate } from "react-router-dom"

import "../styles/Forms.css"
import Title from "../components/Title"
import Button from "../components/Button"
import Input from "../components/Input"
import FormRedirectLink from "../components/FormRedirectLink"

import { registerUser } from "../services/userService"
import { validateRegisterForm } from "../utils/validation"

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    date: "",
  })
  const navigate = useNavigate()

  const [errors, setErrors] = useState({})
  const [apiError, setApiError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }))

    // Remove the error for this field when the user changes it
    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }))

    setApiError("")
    setSuccessMessage("")
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setApiError("")
    setSuccessMessage("")

    // Validate form
    const validationErrors = validateRegisterForm(formData)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      return
    }

    try {
      setIsLoading(true)

      const result = await registerUser(formData)

      console.log("Registration successful:", result)

      setSuccessMessage("Registration successful!")
      navigate("/login")

      // Clear form
      setFormData({
        email: "",
        password: "",
        date: "",
      })
    } catch (error) {
      console.error("Registration error:", error)

      setApiError(error.message || "Something went wrong.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="form-page">
      <div className="form-container">
        <Title title="Register" />

        <form className="form" onSubmit={handleSubmit}>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            label="E-mail"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            label="Password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />

          <Input
            type="date"
            id="date"
            name="date"
            label="Date of birth"
            value={formData.date}
            onChange={handleChange}
            error={errors.date}
          />

          {apiError && <p className="form-error">{apiError}</p>}

          {successMessage && <p className="form-success">{successMessage}</p>}

          <Button
            btnLabel={isLoading ? "Registering..." : "Register"}
            disabled={isLoading}
            type="submit"
          />
        </form>

        <FormRedirectLink
          linkTo="/login"
          redirectText="You already have an account?"
          redirectLink="Login"
        />
      </div>
    </main>
  )
}

export default RegisterPage