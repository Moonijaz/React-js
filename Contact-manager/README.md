# React + Vite

In this project we are going to :
    create react app,
    use components,
    use of states and prob,
    passing of data from parent to child component vicevers,
    handling of events and form
1. Created Component  folder and added different components in it such as AddContact, Contactlist and Header.
2. Header component only contains the headin of the project "Contact- manager".
3. AddContact.jsx contaions the part of code where input will be given in form of name and email. Values are targeted here where by clicking on Add button they will add the values in the Contact list. while the Addcontact.css contains the css that is used.
4. in Contactlist.jsx values that were given in Addcontact.jsx are mapped with the name and email in contact list, where we have used {contacts.map((contact, index) to map name with contact.name and email.contact.email.

Overall, the project is about taking values (name and email) as input. and save and display them in the contact list.