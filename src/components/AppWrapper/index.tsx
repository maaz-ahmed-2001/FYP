import useAuth from "@/utils/hooks/useAuth";
import React from "react";
import FullPageSpinner from "../FullPageSpinner";

type AppWrapperProps = {
  children: React.ReactNode;
};

const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  const { isLoading } = useAuth();
  return isLoading ? <FullPageSpinner /> : <>{children}</>;
};

export default AppWrapper;
