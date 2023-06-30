import Placeholderimages from './PlaceholerImage';
import Title from './Title';
import PhotoUrl from './PhotoUrl';
import Notes from './Notes';
import EntryButtons from './EntryButtons';
import { useState } from 'react';

export default function ViewCreateEntry({ data }) {
  const [title, setTitle] = useState('Title');
  const [url, setUrl] = useState('url');
  const [notes, setNotes] = useState('');

  function handleChangeTitle(text) {
    setTitle(text);
    console.log(data);
  }

  function handleChangeUrl(text) {
    setUrl(text);
  }

  function handleChangeNotes(text) {
    setNotes(text);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formValues = {
      title: event.target.elements.formTitle.value,
      photoUrl: event.target.elements.formURL.value,
      notes: event.target.elements.formNotes.value,
    };
    if (data.editing === null) {
      formValues.entryId = data.nextEntryId++;
      data.entries.unshift(formValues);
      // $ul.prepend(renderEntry(formValues));
    }
    // else {
    //  formValues.entryId = data.editing.entryId;
    //  updateEntries(formValues);
    //   const updatedLi = renderEntry(formValues);
    //   const liToReplace = findLi(data.editing.entryId);
    //   liToReplace.replaceWith(updatedLi);
    //   updateFormTitle('New Entry');
    //   data.editing = null;
    // }
    // resetForm();
    // viewSwap('entries');
  }
  return (
    <div className="container" data-view="entry-form">
      <div className="row">
        <div className="column-full d-flex justify-between">
          <h1 id="formH1">New Entry</h1>
        </div>
      </div>
      <form id="entryForm">
        <div className="row margin-bottom-1">
          <Placeholderimages />
          <div className="column-half">
            <Title onChangeTitle={handleChangeTitle} />
            <PhotoUrl />
          </div>
        </div>
        <div className="row margin-bottom-1">
          <Notes />
        </div>
        <div className="row">
          <EntryButtons onSubmit={handleSubmit} />
        </div>
      </form>
    </div>
  );
}
