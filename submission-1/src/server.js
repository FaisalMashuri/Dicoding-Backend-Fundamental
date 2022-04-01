require("dotenv").config();

const Hapi = require("@hapi/hapi");
const albums = require("./api/albums");
const songs = require("./api/songs");
const AlbumServices = require("./services/postgres/AlbumServices");
const SongServices = require("./services/postgres/SongServices");
const AlbumsValidator = require("./validator/albums");
const SongsValidator = require("./validator/songs");


const init = async () => {
  const albumsService = new AlbumServices();
  const songsService = new SongServices();
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });
  await server.register([
    {
      plugin: albums,
      options: {
        service: albumsService,
        validator: AlbumsValidator,
      },
    },
    {
      plugin: songs,
      options: {
        service: songsService,
        validator: SongsValidator,
      },
    },
  ]);
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
