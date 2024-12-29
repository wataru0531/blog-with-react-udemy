import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFilePen, faRightToBracket } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";

const Navbar = ({ isAuth }) => {

  return(
    <nav className="globalNav">
      <ul className="globalNav__lists">
        <li className="globalNav__list">
          <Link className="globalNav__link" to="/">
            <FontAwesomeIcon icon={faHouse} />
            Home
          </Link>
        </li>

        { 
          // ログインしている時のみ投稿できるようにする
          isAuth && (
            <li className="globalNav__list">
              <Link className="globalNav__link" to="/createpost">
                <FontAwesomeIcon icon={ faFilePen } />
                記事投稿
              </Link>
            </li>
          )
        }
        
        <li className="globalNav__list">
          { 
            isAuth ? (
              // ログインしている時
              <Link className="globalNav__link" to="/logout">
                <FontAwesomeIcon icon={ faRightToBracket } />
                ログアウト
              </Link>
            ) : (
              // ログアウトしている時
              <Link className="globalNav__link" to="/login">
                <FontAwesomeIcon icon={ faRightToBracket } />
                ログイン
              </Link>
            )
          }
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;