const orderForm = document.getElementById('orderForm');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const emailId = document.getElementById('emailId');
const deliveryAddress = document.getElementById('deliveryAddress');
const phoneNumber = document.getElementById('phoneNumber');

let orderDetails = {};
orderForm.addEventListener('submit', e => {
	e.preventDefault();
	submitOrderForm();
	orderForm.reset();
});

function submitOrderForm() {
	orderDetails = {
		firstName: firstName.value,
		lastName: lastName.value,
		emailId: emailId.value,
		deliveryAddress: deliveryAddress.value,
		phoneNumber: phoneNumber.value
	};
	console.log(orderDetails);
}
