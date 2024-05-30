function fillBlanksWithNa() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var range = sheet.getDataRange();
  var values = range.getValues();
  
  for (var i = 0; i < values.length; i++) {
    for (var j = 0; j < values[i].length; j++) {
      if (values[i][j] === '') {
        values[i][j] = 'n/a';
      }
    }
  }
  
  range.setValues(values);
}
