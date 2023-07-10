export default function Title({ onChangeTitle, activeTitle }) {
  return (
    <>
      <label className="margin-bottom-1 d-block" htmlFor="title">
        Title
      </label>
      <input
        required
        className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
        type="text"
        id="formTitle"
        name="formTitle"
        value={activeTitle}
        onChange={(e) => onChangeTitle(e.target.value)}
      />
    </>
  );
}
