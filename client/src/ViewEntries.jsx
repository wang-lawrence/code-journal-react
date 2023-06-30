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
          <EntriesList data={data} />
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
        onClick={onViewSwap}>
        NEW
      </a>
    </h3>
  );
}

function EntriesList({ data }) {
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
                <i className="fa-solid fa-pencil"></i>
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
      {entriesList}
    </ul>
  );
}
