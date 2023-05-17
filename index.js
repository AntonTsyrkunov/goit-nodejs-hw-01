const { Command } = require("commander");
const contacts = require("./contats");
const program = new Command();

const invokeAction = async ({ action, name, email, phone, id }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.table(allContacts)
      break;
    case "get":
      const oneContact = await contacts.getContactById(id);
      console.log(oneContact);
      break;
    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      console.log(newContact);
      break;
    case "remove":
      const deleteContact = await contacts.removeContact(id);
      console.log(deleteContact);
      break;
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