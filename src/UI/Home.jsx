import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="p-10 text-center sm:p-16">
      <h1 className="mb-8 text-xl font-semibold text-stone-700 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to&nbsp;you.
        </span>
      </h1>
      {!username ? (
        <CreateUser />
      ) : (
        <Button to="menu" type="primary">
          Continuing ordering
        </Button>
      )}
    </div>
  );
}

export default Home;
