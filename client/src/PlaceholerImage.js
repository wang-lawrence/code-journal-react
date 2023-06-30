import images from './images/placeholder-image-square.jpg';

export default function Placeholderimages() {
  return (
    <div className="column-half">
      <image
        className="input-b-radius form-image"
        id="formImage"
        src={images}
        alt="image of entry image"
      />
    </div>
  );
}
