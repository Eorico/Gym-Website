(function() {
    emailjs.init("rG19YtsYtDBhEneP9");
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_ywabahg', 'template_pyxfxb9', this)
        .then(function() {
            showCustomAlert('MESSAGE SENT!');

            const formData = new FormData(document.getElementById('contact-form'));
            const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;

            fetch('/submit-contact-form/', {  
                method: 'POST',
                headers: {
                    'X-CSRFToken': csrfToken,
                },
                body: formData,
            })
            .then(response => {
                if (response.ok) {
                    console.log('Contact form data submitted to backend');
                } else {
                    console.error('Error submitting form to backend');
                }
            })
            .catch(error => {
                console.error('Error occurred while submitting form to backend:', error);
            });

            document.getElementById('contact-form').reset();
        }, function(error) {
            console.error('ERROR...', error);
            showCustomAlert('An error occurred while sending your message. Please try again.');
            document.getElementById('contact-form').reset();
        });
    });
};

function handlePaymentFormSubmit(event) {
    event.preventDefault();  

    const name = document.getElementById('namepay').value.trim();
    const gcashNumber = document.getElementById('gcashNumber').value.trim();
    const amount = document.getElementById('amountpay').value.trim();

    const namePattern = /^[a-zA-Z\s]+$/;  
    const gcashPattern = /^\d{11}$/; 

    if (name === "") {
        showCustomAlert("Please enter a valid name.");
        return;
    } else if (!namePattern.test(name)) {
        showCustomAlert("Name should only contain letters and spaces, no numbers allowed.");
        return;
    } else if (amount === "") {
        showCustomAlert("Please enter an amount.");
        return;
    } else if (gcashNumber === "") {
        showCustomAlert("Please enter a valid 11-digit GCash number.");
        return;
    } else if (!gcashPattern.test(gcashNumber)) {
        showCustomAlert("GCash number should contain exactly 11 digits and no letters or special characters.");
        return;
    }

    const data = {
        name: name,
        gcash_number: gcashNumber,
        amountpay: amount
    };

    fetch('/payment/', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value  
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            showCustomAlert(`Thank you, ${name}! Your payment of ${amount} PHP has been processed successfully.`);
            document.getElementById("paymentForm").reset();
        } else {
            showCustomAlert("There was an error processing your payment. Please try again.");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showCustomAlert('An error occurred. Please try again.');
    });
}

// Function to show custom alert
function showCustomAlert(message) {
    const alertMessage = document.getElementById('alert-message');
    const alertBox = document.getElementById('custom-alert');
    
    alertMessage.innerText = message;
    alertBox.style.display = 'flex'; // Show the alert modal
    
    // Close the alert when the user clicks 'OK'
    document.getElementById('alert-close').addEventListener('click', function() {
        alertBox.style.display = 'none'; // Hide the alert modal
    });
}
