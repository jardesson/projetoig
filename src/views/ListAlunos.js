import React from 'react';

import '../Home.css';
/*
import axios from 'axios';

const BASE_URL = 'https://api-projeto-web.herokuapp.com/alunos';
const TOKEN = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBlbWFpbC5jb20iLCJleHAiOjE2MDgyOTc2NTJ9.hXWyXA5wPrYym3CMqBf0MmcTk7NJ5T-fIoUahhIgUTvZ6rfAmueuPK9uZtK2zIhn5SnOdokXBIVjT8qyW27Wkw';

const getListAlunos = () => {
    axios({
        url: BASE_URL,
        method: 'get',
        headers: {
            Authorization: TOKEN
        }
    }).then(res => {
        console.log(res.data);
    }).catch(error => {
        console.log(error);
    });
}*/

const ListAlunos = () => {
    return(
        <div>
            <p>LISTAGEM DOS DADOS DOS ALUNOS</p>
        </div>
    );
}

export default ListAlunos;