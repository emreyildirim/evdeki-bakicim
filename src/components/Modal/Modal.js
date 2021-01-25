import ReactDOM from "react-dom";
import "./Modal.scss";
const Modal = ({ children }) => (
    ReactDOM.createPortal(
      <div className="modal_wrapper">
        {children}
      </div>,
      document.getElementById("root")
    )
  );
  export default Modal;