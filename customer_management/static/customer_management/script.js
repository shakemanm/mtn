// Example JavaScript code to enhance user experience

// Add any JavaScript code you need to enhance your app's functionality.
// For example, you can add interactivity, validation, or other features.

// Sample code to confirm customer deletion
function toggleButtons(element) {
    const customerActions = element.nextElementSibling;
    const editButton = customerActions.querySelector('.edit-button');
    const deleteButton = customerActions.querySelector('.delete-button');

    if (editButton.classList.contains('hidden')) {
        editButton.classList.remove('hidden');
        deleteButton.classList.remove('hidden');
    } else {
        editButton.classList.add('hidden');
        deleteButton.classList.add('hidden');
    }
}

// Add event listeners for customer name spans
document.addEventListener('DOMContentLoaded', function () {
    const customerNameSpans = document.querySelectorAll('.customer-name');
    customerNameSpans.forEach(function (span) {
        span.addEventListener('click', function () {
            toggleButtons(this);
        });
    });
});





