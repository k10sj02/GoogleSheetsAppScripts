function getHyperlink(row) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var range = sheet.getRange("A" + row);
  var formula = range.getFormula();
  var richText = range.getRichTextValue();
  var hyperlink = null;

  if (formula.includes('HYPERLINK')) {
    // Extract URL from a formula
    hyperlink = formula.match(/"([^"]+)"/)[1];
  } else if (richText.getLinkUrl()) {
    // Extract URL from a rich text hyperlink
    hyperlink = richText.getLinkUrl();
  }

  return hyperlink;
}
