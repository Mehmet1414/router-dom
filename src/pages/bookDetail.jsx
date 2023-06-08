import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../index.css";

const BookDetail = () => {
  const [bookData, setBookData] = useState();

  const params = useParams(); // App.js ininde verdigimiz :bookId yi kullanrak obje döndürdü...

  useEffect(() => {
    axios
      .get(`http://localhost:3030/books/${params.bookId}`)
      .then((res) => setBookData(res.data));
  }, []);

  if (!bookData) return "Yükleniyor...."; //veri kontrolü yapiyor-olmazsa hata verir
  return (
    <div className="detail-page">
      <div className="book-detail">
        <div className="book-detail-img">
          <img src={bookData.image} />
        </div>
        <div className="book-detail-info">
          <h4>{bookData.title}</h4>
          <p>Yazar: {bookData.author}</p>
          <p>Basim Yili: {bookData.year}</p>
          <p>
            Kisa Bilgi:
            <small> {bookData.description}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
