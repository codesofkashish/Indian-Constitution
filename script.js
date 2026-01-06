let articlesData = [];

// Fetch the JSON file
fetch("allfiles.json")
    .then(response => response.json())
    .then(data => {
        articlesData = data;
    })
    .catch(error => console.error("Error loading JSON:", error));

function searchArticle() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const resultBox = document.getElementById("resultBox");

    // Find matching article (search by number OR name)
    const result = articlesData.find(article =>
        article.number.toLowerCase().includes(input) ||
        article.name.toLowerCase().includes(input)
    );

    if (!result) {
        resultBox.style.display = "block";
        resultBox.innerHTML = `<p>No article found. Try again.</p>`;
        return;
    }

    // Show result
    resultBox.style.display = "block";
    resultBox.innerHTML = `
        <h2>${result.number} – ${result.name}</h2>
        <p><strong>Description:</strong> ${result.description}</p>
    `;
}
