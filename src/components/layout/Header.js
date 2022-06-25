import React from "react";

const Header = () => {
  return (
    <header>
      <div className="md:container mx-auto px-4 py-4">
        <h1 className="logo text-center h1 text-white">
          <span className="bg-red-600">React </span>
          <span className="bg-blue-600">Context</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
