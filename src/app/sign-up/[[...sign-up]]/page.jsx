import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <>
      <div className="flex items-center justify-center mt-5">
        <div className="mx-auto">
          <SignUp />
        </div>
      </div>
    </>
  );
}
