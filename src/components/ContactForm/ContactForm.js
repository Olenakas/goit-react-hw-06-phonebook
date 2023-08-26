import React, { useState } from 'react';
import styles from './ContactForm.module.css';

import {useDispatch, useSelector} from "react-redux";
import {getContacts} from "../../redux/selectors";
import {addContact} from "../../redux/contactSlice";

const ContactForm = () => {
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target[0].value;
        const number = event.target[1].value;
        const existingContact = contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase());
        if (existingContact) {
            alert(`${name} is already in contacts.`);
        } else {
            dispatch(addContact({name, number}));
            event.target[0].value = '';
            event.target[1].value = '';

        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    required
                />
            </label>
            <label>
                Number:
                <input
                    type="tel"
                    name="number"
                    required
                />
            </label>
            <button type="submit">Add contact</button>
        </form>
    );
};

export default ContactForm;