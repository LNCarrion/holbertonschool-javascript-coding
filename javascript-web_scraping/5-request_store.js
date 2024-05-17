#!/usr/bin/node
const fs = require('fs');
const axios = require('axios');

const getAndStoreWebpage = async (url, filePath) => {
    try {
        const response = await axios.get(url);
        fs.writeFileSync(filePath, response.data, { encoding: 'utf-8' });
    } catch (error) {
        console.error("Error:", error.message);
    }
};

if (process.argv.length !== 4) {
    console.log("Usage: node script.js <url> <file_path>");
} else {
    const url = process.argv[2];
    const filePath = process.argv[3];
    getAndStoreWebpage(url, filePath);
}
