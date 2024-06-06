function createAndSendDocuments() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var templateId = 'YOUR_TEMPLATE_DOC_ID'; // Replace with your Google Doc template ID

  for (var i = 1; i < data.length; i++) {
    var copyId = DriveApp.getFileById(templateId).makeCopy().getId();
    var copyDoc = DocumentApp.openById(copyId);
    var body = copyDoc.getBody();

    for (var j = 0; j < data[0].length; j++) {
      var placeholder = `<<${data[0][j]}>>`;
      var value = data[i][j];
      body.replaceText(placeholder, value);
    }

    copyDoc.saveAndClose();

    // Email the document (optional)
    var email = data[i][1]; // Assuming the second column contains email addresses
    var subject = 'Your Subject Here';
    var message = 'Your message here';
    MailApp.sendEmail(email, subject, message, {
      attachments: [DriveApp.getFileById(copyId)]
    });
  }
}
