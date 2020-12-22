import React, { Fragment } from "react";
import { useAlert } from "react-alert";

const Alert = ({flag, title}) => {
  const alert = useAlert();

  switch(flag) {
  	case "success":
  		alert.success(title)
  		break
  	case "failed":
  		alert.error(title)
  		break
  	default:
  		break
  }
  
  return (
    <Fragment>
      
    </Fragment>
  );
};

export default Alert;
