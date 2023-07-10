import images from './images/placeholder-image-square.jpg';

export default function Placeholderimages({ url }) {
  return (
    <div className="column-half">
      <img
        className="input-b-radius form-image"
        id="formImage"
        src={url || images}
        alt="entry"
      />
    </div>
  );
}
