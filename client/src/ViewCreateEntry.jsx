import Placeholderimages from './PlaceholerImage';
import Title from './Title';
import PhotoUrl from './PhotoUrl';
import Notes from './Notes';
import EntryButtons from './EntryButtons';
import Modal from './Modal';
import { useState } from 'react';

export default function ViewCreateEntry({ data, onViewSwap }) {
  const [title, setTitle] = useState(data.editing?.title ?? '');
  const [url, setUrl] = useState(data.editing?.photoUrl ?? '');
  const [notes, setNotes] = useState(data.editing?.notes ?? '');
  const [modalOpen, setModalOpen] = useState(false);

  function handleChangeTitle(text) {
    setTitle(text);
  }

  function handleChangeUrl(text) {
    setUrl(text);
  }

  function handleChangeNotes(text) {
    setNotes(text);
  }

  function handleDeleteEntry(data) {
    for (let i = 0; i < data.entries.length; i++) {
      if (data.entries[i].entryId === data.editing.entryId) {
        data.entries.splice(i, 1);
      }
    }
    console.log(data);
    data.editing = null;
    onViewSwap('entries');
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
    } else {
      console.log(data.editing);
      console.log(data);
      formValues.entryId = data.editing.entryId;
      for (let i = 0; i < data.entries.length; i++) {
        if (data.entries[i].entryId === data.editing.entryId) {
          data.entries[i] = formValues;
        }
      }
      data.editing = null;
    }
    setTitle('');
    setUrl('');
    setNotes('');
    onViewSwap('entries');
  }

  function handleToggleModal() {
    setModalOpen(!modalOpen);
  }

  return (
    <div className="container" data-view="entry-form">
      <div className="row">
        <div className="column-full d-flex justify-between">
          <h1 id="formH1">{data.editing ? 'Edit Entry' : 'New Entry'}</h1>
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
          <EntryButtons data={data} onOpenModal={handleToggleModal} />
        </div>
      </form>
      {modalOpen && (
        <Modal
          data={data}
          onCloseModal={handleToggleModal}
          onDeleteEntry={handleDeleteEntry}
        />
      )}
    </div>
  );
}
