import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 p-4 uppercase sm:p-6 md:gap-64">
      <Link to="/" className="tracking-widest">
        Fast React Pizza&nbsp;Co.
      </Link>

      <div className="md:absolute md:left-2/4 md:translate-x-[-50%]">
        <SearchOrder />
      </div>

      <Username />
    </header>
  );
}

export default Header;
