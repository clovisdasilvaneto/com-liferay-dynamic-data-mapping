AUI.add(
	'liferay-ddm-form-builder-field-types-sidebar',
	function(A) {
		var AObject = A.Object;

		var CSS_PREFIX = A.getClassName('form', 'builder', 'field', 'types', 'sidebar');

		var FieldTypes = Liferay.DDM.Renderer.FieldTypes;

		var FormBuilderFieldTypesSidebar = A.Component.create(
			{
				ATTRS: {
					fieldTypes: {
						getter: '_getFieldTypes'
					},
					strings: {
						value: {
							basic: Liferay.Language.get('field-types-basic-elements'),
							customized: Liferay.Language.get('field-types-customized-elements')
						}
					},
				},

				CSS_PREFIX: CSS_PREFIX,

				EXTENDS: Liferay.DDM.FormBuilderSidebar,

				NAME: 'liferay-ddm-form-builder-field-types-sidebar',

				prototype: {
					getTemplateContext: function() {
						var instance = this;

						var context = FormBuilderFieldTypesSidebar.superclass.getTemplateContext.apply(instance, arguments);

						return A.merge(
							context, 
							{
								fieldTypes: instance.get('fieldTypes'),
								strings: instance.get('strings'),
								title: Liferay.Language.get('field-types-sidebar-title'),
								type: 'fieldTypes'
							}
						);
					},

					_getFieldTypes: function(fieldTypes) {
						var instance = this;

						var types = [];

						fieldTypes.forEach(function(fieldType) {
							types.push(
								{
									group: fieldType.get('group') || 'customized',
									icon: window.DDMFieldTypesSidebar.render.Soy.toIncDom(Liferay.Util.getLexiconIconTpl(fieldType.get('icon'), 'icon-monospaced')),
									label: fieldType.get('label')
								}
							);
						});

						return _.groupBy(types, 'group');
					}
				}
			}
		);

		Liferay.namespace('DDM').FormBuilderFieldTypesSidebar = FormBuilderFieldTypesSidebar;
	},
	'',
	{
		requires: ['aui-tabview', 'liferay-ddm-form-builder-sidebar', 'liferay-ddm-form-renderer-types', 'liferay-ddm-form-builder-field-types-sidebar-template', 'liferay-ddm-form-builder-field-types-toolbar-template']
	}
);