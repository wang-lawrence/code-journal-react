export default function ViewEntries() {
  return (
    <div className="container" data-view="entries">
      <div className="row">
        <div className="column-full d-flex justify-between align-center">
          <h1>Entries</h1>
          <NewEntryButton />
        </div>
      </div>
      <div className="row">
        <div className="column-full">
          <EntriesList />
        </div>
      </div>
    </div>
  );
}

function NewEntryButton() {
  return (
    <h3>
      <a id="formLink" className="white-text form-link" href="#">
        NEW
      </a>
    </h3>
  );
}

function EntriesList({ data }) {
  return (
    <ul className="entry-ul" id="entryUl">
      <li data-entry-id="">
        <div className="row">
          <div className="column-half">
            <img
              className="input-b-radius form-image"
              src="https://archives.bulbagarden.net/media/upload/f/fb/0001Bulbasaur.png"
              alt="bulbasaur"
            />
          </div>
          <div className="column-half">
            <div className="row">
              <div className="column-full d-flex justify-between">
                <h3>This is test Title</h3>
                <i className="fa-solid fa-pencil"></i>
              </div>
            </div>
            <p>Grass Pokemon</p>
          </div>
        </div>
      </li>
    </ul>
  );
}
