export default function NavBar() {
  return (
    <header className="header purple-background">
      <div className="container">
        <div className="row">
          <div className="column-full d-flex align-center">
            <h1 className="white-text">Code Journal</h1>
            <EntriesAnchor />
          </div>
        </div>
      </div>
    </header>
  );
}

function EntriesAnchor() {
  return (
    <h3>
      <a id="entriesLink" className="entries-link white-text" href="#">
        Entries
      </a>
    </h3>
  );
}
