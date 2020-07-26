import React, { useContext } from 'react';

import { ALERT_SUCCESS, AlertContext } from './AlertContext';

import cx from 'classnames';

const Alert = ({ alert }) => {
  const classes = {
    alert_list__item: true,
    alert_list__item_success: alert.type === ALERT_SUCCESS,
  };
  return <div className={cx(classes)}>{alert.message}</div>;
};

const AlertList = () => {
  const { alerts } = useContext(AlertContext);

  return (
    <div className="alert_list">
      {alerts.map((alert) => (
        <Alert alert={alert} key={alert.id} />
      ))}
    </div>
  );
};

export default AlertList;
