function placeOrder() {
  alert("Order placed successfully! Your fashion will arrive in 30 minutes 🚀");
  window.location.href = "thankyou.html"; // Optional: create thank you page
}
function startPayment() {
  const options = {
    key: "YOUR_KEY_ID", // Replace with your Razorpay Key ID
    amount: 149900, // ₹1499 in paise
    currency: "INR",
    name: "Insta Fashion",
    description: "Tailored Pants",
    image: "assets/icons/logo.svg",
    handler: function (response) {
      alert("Payment successful! ID: " + response.razorpay_payment_id);
      window.location.href = "thankyou.html";
    },
    prefill: {
      name: "Vikas",
      email: "vikas@example.com",
      contact: "9876543210"
    },
    theme: {
      color: "#ff4e50"
    }
  };

  const rzp = new Razorpay(options);
  rzp.open();
}
console.log("Payment function triggered");