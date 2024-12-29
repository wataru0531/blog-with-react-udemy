import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";

import { auth, db } from "../firebase";
import "./CreatePost.css";

const CreatePost = ({ isAuth }) => {
  useEffect(() => {
    // 権限がなければHomeにリダイレクトさせる
    // URLに直接打ち込まれた場合書き込みできるため
    if(!isAuth){
      navigate("/");
    }
  });

  const navigate = useNavigate();

  const [ title, setTitle ] = useState("");
  const [ postText, setPostText ] = useState("");

  // タイトル
  const onChangeSetTitle = (e) => {
    // console.log(e.target.value)
    setTitle(e.target.value);
  }

  // 投稿内容
  const onChangeSetPostText = (e) => {
    // console.log(e.target.value)
    setPostText(e.target.value);
  }

  // 投稿ボタン
  const onClickCreatePost = async () => {
    // console.log(title, postText)
    console.log(auth.currentUser.displayName)

    // Firestore(データベース)に保存する
    // 事前にFirebaseのルールの書き込みをtrueにする必要がある。
    await addDoc(collection(db, "posts"), {
      // title、postsText、authorなどは任意で命名できる
      title: title,
      postsText: postText,
      author: {
        // firebaseが用意した変数。ログインしているユーザー名、id
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      }
    });

    navigate("/");
  };

  return(
    <div className="createPost">
      <div className="createPost__inner">
        <h1 className="createPost__title">記事を記事を投稿する</h1>
        
        <div className="createPost__inputPost">
          <div>タイトル</div>
          <input 
            type="text"
            value={ title }
            placeholder="タイトルを記入"
            onChange={ onChangeSetTitle }
          />
        </div>

        <div className="createPost__inputPost">
          <div>投稿内容</div>
          <textarea
            value={ postText }
            placeholder="投稿内容を記入"
            onChange={ onChangeSetPostText }
          />
          
        </div>

        <div className="createPost__btn">
          <button 
            className="postButton"
            onClick={ onClickCreatePost }
          >
            投稿する
          </button>
        </div>
      </div>
    </div>
  )
};

export default CreatePost;