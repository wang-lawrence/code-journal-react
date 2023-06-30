export default function EntryButtons({ onSubmit }) {
  return (
    <div className="column-full d-flex justify-between">
      <button
        className="invisible delete-entry-button"
        type="button"
        id="deleteEntry">
        Delete Entry
      </button>
      <button
        className="input-b-radius text-padding purple-background white-text"
        onSubmit={onSubmit}>
        SAVE
      </button>
    </div>
  );
}
