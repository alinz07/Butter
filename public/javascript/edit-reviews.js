async function addReviewClickHandler(e) {
	e.preventDefault();

	let reviewText = document
		.querySelector('input[name="review-text"]')
		.value.trim();
	// console.log("running", userId);

	const response = await fetch("/api/reviews", {
		method: "POST",
		body: JSON.stringify({
			review_text: reviewText,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});
	if (response.ok) {
		document.location.replace("/reviews");
	} else {
		alert(response.statusText);
	}
}

async function delReviewClickHandler(e) {
	e.preventDefault();

	let reviewId = document
		.querySelector('input[name="review-id"]')
		.value.trim();
	// console.log("running", userId);

	const response = await fetch("/api/reviews", {
		method: "DELETE",
		body: JSON.stringify({
			review_id: reviewId,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});
	if (response.ok) {
		document.location.replace("/reviews");
	} else {
		alert(response.statusText);
	}
}

document
	.querySelector(".new-post-form")
	.addEventListener("submit", addReviewClickHandler);
document
	.querySelector(".del-review-form")
	.addEventListener("submit", delReviewClickHandler);
