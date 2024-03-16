import { Link, useParams } from "react-router-dom";

function Page2() {
  const { count } = useParams();
  const color = count % 2 === 0 ? "blue" : "green";

  return (
    <div style={{ backgroundColor: color, padding: "20px" }}>
      <h1>Page 2</h1>
      <p>Selected Number: {count}</p>
      <p>Color: {color}</p>
      <Link to="/">Go to Page 1</Link>
    </div>
  );
}

export default Page2;
