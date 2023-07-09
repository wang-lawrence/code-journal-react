export default function NavBar({ onViewSwap }) {
  return (
    <header className="header purple-background">
      <div className="container">
        <div className="row">
          <div className="column-full d-flex align-center">
            <h1 className="white-text">Code Journal</h1>
            <EntriesAnchor onViewSwap={onViewSwap} />
          </div>
        </div>
      </div>
    </header>
  );
}

function EntriesAnchor({ onViewSwap }) {
  return (
    <h3>
      <a
        id="entriesLink"
        className="entries-link white-text"
        href="#"
        onClick={() => onViewSwap('entries')}>
        Entries
      </a>
    </h3>
  );
}
