import Button from "@/components/Button";
import { logoutUser } from "@/store/slices/authSlice";
import { BtnVariantEnum } from "@/types/enums";
import { useAppDispatch } from "@/utils/store";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/router";
import React from "react";

const HomepageContainer: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const logout = () => {
    deleteCookie("token");
    dispatch(logoutUser());
    router.push("/login");
  };

  return (
    <section className="min-h-[100vh] bg-white">
      <div className="flex justify-between items-center w-full px-10">
        <h1>Dashboard</h1>
        <Button variant={BtnVariantEnum.SHADOW_PRIMARY} onClick={logout}>
          Logout
        </Button>
      </div>
    </section>
  );
};

export default HomepageContainer;
