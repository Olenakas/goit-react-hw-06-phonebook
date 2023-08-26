import React from 'react';
import styles from './ContactList.module.css';
import {useDispatch, useSelector} from "react-redux";
import {getContacts, getFilter} from "../../redux/selectors";
import {deleteContact} from "../../redux/contactSlice";

const getFilteredContacts = (filter, contacts) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter));
};

const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
    const filteredContacts = getFilteredContacts(filter, contacts);

    return (
        <ul className={styles.list}>
            {filteredContacts.map((contact) => (
                <li key={contact.id}>
                    {contact.name}: {contact.number}
                    <button type="button" onClick={() => dispatch(deleteContact(contact.id))}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;