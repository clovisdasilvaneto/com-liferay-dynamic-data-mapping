// This file was automatically generated from data-provider-parameter.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace DDMDataProviderParameter.
 * @public
 */

if (typeof DDMDataProviderParameter == 'undefined') { var DDMDataProviderParameter = {}; }


DDMDataProviderParameter.render = function(opt_data, opt_ignored) {
  goog.asserts.assert(goog.isBoolean(opt_data.hasInputs) || opt_data.hasInputs === 1 || opt_data.hasInputs === 0, "expected param 'hasInputs' of type boolean.");
  var hasInputs = /** @type {boolean} */ (!!opt_data.hasInputs);
  goog.asserts.assert(goog.isBoolean(opt_data.hasRequiredInputs) || opt_data.hasRequiredInputs === 1 || opt_data.hasRequiredInputs === 0, "expected param 'hasRequiredInputs' of type boolean.");
  var hasRequiredInputs = /** @type {boolean} */ (!!opt_data.hasRequiredInputs);
  var strings = goog.asserts.assertObject(opt_data.strings, "expected parameter 'strings' of type [dataProviderParameterInput: string, dataProviderParameterInputDescription: string, dataProviderParameterOutput: string, dataProviderParameterOutputDescription: string, requiredField: string].");
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div>' + ((hasInputs) ? '<div class="data-provider-parameter-input-container">' + ((hasRequiredInputs) ? '<div class="data-provider-label-container"><p class="data-provider-parameter-input-required-field">' + soy.$$escapeHtml(strings.requiredField) + '</p><span class="icon-asterisk text-warning"></span></div>' : '') + '<div class="data-provider-label-container"><p class="data-provider-parameter-input"><b>' + soy.$$escapeHtml(strings.dataProviderParameterInput) + '</b></p><p class="data-provider-parameter-input-description">' + soy.$$escapeHtml(strings.dataProviderParameterInputDescription) + '</p></div><div class="data-provider-parameter-input-list row"></div></div>' : '') + '<div class="data-provider-parameter-output-container"><div class="data-provider-label-container"><p class="data-provider-parameter-output"><b>' + soy.$$escapeHtml(strings.dataProviderParameterOutput) + '</b></p><p class="data-provider-parameter-output-description">' + soy.$$escapeHtml(strings.dataProviderParameterOutputDescription) + '</p></div><div class="data-provider-parameter-output-list row"></div></div></div>');
};
if (goog.DEBUG) {
  DDMDataProviderParameter.render.soyTemplateName = 'DDMDataProviderParameter.render';
}
