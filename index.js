const {program} = require("commander");
const contacts = require("./db");

const invokeAction = async ({ action, name, email, phone, id }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
    case "get":
      const oneContacts = await contacts.getContactById(id);
      return console.log(oneContacts);
    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);
    case "remove":
      const deleteContact = await contacts.addContact(id);
      return console.log(deleteContact);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "choose id")
  .option("-n, --name <type>", "choose name")
  .option("-e, --email <type>", "choose email")
  .option("-p, --phone <type>", "choose phone");

program.parse();

const options = program.opts();
invokeAction(options)