const $ = (...args) => document.querySelector(...args);

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

if (params.tags) {
	$('#tags').innerHTML = params.tags;
}

if (params.img) {
	$('.side-image').setAttribute('src', params.img);
}

if (params.text !== undefined) {
	$('.quote p').innerHTML = params.text;
}

if (params.caption) {
	$('.cite').innerHTML = params.caption;
}

if (params.animate) {
	$('.quote').classList.add('animate__jackInTheBox')
	setTimeout(() => $('.cite').classList.add('animate__bounce'), 500)
}

