document.addEventListener("DOMContentLoaded", function() {
    const addToCartButton = document.getElementById("add-to-cart-button");
    const selectedPairElement = document.getElementById("selected-pair");
  
    addToCartButton.addEventListener("click", function() {
      const selectedRadio = document.querySelector('input[name="pair"]:checked');
  
      if (selectedRadio) {
        const selectedPairInfo = selectedRadio.nextElementSibling.querySelector(".pair-info").textContent;
        selectedPairElement.textContent = `Selected Pair: ${selectedPairInfo} added to cart`;
      } else {
        selectedPairElement.textContent = "No pair selected";
      }
    });
  });
  