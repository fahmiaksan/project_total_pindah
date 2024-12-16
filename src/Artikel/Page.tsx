import { Link } from "react-router-dom";
import Layout from "../Layout";
import { dataArtikel } from "./utils";
export default function ArtikelPage() {

  return (
    <Layout
      titleHeader="Artikel"
      background="bg-white"
      padding="px-0 py-9"
      content={
        <div className="">
          {
            dataArtikel.map((item, index) => (
              <div key={index} className="grid grid-cols-4 relative place-items-center">
                <img src={item.thumbnail} alt={item.content} />
                <div className="col-span-3 bg-[#F2EE6F] rounded-tr-xl rounded-bl-xl p-4 ">
                  <Link to={`/artikel/${item.id}`} className="font-bold text-xl">{item.title}</Link>
                  <p>
                    {item.content}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      }
    />
  )
};
