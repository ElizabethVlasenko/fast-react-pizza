import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between gap-2 border-b border-stone-200 bg-yellow-400 p-4 uppercase sm:p-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizza&nbsp;Co.
      </Link>

      <SearchOrder />
      <div>
        <Username />
      </div>
    </header>
  );
}

export default Header;
