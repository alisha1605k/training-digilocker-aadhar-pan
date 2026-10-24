// ========================================
// HOMEPAGE SEARCH FUNCTION
// ========================================

const searchInput = document.getElementById("searchInput");
const serviceCards = document.querySelectorAll(".home-service-card");

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase().trim();

    serviceCards.forEach(function (card) {

        const cardText = card.textContent.toLowerCase();

        if (cardText.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});