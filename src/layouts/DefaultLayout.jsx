import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";

export default function AppLayout() {
  return (
    <>
      <MainHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
}
