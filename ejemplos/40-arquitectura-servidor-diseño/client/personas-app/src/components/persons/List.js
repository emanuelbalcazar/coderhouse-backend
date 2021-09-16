import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import * as mocks from '../../services/persons.mock';

function PersonList() {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        /* const result = await axios(
            'https://hn.algolia.com/api/v1/search?query=redux',
        ); */
        setPersons(mocks.persons);
    }, []);

    return (
        <ul>
            {persons.map(item => (
                <li key={item._id}>
                    <a>{item.name} - {item.surname} - {item.dni}</a>
                </li>
            ))}
        </ul>
    )
}

export default PersonList