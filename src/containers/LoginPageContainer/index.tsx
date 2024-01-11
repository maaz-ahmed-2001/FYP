import React, { useState } from "react";
import Modal from "@/components/Modal";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { BtnVariantEnum, ModalTypesEnum } from "@/types/enums";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/utils/store";
import { loginThunk, signInWithGoogleThunk } from "@/store/thunks/authThunk";
import { EmailIcon, EyeIcon, PasswordIcon } from "@/components/Icons";
import PageHead from "@/components/Head";

const LoginPageContainer: React.FC = () => {
  const { isLoading } = useAppSelector((state) => state.auth.login);
  const dispatch = useAppDispatch();
  const initialFormData = {
    email: "",
    password: "",
  };
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState<any>();

  const handlePasswordVisibility = () => {
    setShowPass(!showPass);
  };

  const formHandler = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const router = useRouter();
  const { email, password } = formData;

  const handleErrors = () => {
    if (!email) {
      setFormErrors({ email: "Email is required" });
    } else if (!password) {
      setFormErrors({ password: "Password is required" });
    } else {
      setFormErrors({});
      return true;
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (handleErrors()) {
      await dispatch(loginThunk({ email, password }));
      router.push("/");
      setFormData(initialFormData);
    }
  };

  return (
    <section className="bg-white min-h-[100vh] flex justify-center items-center">
      <PageHead title="Login | Admin" />
      <div className="w-full px-5 sm:px-20 md:w-[700px] xl:max-w-[600px] mx-auto pt-[70px] pb-[50px] xl:py-[90px] rounded-[16px] relative">
        <div className="max-w-[450px] w-full mx-auto">
          <h1 className="text-center">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mt-7">
              <Input
                onChange={formHandler}
                name="email"
                id="email"
                value={formData.email}
                error={formErrors?.email}
                className="bg-white pr-4"
                placeholder="Email Address"
                iconStart={
                  <i>
                    <EmailIcon />
                  </i>
                }
              />
            </div>
            <div className="mt-7">
              <Input
                onChange={formHandler}
                value={formData.password}
                name="password"
                id="password"
                className="bg-white"
                type={showPass ? "text" : "password"}
                error={formErrors?.password}
                placeholder="Password"
                iconStart={
                  <i>
                    <PasswordIcon />
                  </i>
                }
                iconEnd={
                  <i
                    onClick={handlePasswordVisibility}
                    className="cursor-pointer"
                  >
                    <EyeIcon />
                  </i>
                }
              />
            </div>
            {/* <div className="text-darkGrey text-[16px] xl:text-[18px] text-right mt-2 tracking-[-1.297px]">
            <Link href={"/forgot-password"}>Forgot Password</Link>
          </div> */}
            <div className="mt-10">
              <Button
                type={"submit"}
                variant={BtnVariantEnum.SHADOW_PRIMARY}
                disabled={isLoading}
                className="max-w-full w-full h-[50px] md:text-[24px]"
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPageContainer;
