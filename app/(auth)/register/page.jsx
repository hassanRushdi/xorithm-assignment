import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import RegistrationForm from "@/components/RegistrationForm";

const RegisterPage = async () => {
  const session = await getServerSession();
  if (session?.user) {
    return redirect("/");
  }

  return (
    <section>
      <RegistrationForm />
    </section>
  );
};

export default RegisterPage;
