import { PropsWithChildren } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      <h1>Pomodoro</h1>
      {children}
    </>
  );
};

export default Layout;
