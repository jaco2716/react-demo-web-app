import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

interface Prop {
  onSubmit: () => void;
  onInvalid: () => void;
}

export const ContactUs = ({ onSubmit, onInvalid }: Prop) => {
  const form = useRef<HTMLFormElement>(null);
  const [showLoading, setShowLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    if (showLoading) return;

    setShowLoading(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u0lylhq",
        "template_f1r9tr5",
        e.currentTarget,
        "qPEZyLDYXCio6hWuu"
      )
      .then(
        (result) => {
          console.log(result.text);
          onSubmit();
          setShowLoading(false);
        },
        (error) => {
          console.log(error.text);
          onInvalid();
          setShowLoading(false);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      // onSubmit={test}
      onInvalid={onInvalid}
    >
      {/* <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" /> */}
      <div className="row align-items-start">
        <div className="col">
          <div className="mb-3">
            <label className="form-label">Navn</label>
            <input
              type="text"
              name="user_name"
              className="form-control"
              required
              aria-describedby="emailHelp"
            />
          </div>
        </div>
        <div className="col">
          <div className="mb-3">
            <label className="form-label">E-mail</label>
            <input
              type="email"
              name="user_email"
              className="form-control"
              aria-describedby="emailHelp"
              required
            />
            <div className="form-text">
              Indtast e-mail adressen der skal sendes til. <br />
              Brug kun din egen.
            </div>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Besked</label>
        <input name="message" className="form-control" required />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          name="terms_check"
        />
        <label className="form-check-label">Accepter nogle betingelser?</label>
      </div>
      <div className="d-grid gap-2">
        {!showLoading && (
          <button type="submit" className="btn btn-primary">
            <span>Send</span>
          </button>
        )}

        {showLoading && (
          <button type="submit" className="btn btn-secondary" disabled>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span> Loading...</span>
          </button>
        )}
      </div>
    </form>
  );
};
