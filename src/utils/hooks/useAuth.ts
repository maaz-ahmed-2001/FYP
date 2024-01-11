import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useRouter as classicRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../store";
import { updateUser } from "@/store/slices/authSlice";
import { fetchUserThunk } from "@/store/thunks/authThunk";
import { getCookies } from "cookies-next";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { user } = useAppSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const router = useRouter();
  const oldRouter = classicRouter();
  const pageName = oldRouter.pathname;
  const lockedRoutes = ["/"];
  useEffect(() => {
    (async function () {
      const { token } = getCookies();
      if (token) {
        if (!user) {
          const res = await dispatch(fetchUserThunk());
        }
        if (pathname?.includes("/forgot-password")) {
          router.push("/");
        } else {
          setIsAuthenticated(true);
          setIsLoading(false);
        }
      } else {
        setIsAuthenticated(false);
        dispatch(updateUser({ isLoggedin: false, token: null, user: null }));
        if (lockedRoutes.includes(pageName)) {
          router.push("/login");
        } else {
          setIsLoading(false);
        }
      }
    })();
  }, [pathname]);
  return { isAuthenticated, isLoading };
};

export default useAuth;
