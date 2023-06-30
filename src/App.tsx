import { useState } from "react";
import Alert from "./components/Alert";
// import InputField from "./components/InputField";
// import ListGroup from "./components/ListGroup";

import { ContactUs } from "./components/ContactFrom";

// Use React Dev Tools for Chrome

// let  useState(0)

function App() {
  // const [buttonTaps, setButtonTaps] = useState(0);
  const [showSentAlert, setShowSentAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  return (
    <>
      <div style={{ height: "50px" }}></div>
      <div style={{ maxWidth: "700px" }} className="container-sm">
        {/* <InputField />
      <ListGroup /> */}
        {/* <MyButton
          text="Add ${buttonTaps}"
          color="primary"
          onClick={() => setButtonTaps(buttonTaps + 1)}
        />
        <MyButton
          text="Show alert"
          color="danger"
          onClick={() => setShowAlert(true)}
        /> */}
        <h1 style={{ height: "70px", color: "blue" }}>Web App Demo</h1>
        <ContactUs onSubmit={handleSubmit} onInvalid={handleSubmitError} />
        <div style={{ height: "20px" }}></div>
        {showSentAlert && (
          <Alert onClose={() => setShowSentAlert(false)}>E-mail sent!</Alert>
        )}
        {showErrorAlert && (
          <Alert color="danger" onClose={() => setShowErrorAlert(false)}>
            Did not sent email...
          </Alert>
        )}
      </div>
    </>
  );
  function handleSubmit() {
    console.log("Email sent");
    setShowErrorAlert(false);
    setShowSentAlert(true);
  }
  function handleSubmitError() {
    console.log("error sending email");
    setShowErrorAlert(true);
    setShowSentAlert(false);
  }
}

// const sendEm = () => {
//   if (window.Email) {
//     window.Email.send({
//       Host: "smtp.elasticemail.com",
//       Username: "test@wejeo.dk",
//       // Password: "pyvhor-hamrIr-2wemfi",
//       Password: "23CA84D14F5DA2026086CACBC840F1760D99",
//       To: "jacob.welin@wejeo.dk",
//       From: "test@wejeo.dk",
//       Subject: "This is the subject",
//       Body: "And this is the body",
//     }).then((message) => alert(message));
//   }
// };

export default App;
