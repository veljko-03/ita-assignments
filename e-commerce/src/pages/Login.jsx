import "../styles/Forms.css"
import Title from "../components/Title"
import Button from "../components/Button"
import Input from "../components/Input"
import FormRedirectLink from "../components/FormRedirectLink"

const LoginPage = () => {
  return (
    <main className="form-page">
      <div className="form-container">
        <Title title="Log in" />

        <form className="form">
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            label="E-mail"
          />

          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            label="Password"
          />

          <Button btnLabel="Log in" />
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