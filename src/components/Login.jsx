import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";

import { auth, provider } from "../firebase";

const Login = ({ setIsAuth }) => {
  // console.log(setIsAuth);
  const navigate = useNavigate();

  const onClickLoginWithGoogle = () => {
    // Googleでログイン(今回はポップアップを使う)
    signInWithPopup(auth, provider).then(result => {
      // console.log(result)
      // ログインしたかどうかををローカルストレージに保存
      localStorage.setItem("isAuth", true);

      // 認証をtrueに
      setIsAuth(true);

      navigate("/");
    });
  };

  return(
    <div>
      <p>ログインして始める</p>
      <button onClick={ onClickLoginWithGoogle }>Googleでログイン</button>
    </div>
  )
};

export default Login;