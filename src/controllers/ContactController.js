import contactHelper from './helpers/contactHelper.js';

const contact = contactHelper();

class ContactController {
  async listContacts(req, res) {
    try {
      const contactList = await contact.listContacts();
      return res.json(contactList?.data);
    } catch (err) {
      console.error(err);
      return res.status(err.response.status).json(err.response.data.message);
    }
  }

  async createContacts(req, res) {
    try {
      const contactSheet = await contact.importContactSheet();
      const validContacts = await contact.removeInvalidContacts(contactSheet);
      const contactData = contact.formatContactData(validContacts);
      const constacts = await contact.createContacts(contactData);

      return res.status(200).json(constacts);
    } catch (err) {
      console.error(err);
      return res.status(err.response?.status).json(err.response?.data?.message);
    }
  }
}

export default new ContactController();
