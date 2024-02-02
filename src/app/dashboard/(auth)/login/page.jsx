"use client";
import React from "react";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter} from "next/navigation";


const Login = () => {
  const session = useSession();
  const router = useRouter();
 
  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/");
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}></h1>
      <h2 className={styles.subtitle}>Please sign in to use PAC</h2>

         <button
        onClick={() => {
          signIn("google");
        }}
        className={styles.button + " " + styles.google}
      >
        Login with Google
      </button>
     </div>
  );
};

export default Login;
