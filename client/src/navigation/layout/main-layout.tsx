import { Outlet } from "react-router-dom";
import Navbar from "./navbar/navbar";
import { Footer } from "./footer";
import BacktoTop from "../../components/backtoTop";

export default function Layout() {
  return (
    <>
      <div className="min-h-full">
        <Navbar />
        <BacktoTop />
        <main>
          <div className="mx-auto">
            <Outlet />
          </div>
        </main>

        <Footer/>
      </div>
    </>
  );
}
