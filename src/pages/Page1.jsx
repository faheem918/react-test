import { useState } from "react";
import { Link } from "react-router-dom";

function Page1() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div
      style={{
        backgroundColor: count % 2 === 0 ? "blue" : "green",
        padding: "20px",
      }}
    >
      <h1>Page 1</h1>
      <button onClick={handleClick}>Increment Count</button>
      <p>Current Number: {count}</p>
      <Link to={`/page2/${count}`}>Go to Page 2</Link>
    </div>
  );
}
export default Page1;
