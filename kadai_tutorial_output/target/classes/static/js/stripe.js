const stripe = Stripe('pk_test_51Od9JMCBUgaahNHBbrZYbpYmIuQTNbE7a9CAdF5VQ2DP6s060psCmqmmvK7WlbTGVZFbRxOPUVMbgLSA69gnkFpg0064Bru3ye');;
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });