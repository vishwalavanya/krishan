import express from "express";
import fetch from "node-fetch";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.post("/krishna-chat", async (req, res) => {
  try {
    const n8nResponse = await fetch("https://vishwanavyasree27.app.n8n.cloud/webhook/krishna-chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body)
    });

    const data = await n8nResponse.json();
    res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Proxy failed" });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Proxy server running...");
});
