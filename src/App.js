import "./styles.css";
function CardComponent() {
  const card = [
    {
      heading: "HRX by Hrithik Roshan",
      tag: "Printed T-shirt",
      price: `RS. 384`,
      priceCut: `Rs. 699`,
      off: `45% OFF`,
      button: <button>WISHLIST</button>,
      btnIcon: "",
      Sizes: [`S`, `M`, `L`, `XL`, `XXL`],
      rating: {
        number: 4.3,
        icon: "",
        total: `29.k`
      }
    }
  ];
  let [
    {
      heading,
      tag,
      price,
      priceCut,
      off,
      button,
      btnIcon,
      Sizes: [s, m, l, xl, xxl],
      rating: { number, icon, total }
    }
  ] = card;
  return (
    <>
      <div className="card-box">
        <img
          className="imag"
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg"
        />
        <div className="name-price-box">
          <div className="card-heading">{heading}</div>
          <div className="card-tag">{tag}</div>
          <span className="card-price">{price}</span>
          <span>{}</span>
          <span className="card-off">({off})</span>
        </div>
      </div>
    </>
  );
}
export default function App() {
  return (
    <div className="App">
      <CardComponent />
    </div>
  );
}
