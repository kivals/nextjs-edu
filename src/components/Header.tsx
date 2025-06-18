import Nav from "@/components/Nav";

const Header = () => {
  return (
    <header className="relative mb-14 flex h-[60px] items-center justify-end border-b border-gray-300">
      <h1 className="absolute left-[50%] translate-x-[-50%] uppercase">
        tennis store
      </h1>
      <Nav />
    </header>
  );
};

export default Header;
