
import { GetSession } from "../_lib/session"
import { getContacts } from "../api/contact";

import ContactList from "../_components/contactList";
const Contact = async () => {

 const user = await GetSession();

  // 🔹 If user not logged in
  if (!user) {
    return (
      <div>
        Please{" "}
        <a href="/login" className="text-blue-700 hover:underline">
          login
        </a>{" "}
        to view contacts.
      </div>
    );
  }

  // 🔹 Fetch contacts
  const contacts = await getContacts(user.id);

  // 🔹 No contacts found
  if (!contacts || contacts.length === 0) {
    return (
      <div>
        You have no contacts. Please{" "}
        <a href="/contact/new" className="text-blue-700 hover:underline">
          add a contact
        </a>{" "}
        to your contact list.
      </div>
    );
  }

  // 🔹 Render contact list
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Your Contacts</h1>

        <a
          href="/contact/new"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          Add Contact
        </a>
      </div>

      <ContactList  contacts={contacts}/>
    </>
  );
};


export default Contact
