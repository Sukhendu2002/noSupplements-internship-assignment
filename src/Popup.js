import { Button, Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import React from "react";
import "./App.css";

function Popup(props) {
  const { name, email, phone, website, children } = props;
  return (
    <Dialog open={props.openPopup} maxWidth="md">
      <DialogTitle>
        <div className="popup-title">
          Form
          <Button onClick={props.closePopup}>X</Button>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}

export default Popup;
