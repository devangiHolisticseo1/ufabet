import Image from "next/image";
import styles from "./page.module.css";
import HomeNavbar from "./components/HomeNavbar/HomeNavbar";

export default function Home() {
  return (
     <div>
        <HomeNavbar />
        <main>
          <h1>home page </h1>
        </main>
     </div>
  );
}
