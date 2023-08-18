import Search from "./Search";
import { SiReactrouter } from "react-icons/si";

function Header() {
  return (
    <header className="w-full p-4 grid grid-cols-3 bg-sky-400 mb-20">
      <h1 className="flex items-center">
        <SiReactrouter className="rotate-90" />
        <span className="text-3xl">Pokeredux</span>
      </h1>
      <div className="d"></div>
      <Search />
    </header>
  );
}

export default Header;
