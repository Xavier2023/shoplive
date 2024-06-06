import Button from "../Button"
import footerStyle from './footer.module.scss'

function Footer () {
  return (
    <div className={footerStyle.footer}>
        <div className={footerStyle.footerSignup}>
            <span>
                <h2>Sign up now to see <br /> our latest listings</h2>
                <p>Create an account with us and find the fun.</p>
            </span>
            <Button>Create account</Button>
        </div>
        <div className={footerStyle.cta}>
            <p></p>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer 