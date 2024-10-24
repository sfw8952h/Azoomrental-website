
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const pickupDate = document.getElementById('pickupDate');
const dropoffDate = document.getElementById('dropoffDate');

pickupDate.addEventListener('change', function() {
    if (dropoffDate.value && dropoffDate.value < this.value) {
        dropoffDate.value = '';
    }
    dropoffDate.min = this.value;
});

const reserveButton = document.getElementById('reserveButton');
const paymentModal = document.getElementById('paymentModal');
const closeModal = document.querySelector('.close');

reserveButton.addEventListener('click', function() {
    const form = document.getElementById('reservationForm');
    const inputs = form.querySelectorAll('input, select');
    const errorMessages = form.querySelectorAll('.error-message');
    let allFilled = true;

    inputs.forEach((input, index) => {
        if (!input.value) {
            input.style.borderColor = 'red'; // Highlight empty fields
            errorMessages[index].style.display = 'block'; // Show error message
            allFilled = false;
        } else {
            input.style.borderColor = ''; // Reset border color if filled
            errorMessages[index].style.display = 'none'; // Hide error message
        }
    });

    if (allFilled) {
        paymentModal.style.display = 'flex';
    }
});

closeModal.addEventListener('click', function() {
    paymentModal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == paymentModal) {
        paymentModal.style.display = 'none';
    }
});

const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    paymentModal.style.display = 'none';
    alert('Reservation confirmed! Thank you for your payment.');
});

// Add event listener for return button
const returnButton = document.getElementById('returnButton');
returnButton.addEventListener('click', function() {
    const form = document.getElementById('returnForm');
    const inputs = form.querySelectorAll('input, select');
    const errorMessages = form.querySelectorAll('.error-message');
    let allFilled = true;

    inputs.forEach((input, index) => {
        if (!input.value) {
            input.style.borderColor = 'red'; // Highlight empty fields
            errorMessages[index].style.display = 'block'; // Show error message
            allFilled = false;
        } else {
            input.style.borderColor = ''; // Reset border color if filled
            errorMessages[index].style.display = 'none'; // Hide error message
        }
    });

    if (allFilled) {
        document.getElementById('confirmationMessage').style.display = 'block'; // Show confirmation message
    }
});