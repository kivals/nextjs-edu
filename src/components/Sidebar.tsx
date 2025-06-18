import React from "react";

const Sidebar = ({ selectedBrand = "All" }: { selectedBrand?: string }) => {
  const brands = ["All", "Head", "Yonex"];

  return (
    <aside className="w-48 pr-6">
      <h2 className="mb-2 text-sm font-semibold text-gray-400">Бренд</h2>
      <ul className="space-y-1 text-sm">
        {brands.map((brand) => (
          <li
            key={brand}
            className={`cursor-pointer hover:text-black ${
              selectedBrand === brand
                ? "ml-4 list-disc font-medium text-black"
                : "text-gray-600"
            }`}
          >
            {brand}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
