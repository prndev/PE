window.keyboard_shortcuts = {}

document.addEventListener('keyup', (e) => {
	let link = window.keyboard_shortcuts[e.key.toUpperCase()];
	let isTyping = e.originalTarget && ['INPUT'].contains(e.originalTarget.tagName);
	if (link && !isTyping) {
		link.click();
	}
}, false);

let add_keyboard_shortcuts = (ev) => {
	if (State.active.variables.useKeyboardShortcuts) {
		window.keyboard_shortcuts = {};
		let keyword = (s) => {
			// from https://stackoverflow.com/questions/861721/
			var words = ['go', 'visit', 'to', 'the', 'Have', 'a'];
			words = words.concat(['Wear', 'Set', 'Rename', 'Del', 'Detailed', 'Wait', 'Remove', 'Insert', 'Wardrobe', 'Quick', 'Detailed', 'Slot', 'your']);
			var re = new RegExp('\\b(' + words.join('|') + ')\\b', 'gi');
			return (s || '').replace(re, '').replace(' ','').trim();
		}
		let links = document.getElementById('story').querySelectorAll('a.link-internal');
		links.forEach((link, index, links) => {
			if (link.classList.contains('macro-click')) {
				link.addEventListener('click', add_keyboard_shortcuts);
			}
			if (link.querySelector('.keyboard_shortcut')) {
				console.log('already has', link);
				// already has shortcut assigned
			} else {
				if (index === links.length - 1) { 
					window.keyboard_shortcuts[" "] = link;
					link.innerHTML = `<span class="keyboard_shortcut">Space</span> ${link.innerHTML}`;
				} else {
					let only_typable_characters = link.innerText.toUpperCase().replace(/[^A-Z0-9 ]/g, '');
					let text = keyword(only_typable_characters);
					if (text) {
						let keychars = Array.from(text);
						let usedchars = Object.keys(window.keyboard_shortcuts);
						let keychar = keychars.find(kc => {
							if (!usedchars.contains(kc)) {
								window.keyboard_shortcuts[kc] = link;
								link.innerHTML = `<span class="keyboard_shortcut">${kc}</span> ${link.innerHTML}`;
								}
								return true;
							return false;
						});
						if (!keychar) {
							console.log('No chars free', text, usedchars);
						}
					} else {
						console.log('No usable text', link);
					}
				}
			}
		});
	}
}

$(document).on(':passagedisplay', add_keyboard_shortcuts);
