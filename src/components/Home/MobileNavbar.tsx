import { useState } from "react";

const MobileNavbar = ({ navbar, submenu }: { navbar: string[]; submenu: string[] }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  return (
    <div className="bg-white md:hidden shadow-md z-50">
      <div className="flex flex-col space-y-4 py-4 px-6">
        {navbar.map((item, index) => (
          <div key={index} className="relative">
            {/* Menu Utama */}
            {index !== 2 ? (
              <a
                href={`/${item.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-500"
              >
                {item}
              </a>
            ) : (
              // Dropdown Layanan
              <div>
                <div
                  onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                  className="flex justify-between items-center text-gray-700 hover:text-blue-500 cursor-pointer"
                >
                  {item}
                  <span>{isSubmenuOpen ? "▲" : "▼"}</span>
                </div>

                {/* Submenu */}
                {isSubmenuOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {submenu.map((sub, i) => (
                      <a
                        key={i}
                        href={`/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block text-gray-600 hover:text-blue-500 text-sm"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileNavbar;
