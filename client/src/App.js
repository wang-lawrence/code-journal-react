import NavBar from './NavBar';
import ViewEntries from './ViewEntries';
import './reset.css';
import './layout.css';
import './styles.css';
import ViewCreateEnty from './ViewCreateEntry';
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
      <ViewEntries data={data} />
      <ViewCreateEnty />
    </div>
  );
}

export default App;
