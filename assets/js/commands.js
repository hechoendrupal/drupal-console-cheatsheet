$.ajaxSetup( { "async": false } );
// Read data
function loadCommands(language) {
	if(!language) {
		language = 'en';
	}
	$.getJSON( "data/commands-"+language+".json", function( data ) {
		var namespaces = data.commands;
		$.each( namespaces, function( namespace, commands) {
			renderNamespace(namespace, commands);
		});
	});
}

function renderNamespace(namespace, commands) {
	var template = document.getElementById('command').innerHTML;
	var commandSection = Mustache.render(
		template,
		{
			"namespace": namespace,
			"commands": commands
		}
	);
	$(commandSection).appendTo(".grid");
}
