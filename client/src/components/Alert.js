import React from "react";
import { useSelector } from "react-redux";
import { CheckCircle, AlertCircle } from "react-feather";

const Alert = () => {
  const alert = useSelector((state) => state.alert);

  const AlertSuccess = ({ message }) => (
    <div className="alert slide_alert">
      <div className="alert__success">
        <span>{message}</span>
        <CheckCircle style={{ strokeWidth: "1" }} />
      </div>
    </div>
  );

  const AlertError = ({ message }) => (
    <div className="alert slide_alert">
      <div className="alert__error">
        <span>{message}</span>
        <AlertCircle style={{ strokeWidth: "1" }} />
      </div>
    </div>
  );
  return (
    <>
      {alert.length > 0 &&
        alert.map((item) => (
          <div key={item.id}>
            {item.alertType === "success" ? (
              <AlertSuccess message={item.alertMessage} />
            ) : (
              <AlertError message={item.alertMessage} />
            )}
          </div>
        ))}
    </>
  );
};

export default Alert;
