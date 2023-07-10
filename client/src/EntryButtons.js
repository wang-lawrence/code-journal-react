export default function EntryButtons({ data, onOpenModal }) {
  return (
    <>
      <div className="column-full d-flex justify-between">
        <DeleteButton data={data} onOpenModal={onOpenModal} />
        <button className="input-b-radius text-padding purple-background white-text">
          SAVE
        </button>
      </div>
    </>
  );
}

function DeleteButton({ data, onOpenModal }) {
  return (
    <button
      className={`${data.editing ? '' : 'invisible'} 'delete-entry-button'`}
      type="button"
      id="deleteEntry"
      onClick={() => onOpenModal()}>
      Delete Entry
    </button>
  );
}
