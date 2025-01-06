function displayQuotes(quotes) {
    const quotesContainer = document.getElementById('quotesContainer');
    quotesContainer.innerHTML = '';

    // Display at least 10 cards on load
    const quotesToDisplay = quotes.slice(0, 10);

    quotesToDisplay.forEach(quote => {
        const cardHtml = `
            <div class="col-md-12 card-container">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${quote.author}</h5>
                        <p class="card-text">"${quote.quote}"</p>
                        <div class="buttons-container">
                            <!-- Share buttons -->
                            <div class="share-btns">
                                <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(quote.quote)}" target="_blank">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(quote.quote)}&url=${encodeURIComponent(window.location.href)}" target="_blank">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(quote.quote)}" target="_blank">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://wa.me/?text=${encodeURIComponent(quote.quote)}" target="_blank">
                                    <i class="fab fa-whatsapp"></i>
                                </a>
                                <a href="https://www.instagram.com/?url=${encodeURIComponent(window.location.href)}" target="_blank">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                            <!-- Copy button aligned to the right -->
                            <button class="copy-btn" onclick="copyToClipboard('${quote.quote}')">
                                <i class="fas fa-copy"></i> Copy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        quotesContainer.innerHTML += cardHtml;
    });
}

// Function to copy quote to clipboard
function copyToClipboard(quoteText) {
    const textarea = document.createElement('textarea');
    textarea.value = quoteText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert("Quote copied to clipboard!");
}

// Search functionality
function searchQuotes() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredQuotes = quotesData.filter(quote => {
        return quote.quote.toLowerCase().includes(searchInput) || quote.tags.some(tag => tag.toLowerCase().includes(searchInput));
    });

    displayQuotes(filteredQuotes);
}

// Initial display of quotes on page load
displayQuotes(quotesData);