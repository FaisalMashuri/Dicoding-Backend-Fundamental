const AlbumHandler = require('./handler');
const routes = require('./routes');

module.exports = {
    name: 'openMusic API V1 albums',
    version: '1.0.0',
    register: async (server, { service, validator }) => {
        const albumsHandler = new AlbumHandler(service, validator);
        server.route(routes(albumsHandler));
    },
};