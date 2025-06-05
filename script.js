// AI Recommendation Data
const aiModels = {
    image: [
        { name: "Bing Create", prompt: "Generate an artistic digital painting of a futuristic city." },
        { name: "Freepik", prompt: "Create high-resolution vector illustrations for websites." }
    ],
    writing: [
        { name: "Jasper", prompt: "Write a compelling blog intro about AI trends." },
        { name: "Copy AI", prompt: "Generate catchy headlines for social media posts." }
    ],
    chatbot: [
        { name: "ChatGPT", prompt: "Simulate a natural conversation about technology." },
        { name: "Claude", prompt: "Answer customer service queries in a friendly tone." }
    ],
    code: [
        { name: "Codeium", prompt: "Generate a JavaScript function for sorting arrays." },
        { name: "Refraction", prompt: "Optimize Python code for better performance." }
    ],
    voice: [
        { name: "Suno AI", prompt: "Generate a realistic voice-over for a documentary." },
        { name: "Speechify", prompt: "Convert an article into natural speech." }
    ]
};

// Function to Recommend AI
function recommendAI() {
    const category = document.getElementById("category").value;
    const resultDiv = document.getElementById("ai-result");
    resultDiv.innerHTML = "";

    if (aiModels[category]) {
        aiModels[category].forEach(ai => {
            let aiBox = document.createElement("div");
            aiBox.className = "ai-box";
            aiBox.innerHTML = `<h3>${ai.name}</h3><p><strong>Best Prompt:</strong> ${ai.prompt}</p>`;
            resultDiv.appendChild(aiBox);
        });
    } else {
        resultDiv.innerHTML = "<p>No AI found for this category.</p>";
    }
}
