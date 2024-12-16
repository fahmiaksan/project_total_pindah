import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Props {
  data: {
    image: string;
    text: string;
  }[];
}
const ProfileIcons: React.FC<Props> = ({ data }) => {
  return (
    <div className="px-10 grid place-items-center md:grid-cols-4 grid-cols-2 py-5 gap-7">
      {
        data.map((item, index) => (
          <div className="flex flex-col">
            <div key={index} className="h-[300px]">
              <img src={item.image} alt="profile" width={200} />
              <p className="text-xl text-center mb-4 font-bold">{item.text}</p>
              {
                index === 2 ? <div className="text-center text-xl font-bold">(Khusus Luar Kota)</div> : ""
              }
            </div>
            <div className="px-2 mt-9 space-x-6 md:space-x-2 flex items-center rounded-xl justify-center py-3 text-center bg-[#22333B]">
              <FaPhoneAlt size={20} className="text-white" />
              <Link to={item.link} className="text-white text-xl">
                Hubungi
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  )
};

export default ProfileIcons;
