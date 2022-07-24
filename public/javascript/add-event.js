async function newEventFormHandler(event) {
	event.preventDefault();

	let client_name = document
		.querySelector('input[name="client_name"]')
		.value.trim();
	let client_phone = document
		.querySelector('input[name="client_phone"]')
		.value.trim();
	let client_email = document
		.querySelector('input[name="client_email"]')
		.value.trim();
	let date = document.querySelector('input[name="date"]').value.trim();
	let address = document.querySelector('input[name="address"]').value.trim();
	let time = document.querySelector('input[name="time"]').value.trim();
	let min_price = document.querySelector('input[name="price"]').value.trim();
	let guests = document.querySelector('input[name="guests"]').value.trim();

	const response = await fetch("/api/events", {
		method: "POST",
		body: JSON.stringify({
			client_name: client_name,
			client_email: client_email,
			client_phone: client_phone,
			date: date,
			address: address,
			time: time,
			min_price: min_price,
			guests: guests,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (response.ok) {
		document.location.replace("/my-events");
	} else {
		alert(response.statusText);
	}
}

// const radios = document.querySelectorAll(".service-choice");
// for (const radio of radios) {
// 	radio.onclick = (e) => {
// 		document.querySelector(".price-input").value = e.target.value;
// 	};
// }

document
	.querySelector(".new-post-form")
	.addEventListener("submit", newEventFormHandler);
