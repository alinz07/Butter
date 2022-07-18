async function newEventFormHandler(event) {
	event.preventDefault();

	let user_id = document.querySelector('input[name="user_id"]').value.trim();
	let date = document.querySelector('input[name="date"]').value.trim();
	let address = document.querySelector('input[name="address"]').value.trim();
	let time = document.querySelector('input[name="time"]').value.trim();
	let min_price = document.querySelector('input[name="price"]').value.trim();
	let guests = document.querySelector('input[name="guests"]').value.trim();

	const response = await fetch("/api/events", {
		method: "POST",
		body: JSON.stringify({
			user_id: user_id,
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

document
	.querySelector(".new-post-form")
	.addEventListener("submit", newEventFormHandler);
