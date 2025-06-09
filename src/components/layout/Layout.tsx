import { ReactNode } from "react";
import { Header } from "../header";

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}
