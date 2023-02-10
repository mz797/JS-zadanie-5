const paragraphs = document.getElementsByClassName("parag");
const colors = ["red", "blue", "green", "orange", "brown", "black"];
const body = document.body;
const input = body.querySelector("input");
const btn = body.querySelector("button");
const hr = body.querySelector("hr");

console.log(body);

const makeHeading = (i) => { 
	// 4
	const heading = document.createElement("h3");
	heading.textContent = `Paragraf nr ${i + 1}`;
	body.insertBefore(heading, paragraphs[i]);
	//5
	heading.addEventListener("click", () => {
		paragraphs[i].style.visibility === "hidden"
			? (paragraphs[i].style.visibility = "visible")
			: (paragraphs[i].style.visibility = "hidden");
	});
};
makeHeading(0);
const main = () => {
	for (let i = 0; i < paragraphs.length; i++) {
		//1
		const rand = Math.floor(Math.random() * colors.length);
		paragraphs[i].style.color = colors[rand];
		//2
		paragraphs[i].setAttribute(
			"title",
			`Jest to ${i + 1} paragraf z ${paragraphs.length} i ma ${
				paragraphs[i].textContent.length
			} znaków`
		);
		//3
		paragraphs[i].addEventListener("click", () => {
			resetColors();
			paragraphs[i].style.border = "2px solid green";
			i % 2 === 0
				? (paragraphs[i].style.backgroundColor = "#999")
				: (paragraphs[i].style.backgroundColor = "#444");
			if (i >= 1) {
				paragraphs[i - 1].style.border = "2px solid orange";
			}
			if (i + 1 < paragraphs.length)
				paragraphs[i + 1].style.border = "2px solid darkgrey";
		});
		//4
		if (
			paragraphs[i].previousElementSibling &&
			paragraphs[i].previousElementSibling.tagName !== "H3"
		) {
			makeHeading(i);
		}
	}
};
main();

//6
btn.addEventListener("click", () => {
	if (input.value !== null) {
		const parag = document.createElement("p");
		parag.className = "parag";
		parag.textContent = input.value;
		body.insertBefore(parag, hr);
		main();
		console.log(paragraphs);
	}
});

const resetColors = () => {
	for (let i = 0; i < paragraphs.length; i++) {
		paragraphs[i].style.border = "none";
		paragraphs[i].style.background = "none";
	}
};
