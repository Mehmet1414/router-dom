import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/mainPage";
import ProductPage from "./pages/productPage";
import BookDetail from "./pages/bookDetail";
import Undefined from "./pages/Undefined";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/books" element={<ProductPage />} />
        <Route path="/books/:bookId" element={<BookDetail />} />
        <Route path="*" element={<Undefined />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
