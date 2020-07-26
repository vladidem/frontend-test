import React, { createContext, useState } from 'react';

import shortid from 'shortid';

const AlertContext = createContext({});

const ALERT_SUCCESS = 'success';

const AlertProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);

  const deleteAlert = (id) =>
    setAlerts(alerts.filter((alert) => alert.id !== id));

  const alertSuccess = (message, timeToLive = 5000) => {
    const alert = {
      message,
      type: ALERT_SUCCESS,
      id: shortid.generate(),
    };
    setAlerts([...alerts, alert]);

    if (timeToLive > 0) {
      setTimeout(() => deleteAlert(alert.id), timeToLive);
    }
  };

  return (
    <AlertContext.Provider value={{ alerts, deleteAlert, alertSuccess }}>
      {children}
    </AlertContext.Provider>
  );
};

export { AlertProvider, AlertContext, ALERT_SUCCESS };
