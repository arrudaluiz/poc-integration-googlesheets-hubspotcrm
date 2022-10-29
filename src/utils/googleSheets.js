import { google } from 'googleapis';

const sheets = google.sheets('v4');

export default () => {
  async function readSheet(spreadsheetId = '', range = '') {
    const request = {
      spreadsheetId,
      range,
      auth: authorizeConnection()
    };

    try {
      const response = (await sheets.spreadsheets.values.get(request)).data
        .values;

      return response;
    } catch (err) {
      console.error(err);
    }
  }

  function authorizeConnection() {
    const authClient = new google.auth.GoogleAuth({
      keyFile: process.env.GOOGLE_CREDENTIALS,
      scopes: 'https://www.googleapis.com/auth/spreadsheets.readonly'
    });

    if (authClient == null) {
      throw Error('authentication failed');
    }

    return authClient;
  }

  return {
    readSheet
  };
};
