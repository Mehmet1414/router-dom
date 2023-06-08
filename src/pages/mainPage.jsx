import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className="main-container">
      <h1>Sayfamiza Hosgeldiniz</h1>
      <p>
        Kitap listesine <Link to={"/books"}><u>buradan</u></Link> ulasabilirsiniz...
      </p>
    </div>
  );
}

export default MainPage;
