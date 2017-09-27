// This file was automatically generated from calculator.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace DDMCalculator.
 * @public
 */

if (typeof DDMCalculator == 'undefined') { var DDMCalculator = {}; }


DDMCalculator.render = function(opt_data, opt_ignored) {
  goog.asserts.assert(opt_data.calculatorAngleLeft == null || (opt_data.calculatorAngleLeft instanceof soydata.SanitizedHtml) || (opt_data.calculatorAngleLeft instanceof soydata.UnsanitizedText) || goog.isString(opt_data.calculatorAngleLeft), "expected param 'calculatorAngleLeft' of type soydata.SanitizedHtml|string|undefined.");
  var calculatorAngleLeft = /** @type {soydata.SanitizedHtml|string|undefined} */ (opt_data.calculatorAngleLeft);
  goog.asserts.assert(opt_data.calculatorEllipsis == null || (opt_data.calculatorEllipsis instanceof soydata.SanitizedHtml) || (opt_data.calculatorEllipsis instanceof soydata.UnsanitizedText) || goog.isString(opt_data.calculatorEllipsis), "expected param 'calculatorEllipsis' of type soydata.SanitizedHtml|string|undefined.");
  var calculatorEllipsis = /** @type {soydata.SanitizedHtml|string|undefined} */ (opt_data.calculatorEllipsis);
  var strings = goog.asserts.assertObject(opt_data.strings, "expected parameter 'strings' of type [addField: string].");
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div><div class="calculator-add-field-button-container"><button class="btn btn-default btn-lg btn-primary calculator-add-field-button ddm-button" type="button"><span class="">' + soy.$$escapeHtml(strings.addField) + '</span></button></div><div class="calculator-button-area"><ul class="calculator-buttons calculator-buttons-numbers"><li class="border-top-left button-padding-icons calculator-button" data-calculator-key="backspace">' + soy.$$escapeHtml(calculatorAngleLeft) + '</li><li class="calculator-button" data-calculator-key="(">(</li><li class="border-top-right calculator-button" data-calculator-key=")">)</li><li class="calculator-button" data-calculator-key="1">1</li><li class="calculator-button" data-calculator-key="2">2</li><li class="calculator-button" data-calculator-key="3">3</li><li class="calculator-button" data-calculator-key="4">4</li><li class="calculator-button" data-calculator-key="5">5</li><li class="calculator-button" data-calculator-key="6">6</li><li class="calculator-button" data-calculator-key="7">7</li><li class="calculator-button" data-calculator-key="8">8</li><li class="calculator-button" data-calculator-key="9">9</li><li class="border-bottom-left button-two-columns calculator-button" data-calculator-key="0">0</li><li class="border-bottom-right calculator-button" data-calculator-key=".">.</li></ul><ul class="calculator-buttons calculator-buttons-operators"><li class="border-top-left border-top-right button-padding-icons calculator-add-operator-button-area">' + soy.$$escapeHtml(calculatorEllipsis) + '<div class="calculator-add-operator-button"></div><div class="container-list-advanced-operators"></div></li><li class="calculator-button" data-calculator-key="+">+</li><li class="calculator-button" data-calculator-key="-">-</li><li class="calculator-button" data-calculator-key="*">*</li><li class="border-bottom-left border-bottom-right calculator-button" data-calculator-key="/">/</li></ul></div></div>');
};
if (goog.DEBUG) {
  DDMCalculator.render.soyTemplateName = 'DDMCalculator.render';
}
