
function SignUp() {
  return (
    <div className="signupContainer">
        <h3>Sign Up</h3>
        <form autoComplete="off">
          <label htmlFor="First Name">First Name</label>
          <input type="text" id="fname" name="fname" placeholder="first name" />
        </form>
    </div>
  )
}

export default Register