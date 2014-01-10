requirejs.config({
	"paths": {
		// requireJS plugins
		"text": "../vendor/requirejs/plugins/text",
		"json": "../vendor/requirejs/plugins/json",

		"jquery": "../vendor/jquery/jquery",
		"jquery-ui": "../vendor/jquery-ui",
		"jquery-plugins": "../vendor/jquery/plugins"
	},
	"shim": {
		"jquery-plugins/jquery.hashchange": [ "jquery" ],
		"jquery-ui/jquery.ui.widget": [ "jquery" ],
		"jquery-ui/jquery.ui.tabs": [ "jquery-ui/jquery.ui.widget" ],
		"jquery-ui/jquery.ui.core": [ "jquery" ]
	}
});
