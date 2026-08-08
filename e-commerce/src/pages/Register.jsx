import { Link } from "react-router-dom"
import "../styles/Forms.css"
import Title from "../components/Title"
import Button from "../components/Button"
import Input from "../components/Input"

const RegisterPage = () => {
  return (
    <main className="login-page">
      <div className="login-container">
        <Title title="Register" />

        <form className="login-form">
          <div className="form-group">
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              label="E-mail"
            />
          </div>

          <div className="form-group">
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              label="Password"
            />
          </div>

          <div className="form-group">
            <Input
              type="date"
              id="date"
              name="date"
              label="Date of birth"
            />
          </div>

          <Button btnLabel="Register" />
        </form>

        <p className="register-text">
          You already have an account?
          <Link to="/login">Log in</Link>
        </p>
      </div>
    </main>
  )
}

export default RegisterPage