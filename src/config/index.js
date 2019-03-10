export default {
    apiUrl: process.env.NODE_ENV === 'production'
        ? 'https://nairaplus.herokuapp.com/api' : 'http://localhost:6200/api',
};