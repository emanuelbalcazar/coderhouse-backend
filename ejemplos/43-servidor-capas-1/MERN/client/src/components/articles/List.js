import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './List.css'

function ArticlesList() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios(
            process.env.REACT_APP_SERVER_API + '/articles',
        ).then(response => {
            setArticles(response.data);
        }).catch(console.error)
    }, []);

    return (<>
        <h2 id="title">Articulos:</h2>

        <ul>
            {articles.map(item => (
                <li id="article" key={item._id}>
                    <b>{item.title}</b>:&nbsp;<a>"{item.text}" escrito por {item.author}</a>
                </li>
            ))}
        </ul>
    </>
    )
}

export default ArticlesList