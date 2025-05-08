/* eslint-disable @typescript-eslint/no-explicit-any */
import { useReducer, useEffect } from "react";
import Layout from "../../Layout";
import axios from "axios";
import { FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import CarouselTestimoni from "../Atoms/CaraouselTestimoni";
import { formReducer, initialState } from "../../reducers/formReducer";
import { toast } from "react-toastify";
import { LoadingSpinner } from "../Atoms/LoadingSpinner";

export default function TestimoniPageComponent() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const lastSubmitTime = localStorage.getItem("lastSubmitTime");
    const lastSubmit = parseInt(lastSubmitTime || "0", 10);
    const currentTime = new Date().getTime();

    if (lastSubmitTime && currentTime - lastSubmit < 86400000) {
      toast.error("Anda hanya dapat mengirim feedback sekali dalam 1 hari.");
      return;
    }

    dispatch({ type: 'SET_DISABLED', payload: true });

    try {
      const templateParams = {
        rating: state.rating,
        feedback: state.feedback,
      };

      const response = await emailjs.send(
        "service_d68fix7",
        "template_w7kck48",
        templateParams,
        "qeg1I-wwbnPdtDkAk"
      );

      console.log("SUCCESS!", response.status, response.text);
      toast.success("Feedback berhasil dikirim!");
      localStorage.setItem("lastSubmitTime", String(new Date().getTime()));

      dispatch({ type: 'RESET_FORM' });
    } catch (error: any) {
      console.error("FAILED...", error);
      const errorMessage = error?.text || error?.message || "Gagal mengirim feedback.";
      toast.error(errorMessage);
      dispatch({ type: 'SET_ERROR', payload: errorMessage });
    } finally {
      dispatch({ type: 'SET_DISABLED', payload: false });
    }
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        dispatch({ type: 'SET_LOADING', payload: true });
        const response = await axios.get("./reviews.json");

        // Transform the data structure
        const transformedData = {
          author: response.data.author.map((a: { name: string }) => a.name),
          ratings: response.data.ratings.map((r: { rating: string }) => Number(r.rating)),
          reviews: response.data.reviews.map((r: { review: string }) => r.review)
        };

        dispatch({ type: 'SET_DATA', payload: transformedData });
      } catch (err) {
        console.error("Error fetching data:", err);
        dispatch({ type: 'SET_ERROR', payload: 'Gagal mengambil data. Silakan coba lagi.' });
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };

    fetchReviews();
  }, []);

  if (state.loading) {
    return <LoadingSpinner />;
  }

  if (state.error) {
    return (
      <div className="text-center text-red-500 mt-4">
        {state.error}
        <button
          onClick={() => window.location.reload()}
          className="ml-4 text-blue-500 underline"
        >
          Coba lagi
        </button>
      </div>
    );
  }

  return (
    <Layout
      titleHeader="TESTIMONI"
      background="bg-white"
      spacing="space-y-8"
      contentHeader={<CarouselTestimoni data={state.data} />}
      content={
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 text-center">
              Tuliskan Pendapat Anda Tentang TotalPindah!
            </h2>

            <div className="text-gray-600 space-y-4">
              <p className="text-center">
                Terima kasih telah mendukung kami. Kami ingin mendengar tentang
                pengalaman Anda! Umpan balik Anda membantu kami meningkatkan layanan
                kami.
              </p>

              <div className="space-y-2">
                <p>• Bagaimana pengalaman Anda menggunakan jasa angkut kami?</p>
                <p>• Apakah jasa kami sesuai dengan selera Anda?</p>
                <p>• Ada saran untuk kami?</p>
              </div>

              <p className="text-center italic">
                Tolong luangkan waktu sebentar untuk membagikan pendapat Anda. Hanya
                butuh beberapa menit, dan itu sangat berarti bagi kami!
              </p>
            </div>

            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onMouseEnter={() => dispatch({ type: 'SET_HOVER', payload: star })}
                  onMouseLeave={() => dispatch({ type: 'SET_HOVER', payload: 0 })}
                  onClick={() => dispatch({ type: 'SET_RATING', payload: star })}
                  className={`text-4xl cursor-pointer transition-colors duration-200 ${(state.hover || state.rating) >= star
                    ? "text-yellow-400"
                    : "text-gray-300"
                    }`}
                >
                  ★
                </span>
              ))}
            </div>

            <div className="relative">
              <textarea
                placeholder="Tulis pendapat Anda..."
                value={state.feedback}
                onChange={(e) => dispatch({ type: 'SET_FEEDBACK', payload: e.target.value })}
                name="feedback"
                className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 min-h-[150px] resize-none"
              ></textarea>

              <button
                onClick={handleSubmit}
                className="absolute bottom-4 right-4 text-gray-600 hover:text-blue-500 disabled:opacity-50 disabled:hover:text-gray-600 transition-colors duration-200"
                disabled={state.disabled}
              >
                <FiSend size={24} />
              </button>
            </div>
          </div>
        </div>
      }
    />
  );
}
