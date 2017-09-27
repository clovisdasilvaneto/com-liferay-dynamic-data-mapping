// This file was automatically generated from field-options-toolbar.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace DDMFieldSettingsToolbar.
 * @public
 */

if (typeof DDMFieldSettingsToolbar == 'undefined') { var DDMFieldSettingsToolbar = {}; }


DDMFieldSettingsToolbar.render = function(opt_data, opt_ignored) {
  goog.asserts.assert((opt_data.toolbarButtonIcon instanceof soydata.SanitizedHtml) || (opt_data.toolbarButtonIcon instanceof soydata.UnsanitizedText) || goog.isString(opt_data.toolbarButtonIcon), "expected param 'toolbarButtonIcon' of type soydata.SanitizedHtml.");
  var toolbarButtonIcon = /** @type {soydata.SanitizedHtml} */ (opt_data.toolbarButtonIcon);
  goog.asserts.assert(opt_data.toolbarTemplateContext == null || goog.isObject(opt_data.toolbarTemplateContext), "expected param 'toolbarTemplateContext' of type null|undefined|{options: !Array<{buttonClass: string, handler: string, label: string}>}.");
  var toolbarTemplateContext = /** @type {null|undefined|{options: !Array<{buttonClass: string, handler: string, label: string}>}} */ (opt_data.toolbarTemplateContext);
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="dropdown open"><a class="dropdown-toggle icon-monospaced" data-toggle="dropdown" href="javascript:;">' + soy.$$escapeHtml(toolbarButtonIcon) + '</a>' + DDMFieldSettingsToolbar.field_settings_toolbar_list({options: toolbarTemplateContext.options}) + '</div>');
};
if (goog.DEBUG) {
  DDMFieldSettingsToolbar.render.soyTemplateName = 'DDMFieldSettingsToolbar.render';
}


DDMFieldSettingsToolbar.field_settings_toolbar_list = function(opt_data, opt_ignored) {
  var options = goog.asserts.assertArray(opt_data.options, "expected parameter 'options' of type list<[buttonClass: string, handler: string, label: string]>.");
  var output = '<ul class="dropdown-menu dropdown-menu-right">';
  var optionList59 = options;
  var optionListLen59 = optionList59.length;
  for (var optionIndex59 = 0; optionIndex59 < optionListLen59; optionIndex59++) {
    var optionData59 = optionList59[optionIndex59];
    output += DDMFieldSettingsToolbar.field_settings_toolbar_item({option: optionData59});
  }
  output += '</ul>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  DDMFieldSettingsToolbar.field_settings_toolbar_list.soyTemplateName = 'DDMFieldSettingsToolbar.field_settings_toolbar_list';
}


DDMFieldSettingsToolbar.field_settings_toolbar_item = function(opt_data, opt_ignored) {
  var option = goog.asserts.assertObject(opt_data.option, "expected parameter 'option' of type [buttonClass: string, handler: string, label: string].");
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<li><a class="' + soy.$$escapeHtmlAttribute(option.buttonClass || '') + '" data-handler="' + soy.$$escapeHtmlAttribute(option.handler) + '" href="javascript:;" title="' + soy.$$escapeHtmlAttribute(option.label) + '">' + soy.$$escapeHtml(option.label) + '</a></li>');
};
if (goog.DEBUG) {
  DDMFieldSettingsToolbar.field_settings_toolbar_item.soyTemplateName = 'DDMFieldSettingsToolbar.field_settings_toolbar_item';
}
