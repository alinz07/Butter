async function delEventClickHandler(event) {
	event.preventDefault();

	let eventId = event.target.id;
	console.log("running", eventId);

	const response = await fetch("/api/events", {
		method: "DELETE",
		body: JSON.stringify({
			event_id: eventId,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});
	if (response.ok) {
		document.location.reload();
	} else {
		alert(response.statusText);
	}
}

document.querySelectorAll(".cancel-event-btn").forEach((item) => {
	item.addEventListener("click", delEventClickHandler);
});
