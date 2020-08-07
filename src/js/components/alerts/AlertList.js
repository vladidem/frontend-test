import React, { useContext } from 'react';

import { useSelector } from 'react-redux';

import cx from 'classnames';

import { ALERT_TYPE_SUCCESS } from '../../redux/alerts/constants';

const Alert = ({ alert }) => {
  const classes = {
    'alert': true,
    'alert--success': alert.type === ALERT_TYPE_SUCCESS,
  };
  return <div className={cx(classes)}>{alert.message}</div>;
};

const AlertList = () => {
  const alerts = useSelector((state) => state.alerts);

  return alerts.length ? (
    <div className="alert-list">
      {alerts.map((alert) => (
        <Alert alert={alert} key={alert.id} />
      ))}
    </div>
  ) : (
    <></>
  );
};

export default AlertList;
