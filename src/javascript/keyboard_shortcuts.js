window.keyboard_shortcuts = {}

document.addEventListener('keyup', (e) => {
	let link = window.keyboard_shortcuts[e.key];
	if (link && e.shiftKey === false) {
		link.click();
	}
}, false);

$(document).on(':passagedisplay', function (ev) {
	window.keyboard_shortcuts = {};
	let keyword = (s) => {
		// thank you, https://stackoverflow.com/questions/861721/
		var words = ['go', 'visit', 'to', 'the', 'Wear','Set','Rename','Del','Have','a','Wait','15m','30m','1hr','Detailed','Remove','Insert'];
		var re = new RegExp('\\b(' + words.join('|') + ')\\b', 'gi');
		return (s || '').replace(re, '').replace(/[ ]{2,}/, ' ').trim();
	}
	let badchars = Array.from('+▼←→↓↑'); // TODO: rather filter everything except A-Z0-9
	let links = document.getElementById('story').querySelectorAll('a.link-internal');
	links.forEach(link => {
		let text = keyword(link.innerText).toUpperCase();
		text = text.replace(/[^\\x65-\\x90]/g, '');
		if (text) {
			let keychars = Array.from(text);
			let usedchars = Object.keys(window.keyboard_shortcuts);
			keychars.find(kc => {
				if (!usedchars.contains(kc)) {
					window.keyboard_shortcuts[kc] = link;
					link.innerHTML = `<span class="keyboard_shortcut">${kc}</span>: ${link.innerHTML}`;
					return true;
				}
				return false;
			});
		}
	});
	//console.log(window.keyboard_shortcuts);
});
