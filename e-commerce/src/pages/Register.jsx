import "../styles/Forms.css"
import Title from "../components/Title"
import Button from "../components/Button"
import Input from "../components/Input"
import FormRedirectLink from "../components/FormRedirectLink"

const RegisterPage = () => {
  return (
    <main className="form-page">
      <div className="form-container">
        <Title title="Register" />

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

          <Input type="date" id="date" name="date" label="Date of birth" />

          <Button btnLabel="Register" />
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