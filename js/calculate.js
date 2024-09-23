// Get the elements
const totalDonationBtn = document.getElementById('totalDonation');
const donationInput = document.getElementById('donationInput');
const donateNowBtn = document.getElementById('donateNow');

// Initialize total donation amount
let totalDonationAmount = 0;

// Add event listener to the "Donate Now" button
donateNowBtn.addEventListener('click', function() {
    // Get the value from the input field and convert it to a number
    const donationAmount = parseFloat(donationInput.value);

    // Check if the input is a valid number
    if (!isNaN(donationAmount) && donationAmount > 0) {
        // Add the input value to the total donation amount
        totalDonationAmount += donationAmount;

        // Update the total donation button using innerText
        totalDonationBtn.innerText = totalDonationAmountotalDonation ${totalDonationAmount};

        // Clear the input field after donation
        donationInput.value = '';
    } else {
        alert('Please enter a valid donation amount.');
}
});
