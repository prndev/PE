/*
 * Create the Right UI Bar.
 * 
 * from http://twinery.org/questions/25976/how-to-create-a-right-sidebar
 */
var $rightUiBar = $('<div id="right-ui-bar"></div>').insertAfter("#ui-bar");

var rightTray = $rightUiBar.append('<div id="right-ui-bar-tray"><button id="right-ui-bar-toggle" tabindex="0" title="Toggle the Right UI bar" aria-label="Toggle the Right UI bar" type="button"></button></div>');

var rightBody = $rightUiBar.append('<div id="right-ui-bar-body"></div>');

/* Attach the toggle button click. */
$rightUiBar.find('#right-ui-bar-toggle').ariaClick({
		label : "Toggle the Right UI bar"
	}, function () {
		$rightUiBar.toggleClass('stowed');
	});

/* Automatically show the contents of the StoryRightSidebar passage in the right-ui-bar-body element. */
postrender["Display Right Sidebar Contents"] = function (content, taskName) {
	setPageElement('right-ui-bar-body', 'StoryRightSidebar');
};