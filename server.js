const app = require('./app');

const SERVER_PORT = process.env.SERVER_PORT || 3005;

app.listen(SERVER_PORT, () => console.info(`Server up and running on port ${SERVER_PORT}`));