// Select the cart and button elements
const cart = document.querySelector('#cart');
const cartToggle = document.querySelector('#cart-toggle');

// Add a click event listener to the button
cartToggle.addEventListener('click', function() {
  // Toggle the cart's visibility
  if (cart.style.display === 'none') {
    cart.style.display = 'block';
    cart.classList.add('fade-in');
  } else {
    cart.classList.remove('fade-in');
    setTimeout(function() {
      cart.style.display = 'none';
    }, 300); // Change this number to adjust the animation duration in milliseconds
  }
});

document.addEventListener('click', function(event) {
  if (event.target.tagName === 'A') {
    event.preventDefault();
    const href = event.target.getAttribute('href');
    if (href !== null) {
      document.body.style.opacity = 0;
      setTimeout(function() {
        window.location.href = href;
      }, 500);
    }
  }
});
