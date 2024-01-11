import React, { useState } from "react";
import Modal from "@/components/Modal";
import Input from "@/components/Input";
import {
  AppleIcon,
  CrossIcon,
  EmailIcon,
  EyeIcon,
  FacebookIcon,
  GoogleIcon,
  PasswordIcon,
} from "@/components/Icons";
import Button from "@/components/Button";
import { BtnVariantEnum, ModalTypesEnum } from "@/types/enums";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/utils/store";
import { loginThunk, signInWithGoogleThunk } from "@/store/thunks/authThunk";

type LoginModalProps = {
  onClose: (d?: ModalTypesEnum) => void;
};

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
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
      setFormData(initialFormData);
      onClose();
    }
  };

  const socials = [
    {
      icon: <GoogleIcon />,
      onClick: () => {
        googleAuth();
      },
    },
    {
      icon: <FacebookIcon />,
      onClick: () => {},
    },
  ];

  const googleAuth = async () => {
    await dispatch(signInWithGoogleThunk());
    onClose();
  };

  return (
    <Modal onClose={() => onClose()}>
      <div className="w-full px-5 sm:px-20 md:w-[700px] xl:w-[928px] pt-[70px] pb-[50px] xl:py-[90px] bg-midGrey rounded-[16px] relative">
        <i
          className="absolute top-5 right-5 p-1 cursor-pointer"
          onClick={() => onClose()}
        >
          <CrossIcon />
        </i>
        <div className="absolute left-5 top-4">
          <h3>
            <span className="text-white">Oppo</span>{" "}
            <span className="text-midBlue">Zone</span>
          </h3>
        </div>
        <div className="max-w-[450px] w-full mx-auto">
          <h1 className="text-center">Hello!</h1>
          <p className="tracking-[0.2px] text-center">Log In to your account</p>
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
            <div className="text-darkGrey text-[16px] xl:text-[18px] text-right mt-2 tracking-[-1.297px]">
              <Link href={"/forgot-password"} onClick={() => onClose()}>
                Forgot Password
              </Link>
            </div>
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
            <p className="mt-10 uppercase text-[14px] text-darkGrey tracking-[1.2px] text-center">
              OR LOGIN WITH
            </p>
            <div className="mt-4 flex justify-center gap-10">
              {socials.map(({ icon, onClick }, i) => (
                <i
                  key={i}
                  onClick={onClick}
                  className="cursor-pointer rounded-2xl xl:rounded-[22px] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.5)] bg-white border-[1px] border-[#001C797A] w-[55px] h-[55px] xl:w-[70px] xl:h-[70px] aspect-square flex items-center justify-center"
                >
                  {icon}
                </i>
              ))}
            </div>
            <div className="mt-6 bg-darkGrey opacity-30 h-[1px]"></div>
            <div className="mt-4 text-center">
              <p className="text-center font-medium xl:font-bold tracking-[-1.29px] text-[16px] xl:text-[20px] text-black">
                Don't have an <span>Oppo</span> <span>Zone</span> account?
              </p>
              <p
                className="mt-3 block cursor-pointer border-b-[1px] border-midBlue w-fit mx-auto text-midBlue font-semibold tracking-[-1.29px]"
                onClick={() => onClose(ModalTypesEnum.SIGN_UP)}
              >
                Sign up now
              </p>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
