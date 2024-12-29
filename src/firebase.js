import { initializeApp } from "firebase/app";

// 認証で使うモジュール
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// データベース(firestore)作成のためのモジュール
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXvRUacCZl-SZ2RCVW3ZiEG0mc9opcrd0",
  authDomain: "blog-shincode.firebaseapp.com",
  projectId: "blog-shincode",
  storageBucket: "blog-shincode.appspot.com",
  messagingSenderId: "440490751659",
  appId: "1:440490751659:web:1a227e009cc308d97669ee"
};


// 認証とFirestoreで使うための初期化
const app = initializeApp(firebaseConfig);

// 認証の初期化
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// データベースの初期化
const db = getFirestore(app);

export { auth, provider, db };