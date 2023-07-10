export default function Modal({ data, onCloseModal, onDeleteEntry }) {
  return (
    <article>
      <div
        id="modalContainer"
        class="modal-container d-flex justify-center align-center">
        <div class="modal row">
          <div class="column-full d-flex justify-center">
            <p>Are you sure you want to delete this entry?</p>
          </div>
          <div class="column-full d-flex justify-between">
            <CancelButton onCloseModal={onCloseModal} />
            <ConfirmButton data={data} onDeleteEntry={onDeleteEntry} />
          </div>
        </div>
      </div>
    </article>
  );
}

function CancelButton({ onCloseModal }) {
  return (
    <button className="modal-button" id="cancelButton" onClick={onCloseModal}>
      Cancel
    </button>
  );
}

function ConfirmButton({ data, onDeleteEntry }) {
  return (
    <button
      className="modal-button red-background white-text"
      id="confirmButton"
      onClick={() => onDeleteEntry(data)}>
      Confirm
    </button>
  );
}
