import createFakeContact from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    const contact = readContacts();
    const newcontact = createFakeContact();

    contact.push(newcontact);
    await writeContacts(contact);

};

addOneContact();
