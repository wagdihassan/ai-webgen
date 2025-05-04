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
