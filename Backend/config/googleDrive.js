const { google } = require("googleapis");
const path = require("path");

const KEYFILEPATH = "/etc/secrets/service-account.json";
const SCOPES = ["https://www.googleapis.com/auth/drive.readonly"];

const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: SCOPES,
});

const drive = google.drive({ version: "v3", auth });

module.exports = drive;
