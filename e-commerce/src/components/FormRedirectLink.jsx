import { Link } from "react-router-dom"
import "../styles/Forms.css"

const FormRedirectLink = ({redirectText, redirectLink, linkTo}) => (
  <p className="redirect-text">
    {redirectText}
    <Link to={linkTo} className="redirect-link">{redirectLink}</Link>
  </p>
)

export default FormRedirectLink