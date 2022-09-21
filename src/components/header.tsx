import { css } from "@emotion/react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter()
  return (
    <div>
      <p>Watakablog</p>
      <div>
        <button onClick={() => router.push("/")}>Category</button>
        <button onClick={() => router.push("/")}>All_Articles</button>
        <button onClick={() => router.push("/")}>About</button>
      </div>
    </div>
  );
};


export default Header;