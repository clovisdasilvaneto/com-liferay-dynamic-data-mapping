Liferay.Loader.require(
	'frontend-js-metal-web/metal-soy-bundle/build/bundle',
	'dynamic-data-mapping-form-builder/templates/field-types-sidebar.es',
	function(MetalSoyBundle, DDMFieldTypesSidebar) {
		if (!window.DDMFieldTypesSidebar) {
			window.DDMFieldTypesSidebar = {};
		}

		DDMFieldTypesSidebar.default.forEach(function(item) {
			window.DDMFieldTypesSidebar[item.key] = item.component;
		});

		AUI.add('liferay-ddm-form-builder-field-types-sidebar-template');
	}
);
