import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function BackButton() {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        className="button"
        size="sm"
        variant="outline-danger"
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
    </div>
  );
}

export default BackButton;
