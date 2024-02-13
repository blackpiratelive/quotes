// Function to generate a random quote and background color
function generateQuoteAndColor() {
    // Array of pastel colors
    const pastelColors = ['#FFCCCC', '#FFCC99', '#FFFF99', '#CCFFCC', '#99FFFF', '#CC99FF'];
    
    // Select a random pastel color
    const randomColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];

    // Set background color
    document.body.style.backgroundColor = randomColor;

    // Fetch quotes from the text file
    fetch('quotes.txt') // Change 'quotes.txt' to the path of your quotes file
        .then(response => response.text())
        .then(data => {
            // Split the quotes by lines
            const quotes = data.split('\n');
            // Generate a random index
            const randomIndex = Math.floor(Math.random() * quotes.length);
            // Display the random quote
            document.getElementById('quote').textContent = quotes[randomIndex];
        })
        .catch(error => console.log(error));
}

// Generate a quote and background color when the page loads
generateQuoteAndColor();

