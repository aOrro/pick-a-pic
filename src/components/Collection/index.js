export const Collection = ({ data }) => {
  return (
    <div>
      <img
        src={data.cover_photo.urls.small}
        alt={data.cover_photo.alt_description}
      />
      <h3>{data.title}</h3>
      <span>{data.total_photos} photos</span>
    </div>
  );
};
