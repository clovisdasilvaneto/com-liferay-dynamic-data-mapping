AUI.add(
	'liferay-ddl-form-builder-field-types-sidebar',
	function(A) {
		var AObject = A.Object;

		var CSS_PREFIX = A.getClassName('form', 'builder', 'field', 'types', 'sidebar');

		var FieldTypes = Liferay.DDM.Renderer.FieldTypes;

		var FormBuilderFieldTypesSidebar = A.Component.create(
			{
				ATTRS: {
					title: {
						value: ''
					}
				},

				CSS_PREFIX: CSS_PREFIX,

				EXTENDS: Liferay.DDL.FormBuilderSidebar,

				NAME: 'liferay-ddl-form-builder-field-types-sidebar',

				prototype: {
					getTemplateContext: function() {
						var instance = this;

						var context = FormBuilderFieldTypesSidebar.superclass.getTemplateContext.apply(instance, arguments);

						return A.merge(
							context, 
							{
								type: 'fieldTypes'
							}
						);
					}
				}
			}
		);

		Liferay.namespace('DDL').FormBuilderFieldTypesSidebar = FormBuilderFieldTypesSidebar;
	},
	'',
	{
		requires: ['aui-tabview', 'liferay-ddl-form-builder-sidebar', 'liferay-ddm-form-renderer-types', 'liferay-ddl-form-builder-field-types-sidebar-template', 'liferay-ddl-form-builder-field-types-toolbar-template']
	}
);