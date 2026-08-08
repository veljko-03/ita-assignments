import { Link } from "react-router-dom"
import "../styles/Forms.css"
import Title from "../components/Title"
import Button from "../components/Button"
import Input from "../components/Input"

const LoginPage = () => {
  return (
    <main className="login-page">
      <div className="login-container">
        <Title title="Log in" />

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

          <Button btnLabel="Log in" />
        </form>

        <p className="register-text">
          Don't have an account?
          <Link to="">Register</Link>
        </p>
      </div>
    </main>
  )
}

export default LoginPage