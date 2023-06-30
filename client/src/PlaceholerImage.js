import images from './images/placeholder-image-square.jpg';

export default function Placeholderimages() {
  return (
    <div className="column-half">
      <img
        className="input-b-radius form-image"
        id="formImage"
        src={images}
        alt="entry"
      />
    </div>
  );
}
