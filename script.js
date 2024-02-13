// Function to generate a random quote and background color
function generateQuoteAndColor() {
    // Array of pastel colors
    const pastelColors = ['#FFCCCC', '#FFCC99', '#FFFF99', '#CCFFCC', '#99FFFF', '#CC99FF'];
    
    // Select a random pastel color
    const randomColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];

    // Set background color
    document.body.style.backgroundColor = randomColor;

    // Set text color to black
    document.body.style.color = '#000';

    // Fetch the file containing paths to other quote files
    fetch('quotes.txt')
        .then(response => response.text())
        .then(data => {
            // Split the file paths by lines
            const paths = data.split('\n');
            // Select a random file path
            const randomPath = paths[Math.floor(Math.random() * paths.length)];
            // Fetch quotes from the selected file
            fetch(randomPath.trim()) // Trim any leading/trailing whitespace from the path
                .then(response => response.text())
                .then(data => {
                    // Split the quotes by lines
                    const quotes = data.split('\n');
                    // Generate a random index
                    const randomIndex = Math.floor(Math.random() * quotes.length);
                    // Get the file name without extension
                    const fileName = randomPath.split('/').pop().split('.').slice(0, -1).join('.');
                    // Format the file name
                    const formattedFileName = fileName.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
                    // Display the random quote and file name
                    document.getElementById('quote').innerHTML = quotes[randomIndex] + "<br>From: <span style='text-align:left'>" + formattedFileName + "</span>";
                })
                .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
}

// Generate a quote and background color when the page loads
generateQuoteAndColor();
