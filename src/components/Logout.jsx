import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

import { auth } from "../firebase";

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();

  // ログアウト
  const onClickLogout = () => {
    signOut(auth).then(() => {
      // ローカルストレージをストレージをリセットする
      localStorage.clear();

      // 認証をfalseにする
      setIsAuth(false);

      navigate("/login");
    })
  };

  return(
    <div>
      <div>Logout</div>
      <button onClick={ onClickLogout }>ログアウト</button>
    </div>
    
  );
};

export default Logout;