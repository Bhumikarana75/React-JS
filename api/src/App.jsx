// import { useState } from "react";

// function App() {
//   const [response, setResponse] = useState(null);

//   const generateAns = async () => {
//     try {
//       console.log("Loading...");
      
//       const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBsfr3yd_lmUwjmQFW4w7nMQWsVlsSukic", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           contents: [
//             {
//               parts: [
//                 { text: "Explain how AI works" }
//               ]
//             }
//           ]
//         })
//       });

//       const data = await res.json();
//       console.log("Response from Gemini API:", data);
//       setResponse(data);
//     } catch (error) {
//       console.error("Error fetching from Gemini API:", error);
//     }
//   };

//   return (
//     <>
//       <h1>Chat AI</h1>
//       <button onClick={generateAns}>Generate</button>
//       {response && (
//         <pre style={{ whiteSpace: "pre-wrap", marginTop: "1rem" }}>
//           {JSON.stringify(response, null, 2)}
//         </pre>
//       )}
//     </>
//   );
// }

// export default App;


import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const GeminiChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { type: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    setInput("");

    try {
      const res = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBsfr3yd_lmUwjmQFW4w7nMQWsVlsSukic",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: input }] }],
          }),
        }
      );

      const data = await res.json();
      const reply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No response from Gemini.";
      const botMsg = { type: "bot", text: reply };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "Error fetching response. Check API key." },
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="container my-4">
      <div className="card shadow-lg" style={{ maxWidth: "700px", margin: "0 auto", height: "90vh" }}>
        <div className="card-header bg-primary text-white">
          <h4 className="m-0">Gemini AI Chat</h4>
        </div>
        <div
          className="card-body overflow-auto d-flex flex-column"
          style={{ height: "70vh" }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 mb-2 rounded ${
                msg.type === "user" ? "bg-success text-white ms-auto" : "bg-light me-auto"
              }`}
              style={{ maxWidth: "75%" }}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="card-footer bg-light d-flex">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Ask something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="btn btn-primary" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeminiChat;
