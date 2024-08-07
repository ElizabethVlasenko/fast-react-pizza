import LinkButton from "../../UI/LinkButton";

function EmptyCart() {
  return (
    <div className="p-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-7 text-xl font-semibold">
        Your cart is still empty. Start adding some pizzas🍕
      </p>
    </div>
  );
}

export default EmptyCart;
