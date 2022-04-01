const SongMapToModel = ({
    id,
    title,
    year,
    performer,
    genre,
    duration,
    createdAt,
    updatedAt,
    albumId="-"
}) => ({
    id,
    title,
    year,
    performer,
    genre,
    duration,
    album_id:albumId,
    createdAt: createdAt,
    updatedAt:updatedAt
})

const AlbumMapDBToModel = ({
    id,
    name,
    year,
    created_at,
    updated_at,
}) => ({
    id,
    name,
    year,
    createdAt: created_at,
    updatedAt: updated_at,
});

module.exports = {SongMapToModel, AlbumMapDBToModel}