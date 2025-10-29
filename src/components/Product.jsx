import "./Product.css";

export function Product({ name, desc, price }) {
  return (
    <div className="product">
      <h2>{name}</h2>
      <p>{desc}</p>
      <p>{price} EUR</p>
    </div>
  );
}
