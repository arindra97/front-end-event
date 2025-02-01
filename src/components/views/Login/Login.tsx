import { Button, Card, CardBody, Input } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import useRegister from "../Auth/Register/useRegister";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  const { visiblePassword, handleVisiblePassword } = useRegister();
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:gap-20">
      <div className="flex w-full flex-col items-center justify-center gap-10 lg:w-1/3">
        <Image
          src="/images/general/logo.svg"
          alt="logo"
          width={180}
          height={180}
        />
        <Image
          src="/images/ilustrations/login.svg"
          alt="login"
          className="w-2/3 lg:w-full"
          width={1024}
          height={1024}
        />
      </div>

      <Card>
        <CardBody>
          <h2 className="text-xl font-bold text-danger-500">Login</h2>
          <p className="mb-4 text-sm">
            Dont have an account?&nbsp;
            <Link
              href="/auth/register"
              className="font-semibold text-danger-400"
            >
              Register Here
            </Link>
          </p>
          <form className="flex w-80 flex-col gap-4">
            <Input
              type="text"
              label="Email / Username"
              variant="bordered"
              autoComplete="off"
            />
            <Input
              type={visiblePassword.password ? "text" : "password"}
              label="Password"
              variant="bordered"
              autoComplete="off"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={() => handleVisiblePassword("password")}
                >
                  {visiblePassword.password ? (
                    <FaEye className="pointer-events-none text-xl text-default-400" />
                  ) : (
                    <FaEyeSlash className="pointer-events-none text-xl text-default-400" />
                  )}
                </button>
              }
            />
            <Button color="danger" size="lg" type="submit">
              Login
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
