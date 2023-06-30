import NavBar from './NavBar';
import ViewEntries from './ViewEntries';
import './reset.css';
import './layout.css';
import './styles.css';

/* exported data */

let data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};

window.addEventListener('beforeunload', function (event) {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('code-journal-data', dataJSON);
});

const localData = JSON.parse(localStorage.getItem('code-journal-data'));
if (localData) {
  data = localData;
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <ViewEntries />
    </div>
  );
}

export default App;
