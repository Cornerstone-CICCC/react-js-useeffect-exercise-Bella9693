import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (message) {
      console.log(message);
    }
  }, [message]);

  const [likes, setLikes] = useState(0);

  useEffect(() => {
    if (likes > 0) {
      alert(`Likes updated to ${likes}!`);
    }
  }, [likes]);

  const [color, setColor] = useState("red");

  useEffect(() => {
    console.log("Current color:", color);
  }, [color]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Message Logger</h2>
      <button onClick={() => setMessage("Hello from React!")}>
        Send Message
      </button>

      <h2>Like Counter</h2>
      <button onClick={() => setLikes(likes + 1)}>Like</button>

      <h2>Color Box</h2>
      <button onClick={() => setColor(color === "red" ? "blue" : "red")}>
        Change Color
      </button>
      <div
        style={{
          width: 100,
          height: 100,
          backgroundColor: color,
          marginTop: 10,
        }}
      >
        Color Box
      </div>
    </div>
  );
}

export default App;
