import { getServerSession } from "next-auth";
import LoginForm from "@/components/LoginForm";
import { redirect } from "next/navigation";

const RegisterPage = async () => {
  const session = await getServerSession();

  if (session?.user) {
    return redirect("/");
  }

  return (
    <section>
      <LoginForm />
    </section>
  );
};

export default RegisterPage;
