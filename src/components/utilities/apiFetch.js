import axios from "axios";
import React from 'react'

export function apiFetch(targetURL) {
    return axios
        .get(`${targetURL}`)
        .then(res => {
            // console.log(res)
            return res.data;
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
            throw error;
        });
};