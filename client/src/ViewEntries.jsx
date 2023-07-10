export default function ViewEntries({ data, onViewSwap }) {
  return (
    <div className="container" data-view="entries">
      <div className="row">
        <div className="column-full d-flex justify-between align-center">
          <h1>Entries</h1>
          <NewEntryButton onViewSwap={onViewSwap} />
        </div>
      </div>
      <div className="row">
        <div className="column-full">
          <EntriesList data={data} onViewSwap={onViewSwap} />
        </div>
      </div>
    </div>
  );
}

function NewEntryButton({ onViewSwap }) {
  return (
    <h3>
      <a
        id="formLink"
        className="white-text form-link"
        href="#"
        onClick={() => onViewSwap('entry-form')}>
        NEW
      </a>
    </h3>
  );
}

function EditEntryPencilButton({ id, data, onViewSwap }) {
  function setEditing() {
    for (let i = 0; i < data.entries.length; i++) {
      console.log('id: ', id);
      console.log('data: ', data);
      console.log('data.entries[i]: ', data.entries[i]);
      console.log('data.editing ', data.editing);
      if (data.entries[i].entryId === id) {
        data.editing = data.entries[i];
      }
    }
  }

  return (
    <i
      className="fa-solid fa-pencil"
      onClick={() => {
        setEditing();
        onViewSwap('entry-form');
      }}></i>
  );
}

function EntriesList({ data, onViewSwap }) {
  const entriesList = data.entries.map((entry) => {
    return (
      <li data-entry-id={entry.entryId} key={entry.entryId}>
        <div className="row">
          <div className="column-half">
            <img
              className="input-b-radius form-image"
              src={entry.photoUrl}
              alt={entry.title}
            />
          </div>
          <div className="column-half">
            <div className="row">
              <div className="column-full d-flex justify-between">
                <h3>{entry.title}</h3>
                <EditEntryPencilButton
                  id={entry.entryId}
                  data={data}
                  onViewSwap={onViewSwap}
                />
              </div>
            </div>
            <p>{entry.notes}</p>
          </div>
        </div>
      </li>
    );
  });

  return (
    <ul className="entry-ul" id="entryUl">
      {data.entries.length > 0 ? (
        entriesList
      ) : (
        <p>No entries have been recorded.</p>
      )}
    </ul>
  );
}
