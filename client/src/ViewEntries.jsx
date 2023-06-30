export default function ViewEntries() {
  return (
    <div class="container" data-view="entries">
      <div class="row">
        <div class="column-full d-flex justify-between align-center">
          <h1>Entries</h1>
          <NewEntryButton />
        </div>
      </div>
      <div class="row">
        <div class="column-full">
          <ul class="entry-ul" id="entryUl"></ul>
        </div>
      </div>
    </div>
  );
}

function NewEntryButton() {
  return (
    <h3>
      <a id="formLink" class="white-text form-link" href="#">
        NEW
      </a>
    </h3>
  );
}

function EntriesList({ data }) {
  // <li data-entry-id="">
  //   <div class="row">
  //     <div class="column-half">
  //       <img class="input-b-radius form-image" src="" alt="">
  //     </div>
  //     <div class="column-half">
  //        <div class="row">
  //          <div class="column-full d-flex justify-between">
  //            <h3>This is test Title</h3>
  //             <i class='fa-solid fa-pencil'></i>
  //           </div>
  //        </div>
  //       <p></p>
  //     </div>
  //   </div>
  // </li>
}
