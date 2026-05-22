// creating an online order
class Order {
	constructor(userId) {
		this.order = {userId};
	}

	addItem(item) {
		this.order.item = item;
		return this;
	}

	addQuantity(quantity) {
		this.order.quantity = quantity;
		return this;
	}

	addAddress(address) {
		this.order.address = address;
		return this;
	}

	addBillingAddress(billingAddress) {
		this.order.billingAddress = billingAddress;
	}

	addShipping(shipping) {
		this.order.shipping = shipping;
		return this;
	}
	addPayment(payment) {
		this.order.payment = payment;
		return this;
	}

	build() {
		return this.order;
	}
}

const order = new Order('122')
	.addItem('Charging Cable')
	.addQuantity(2)
	.addAddress('100 First Street, Prague, Czechia')
	.addShipping('USPS')
	.addPayment('500')
	.build();

console.log(order);