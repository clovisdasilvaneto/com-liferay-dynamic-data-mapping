// This file was automatically generated from autocomplete.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace DDMAutoComplete.
 * @public
 */

if (typeof DDMAutoComplete == 'undefined') { var DDMAutoComplete = {}; }


DDMAutoComplete.actionPanel = function(opt_data, opt_ignored) {
  goog.asserts.assert((opt_data.addAutoCompleteButton instanceof soydata.SanitizedHtml) || (opt_data.addAutoCompleteButton instanceof soydata.UnsanitizedText) || goog.isString(opt_data.addAutoCompleteButton), "expected param 'addAutoCompleteButton' of type soydata.SanitizedHtml.");
  var addAutoCompleteButton = /** @type {soydata.SanitizedHtml} */ (opt_data.addAutoCompleteButton);
  goog.asserts.assert((opt_data.label instanceof soydata.SanitizedHtml) || (opt_data.label instanceof soydata.UnsanitizedText) || goog.isString(opt_data.label), "expected param 'label' of type soydata.SanitizedHtml.");
  var label = /** @type {soydata.SanitizedHtml} */ (opt_data.label);
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="row"><div class="col-md-12"><div class="autocomplete-action-panel cursor-pointer panel panel-default"><div class="panel-body">' + soy.$$escapeHtml(label) + '<span class="pull-right">' + soy.$$escapeHtml(addAutoCompleteButton) + '</span></div></div></div></div>');
};
if (goog.DEBUG) {
  DDMAutoComplete.actionPanel.soyTemplateName = 'DDMAutoComplete.actionPanel';
}


DDMAutoComplete.container = function(opt_data, opt_ignored) {
  goog.asserts.assert((opt_data.backButton instanceof soydata.SanitizedHtml) || (opt_data.backButton instanceof soydata.UnsanitizedText) || goog.isString(opt_data.backButton), "expected param 'backButton' of type soydata.SanitizedHtml.");
  var backButton = /** @type {soydata.SanitizedHtml} */ (opt_data.backButton);
  goog.asserts.assert((opt_data.label instanceof soydata.SanitizedHtml) || (opt_data.label instanceof soydata.UnsanitizedText) || goog.isString(opt_data.label), "expected param 'label' of type soydata.SanitizedHtml.");
  var label = /** @type {soydata.SanitizedHtml} */ (opt_data.label);
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div class="autocomplete-container"><header class="header-toolbar"><div class="toolbar-group"><div class="toolbar-group-content"><a class="autocomplete-header-back" href="javascript:;">' + soy.$$escapeHtml(backButton) + '</a></div></div><div class="toolbar-group-expand-text"><span title="Autocomplete">' + soy.$$escapeHtml(label) + '</span></div></header><div class="autocomplete-body"></div></div>');
};
if (goog.DEBUG) {
  DDMAutoComplete.container.soyTemplateName = 'DDMAutoComplete.container';
}
