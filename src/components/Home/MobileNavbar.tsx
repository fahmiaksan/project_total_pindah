const MobileNavbar = ({ navbar }: { navbar: string[] }) => {
  return (
    <div className="bg-white md:hidden shadow-md">
      <div className="flex flex-col space-y-4 py-4 px-6">
        {navbar.map((item: string, index: number) => (
          <a
            key={index}
            href={`/#${item.toLowerCase()}`}
            className="text-gray-700 hover:text-blue-500"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileNavbar;