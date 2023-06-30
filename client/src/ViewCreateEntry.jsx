import Placeholderimages from './PlaceholerImage';
import Title from './Title';
import PhotoUrl from './PhotoUrl';
import Notes from './Notes';
import EntryButtons from './EntryButtons';
import { useState } from 'react';
// import images from './images/placeholder-image-square.jpg';

export default function ViewCreateEntry({ data, onViewSwap }) {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [notes, setNotes] = useState('');

  function handleChangeTitle(text) {
    setTitle(text);
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
      title: title,
      photoUrl: url,
      notes: notes,
    };
    if (data.editing === null) {
      formValues.entryId = data.nextEntryId++;
      data.entries.unshift(formValues);

      // $ul.prepend(renderEntry(formValues));
    }
    console.log(data);
    // else {
    //  formValues.entryId = data.editing.entryId;
    //  updateEntries(formValues);
    //   const updatedLi = renderEntry(formValues);
    //   const liToReplace = findLi(data.editing.entryId);
    //   liToReplace.replaceWith(updatedLi);
    //   updateFormTitle('New Entry');
    //   data.editing = null;
    // }
    setTitle('');
    setUrl('');
    setNotes('');
    onViewSwap('entries');
  }
  return (
    <div className="container" data-view="entry-form">
      <div className="row">
        <div className="column-full d-flex justify-between">
          <h1 id="formH1">New Entry</h1>
        </div>
      </div>
      <form id="entryForm" onSubmit={handleSubmit}>
        <div className="row margin-bottom-1">
          <Placeholderimages url={url} />
          <div className="column-half">
            <Title onChangeTitle={handleChangeTitle} activeTitle={title} />
            <PhotoUrl onChangeUrl={handleChangeUrl} activeUrl={url} />
          </div>
        </div>
        <div className="row margin-bottom-1">
          <Notes onChangeNotes={handleChangeNotes} activeNotes={notes} />
        </div>
        <div className="row">
          <EntryButtons />
        </div>
      </form>
    </div>
  );
}
