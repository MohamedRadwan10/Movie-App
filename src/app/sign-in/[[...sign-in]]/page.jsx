import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center mt-5">
      <div className="mx-auto">
        <SignIn />
      </div>
    </div>
  );
}
