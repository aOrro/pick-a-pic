export const Collection = props => {
  return (
    <div>
      <img
        src={props.data.cover_photo.urls.small}
        alt={props.data.cover_photo.alt_description}
      />
      <h3>{props.data.title}</h3>
      <span>{props.data.total_photos} photos</span>
    </div>
  );
};
