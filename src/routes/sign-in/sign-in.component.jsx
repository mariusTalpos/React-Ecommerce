import './sign-in.styles.scss'

import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

const SignInComponent = ()=>{
  const logGoogleUser = async () => {
      const response = await signInWithGooglePopup();
      console.log(response)
  }
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}> Sign in with Google Popup</button>
    </div>
  )
}

export default SignInComponent