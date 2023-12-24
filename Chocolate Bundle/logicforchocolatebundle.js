let selectedChocolates = [];
    const chocolatePrices = {
        1: 10,  // Price for Chocolate 1
        2: 20,
        3: 40,
        4: 100,
        5: 25,
        6: 10   
    };

    function addItem(chocolateId) {
        if (selectedChocolates.length < 8) {
            selectedChocolates.push(chocolateId);
            updateTotalPrice();
        } else {
            alert("You can't add more than 8 chocolates to your custom pack.");
        }
    }

    function updateTotalPrice() {
        const totalPriceElement = document.getElementById('total-price');
        const totalPrice = selectedChocolates.reduce((total, chocolateId) => {
            return total + chocolatePrices[chocolateId];
        }, 0);

        totalPriceElement.textContent = `Total Price: Rs ${totalPrice.toFixed(2)}`;
    }