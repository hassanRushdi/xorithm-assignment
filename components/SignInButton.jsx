"use client";

import { signIn } from "next-auth/react";

export default function SignInButton() {
  const handleSignIn = () => {
    signIn("credentials", {
      email: "a@a.com",
      password: "0552320541"
    });
  };

  return <button onClick={handleSignIn}>sign in</button>;
}
