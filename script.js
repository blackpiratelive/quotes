// Function to generate a random quote and background color
function generateQuoteAndColor() {
    // Array of pastel colors
    const pastelColors = ['#FFCCCC', '#FFCC99', '#FFFF99', '#CCFFCC', '#99FFFF', '#CC99FF'];
    
    // Select a random pastel color
    const randomColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];

    // Set background color
    document.body.style.backgroundColor = randomColor;

    // Adjust text color based on brightness of the background color
    const brightness = calculateBrightness(randomColor);
    const textColor = brightness < 128 ? '#333' : '#fff';
    document.body.style.color = textColor;

    // Fetch quotes from the text file
    fetch('quotes.txt')
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

// Function to calculate brightness of a color
function calculateBrightness(color) {
    const rgb = hexToRgb(color);
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
}

// Function to convert hex color to RGB
function hexToRgb(hex) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// Generate a quote and background color when the page loads
generateQuoteAndColor();
