document.getElementById('bookBtn').addEventListener('click', function() {
    const room = document.getElementById('roomSelect').value;
    const checkInDate = document.getElementById('checkInDate').value;
    const checkOutDate = document.getElementById('checkOutDate').value;
    const confirmationMessage = document.getElementById('confirmationMessage');
    const confirmationBox = document.getElementById('confirmation');

    if (!checkInDate || !checkOutDate) {
        alert('Please select both check-in and check-out dates.');
        return;
    }

    // Simple validation to ensure check-out is after check-in
    if (new Date(checkInDate) >= new Date(checkOutDate)) {
        alert('Check-out date must be after check-in date.');
        return;
    }

    confirmationMessage.textContent = `Booking confirmed! You have booked ${room} from ${checkInDate} to ${checkOutDate}.`;
    confirmationBox.style.display = 'block';
});
