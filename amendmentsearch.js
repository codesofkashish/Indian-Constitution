let amendments = [];

// Fetch the amendments JSON file
fetch("amendments.json")
    .then(response => response.json())
    .then(data => {
        amendments = data;
        console.log("JSON Loaded Successfully:", amendments);
    })
    .catch(error => console.error("Error loading amendments.json:", error));

function searchAmendments() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const resultBox = document.getElementById("resultBox");

    if (!input) {
        resultBox.style.display = "none";
        return;
    }

    // Search in number, year, and description
    const result = amendments.find(a =>
        a.number.toLowerCase().includes(input) ||
        a.year.toString().includes(input) ||
        a.description.toLowerCase().includes(input)
    );

    if (!result) {
        resultBox.style.display = "block";
        resultBox.innerHTML = `<p>No amendment found. Try again.</p>`;
        return;
    }

    resultBox.style.display = "block";
    resultBox.innerHTML = `
        <h2>${result.number} (${result.year})</h2>
        <p>${result.description}</p>
    `;
}
