import './sign-in.styles.scss'

import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignInComponent = ()=>{
  const logGoogleUser = async () => {
      const { user } = await signInWithGooglePopup();
      console.log(user)
      const userDocRef = await createUserDocumentFromAuth(user)
  }
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}> Sign in with Google Popup</button>
    </div>
  )
}

export default SignInComponent