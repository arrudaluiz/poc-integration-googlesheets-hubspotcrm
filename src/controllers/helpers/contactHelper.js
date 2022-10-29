import connectionHelper from '../../utils/connection.js';
import googleHelper from '../../utils/googleSheets.js';

const connection = connectionHelper();
const google = googleHelper();

export default () => {
  function listContacts() {
    return connection.get('/contacts');
  }

  function importContactSheet() {
    return google.readSheet(
      process.env.CONTACT_SHEET_ID,
      process.env.CONTACT_SHEET_RANGE
    );
  }

  function hasCorporateEmail(contact) {
    const emailDomain = contact[1].split('@')[1];
    const websiteDomain = contact[5].match(
      /[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/
    )[0];

    return emailDomain === websiteDomain;
  }

  function removeInvalidContacts(contactSheet) {
    return contactSheet.filter((contact) =>
      hasCorporateEmail(contact)
    );
  }

  function formatContactData(contactSheet) {
    const inputs = contactSheet.map((contact) => {
      const [company, email, firstname, lastname, phone, website] = contact;
      const properties = {
        company,
        email,
        firstname,
        lastname,
        phone,
        website
      };

      return { properties };
    });

    return { inputs };
  }

  function createContacts(contacts) {
    return connection.post('/contacts/batch/create', contacts);
  }

  return {
    listContacts,
    importContactSheet,
    removeInvalidContacts,
    formatContactData,
    createContacts,
  };
};
