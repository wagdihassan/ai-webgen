document.getElementById("generateBtn").addEventListener("click", async () => {
  const prompt = document.getElementById("promptInput").value;
  const output = document.getElementById("resultOutput");
  output.textContent = "Generating...";
  const apiKey = "YOUR_GEMINI_API_KEY"; // AIzaSyCNXvOZygz4_OQRM7iHcANS95VjHvmlre8

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    }
  );

  const data = await response.json();
  try {
    output.textContent = data.candidates[0].content.parts[0].text;
  } catch (e) {
    output.textContent = "No content generated or there was an error.";
  }
});
async function generateText(prompt) {
  const apiKey = "YOUR_API_KEY"; // استبدل YOUR_API_KEY بمفتاحك
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await response.json();
  const result = data.choices?.[0]?.message?.content || "لا يوجد رد.";
  document.getElementById("result").textContent = result;
}

document.getElementById("generateBtn").addEventListener("click", () => {
  const userInput = document.getElementById("userInput").value;
  generateText(userInput);
});
