import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";

import { db } from "../firebase";
import "./Home.css";

const Home = ({ isAuth }) => {
  const [ postList, setPostList ] = useState([])

  useEffect(() => {
    // Firebaseから投稿内容を取得
    // 参考URL https://firebase.google.com/docs/firestore/query-data/get-data

    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      console.log(data)
      // console.log(data.docs)
      // console.log(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    
      // data()...docs >> field内のオブジェクトを取得できる関数
      // 参考URL https://googleapis.dev/nodejs/firestore/latest/DocumentSnapshot.html#data
      const post = data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
      console.log(post)

      setPostList(post)
      // console.log(postList)
    };
    
    getPosts();
  }, []);

  // 削除
  const onClickDelete = async (id) => {
    // db、コレクション名、idを指定する
    await deleteDoc(doc(db, "posts", id));

    // 再レンダリング
    window.location.href = "/";
  }

  // authの中
  // console.log(auth)

  return (
    <div className="home">
      { 
        postList.map(post => (
          <div key={ post.id } className="home__content">
            <div className="home__header">
              <h1>{ post.title }</h1>
            </div>
          
            <div className="home__postTextContainer">
              { post.postsText }
            </div>
            
            <div className="home__nameAndDeleteButton">
              <h3>@{ post.author.username }</h3>
                { 
                  // post.author.id ... 投稿した人のID
                  // auth.currentUser.uid ... いまログインしているアカウントのID
                  // post.author.id === auth.currentUser.uid && (
                  //   <button onClick={ () => onClickDelete(post.id) }>削除</button>
                  // )
                  
                  isAuth && (
                    <button onClick={ () => onClickDelete(post.id) }>削除</button>
                  )
                }
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Home;