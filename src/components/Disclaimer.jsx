import React from "react";

const Disclaimer = () => {
  return (
    <div
      id="disclaimer"
      className="modal fade"
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div className="modal-content bg-dark-2 text-light">
          <div className="modal-header">
            <h5 className="modal-title text-white">
              Copyright &amp; Disclaimer
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body p-4">
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </p>
            <ul className="lh-lg">
              <li>
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </li>
              <li>
                Quidam lisque persius interesset his et, Lisque persius
                interesset his et, in quot quidam persequeris vim, ad mea essent
                possim iriure.
              </li>
              <li>
                In quot quidam persequeris vim, ad mea essent possim iriure.
                Quidam lisque persius interesset his et.
              </li>
              <li>
                Quidam lisque persius interesset his et, Lisque persius
                interesset his et.
              </li>
              <li>
                Interesset his et, Lisque persius interesset his et, in quot
                quidam persequeris vim, ad mea essent possim iriure.
              </li>
              <li>
                Persius interesset his et, Lisque persius interesset his et, in
                quot quidam persequeris vim, ad mea essent possim iriure.
              </li>
              <li>
                Quot quidam persequeris vim Quidam lisque persius interesset his
                et, Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </li>
            </ul>
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <button type="button" className="btn btn-secondary me-2" data-bs-dismiss="modal">Refuse</button>
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Accept</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
