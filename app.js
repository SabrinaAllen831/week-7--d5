"use strict";

const btn = document.getElementById("btn");
const output = document.getElementById("output");

// Get key from proxy and fetch API
async function getQuote() {
  output.textContent = "Loading...";

  try {
    // Get API key from proxy
    const keyRes = await fetch("https://your-proxy-key-endpoint.com/get-key", { method: "POST" });
    const keyData = await keyRes.json();
    const apiKey = keyData.key;

    // Call API using key
    const apiRes = await fetch("https://favqs.com/api/qotd", {
      headers: { "Authorization": `Token ${apiKey}` }
    });
    const data = await apiRes.json();

    // Show quote
    output.textContent = `"${data.quote.body}" — ${data.quote.author}`;

  } catch (err) {
    output.textContent = "Error loading quote";
  }
}

btn.addEventListener("click", getQuote);