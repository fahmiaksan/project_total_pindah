/* eslint-disable @typescript-eslint/no-explicit-any */
import { Key, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import Layout from "../Layout";
import axios from "axios";
import { FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";

export default function TestimoniPage() {

  const [data, setData]: any = useState({
    nameReviews: [],
    ratings: [],
    reviews: [],
  });


  const [rating, setRating] = useState(0); // State untuk menyimpan jumlah bintang
  const [hover, setHover] = useState(0);   // State untuk efek hover
  const [feedback, setFeedback] = useState("");

  const [loading, setLoading] = useState<boolean>(true);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [error, setError] = useState<string>("");


  const handleSubmit = (e: any) => {
    e.preventDefault();

    const lastSubmitTime = localStorage.getItem("lastSubmitTime");
    const lastSubmit = parseInt(localStorage.getItem("lastSubmitTime") as string, 10);

    const currentTime = new Date().getTime();

    if (lastSubmitTime && currentTime - lastSubmit < 86400000) { // 24 jam dalam milidetik
      alert("Anda hanya dapat mengirim feedback sekali dalam 1 hari.");
      return;
    }

    setDisabled(true);

    const templateParams = {
      rating: rating,
      feedback: feedback,
    };

    emailjs
      .send(
        "service_d68fix7", // ID Service dari EmailJS
        "template_w7kck48", // ID Template EmailJS
        templateParams,
        "qeg1I-wwbnPdtDkAk" // ID User EmailJS
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Feedback berhasil dikirim!");
          // Simpan waktu submit ke localStorage
          localStorage.setItem("lastSubmitTime", String(new Date().getTime()));
          setFeedback("");
          setRating(0);
          setDisabled(false);
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Gagal mengirim feedback.");
          setFeedback("");
          setDisabled(false);
        }
      );
  };

  useEffect(() => {
    // Fungsi untuk fetch data dari API
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const response = await axios.get("./reviews.json");
        setData(response.data); // Set data ke state
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Gagal mengambil data. Silakan coba lagi.");
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return <p className="text-center mt-4">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-4">{error}</p>;
  }
  return (
    <Layout
      titleHeader="TESTIMONI"
      background="bg-white"
      spacing="space-y-0"
      contentHeader={
        <div className="grid h-max md:grid-cols-3 grid-cols-2">
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {data.nameReviews.map((_nameItem: any, index: Key | null | undefined) => (
            <div
              key={index}
              className="flex flex-col pt-10 space-y-4 items-center p-4 mb-4 bg-white"
            >
              <p className="text-yellow-500 ">
                {
                  data.ratings[Number(index)]?.rating === "5" ? "⭐⭐⭐⭐⭐" : data.ratings[Number(index)]?.rating === "4" ? "⭐⭐⭐⭐" : data.ratings[Number(index)]?.rating === "3" ? "⭐⭐⭐" : data.ratings[Number(index)]?.rating === "2" ? "⭐⭐" : data.ratings[Number(index)]?.rating === "1" && "⭐"

                }
              </p>
              <p className="mt-2 text-gray-700 leading-relaxed text-center">
                "{data.reviews[Number(index)]?.review}"
              </p>
            </div>
          ))}
          {
            data.nameReviews.map((nameItem: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
              <h2 className="text-xl text-center font-semibold">{nameItem.name}</h2>
            ))
          }
        </div>
      }
      content={
        <div>
          <p className="py-4 text-xl font-bold mt-28" >Tuliskan Pendapat Anda Tentang TotalpIndah!</p>
          <p>Terima kasih telah mendukung kami. Kami ingin mendengar tentang pengalaman Anda!
            Umpan balik Anda membantu kami meningkatkan layanan kami. <br />
            • Bagaimana pengalaman Anda menggunakan jasa angkut kami? <br />
            • Apakah jasa kami sesuai dengan selera Anda?<br />
            • Ada saran untuk kami?<br /><br />

            Tolong luangkan waktu sebentar untuk membagikan pendapat Anda. Hanya butuh beberapa menit, dan itu sangat berarti bagi kami!</p>
          <div className="mx-auto">
            {/* Star Rating */}
            <div className="flex pt-10 justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onMouseEnter={() => setHover(star)} // Hover efek
                  onMouseLeave={() => setHover(0)}   // Reset hover
                  onClick={() => setRating(star)}    // Set nilai rating
                  className={`text-4xl cursor-pointer ${(hover || rating) >= star ? "text-yellow-400" : "text-gray-400"
                    }`}
                >
                  ★
                </span>
              ))}
            </div>

            {/* Input Feedback */}
            <div className="relative">

              <textarea
                placeholder="Tulis pendapat Anda..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                name="feedback"
                className="w-full p-3 -z-50 border rounded-md"

              ></textarea>

              {/* Icon Send */}
              <button
                onClick={handleSubmit}
                className="absolute bottom-3 z-50 right-3 text-black"
                disabled={disabled}
              >
                <FiSend size={24} />
              </button>
            </div>

          </div>
        </div>

      }
    />
  )
};
