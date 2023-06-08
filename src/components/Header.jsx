import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <h1 onClick={() => navigate("/")}>Kitap Dünyasi</h1>
      <div>
        <Link to={"/"}>Anasayfa</Link>
        <Link to={"/books"}>Kitaplar</Link>
      </div>
    </header>
  );
}

export default Header;
