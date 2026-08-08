import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/Forms.css"
import Title from "../components/Title"
import Button from "../components/Button"
import Input from "../components/Input"
import FormRedirectLink from "../components/FormRedirectLink"
import { loginUser } from "../services/userService"
import { validateLoginForm } from "../utils/validation"
import { saveAuth } from "../services/auth"

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const navigate = useNavigate()

  const [errors, setErrors] = useState({})
  const [apiError, setApiError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }))

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }))

    setApiError("")
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setApiError("")

    const validationErrors = validateLoginForm(formData)

    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      return
    }

    try {
      setIsLoading(true)

      const data = await loginUser(formData)

      saveAuth({
        token: data.token,
        expiresAt: data.expiresAt,
      })

      console.log("Login successful")

      navigate("/shop")
    } catch (error) {
      console.error("Login error:", error)
      setApiError(error.message || "Login failed.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="form-page">
      <div className="form-container">
        <Title title="Log in" />

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

          {apiError && <p className="form-error">{apiError}</p>}

          <Button
            btnLabel={isLoading ? "Logging in..." : "Log in"}
            disabled={isLoading}
            type="submit"
          />
        </form>

        <FormRedirectLink
          linkTo="/register"
          redirectText="Don't have an account?"
          redirectLink="Register"
        />
      </div>
    </main>
  )
}

export default LoginPage
