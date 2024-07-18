import styles from './LoadingIndicator.module.scss';
import React from 'react';
import classNames from 'classnames';

export default function LoadingIndicator(props) {
  const { isActive = false } = props; // defaultProps example
  const { className, children } = props;

  const cssClasses = classNames(className, {
    [styles.wrapper]: isActive,
  });

  return (
    <div className={cssClasses}>
      {isActive && (
        <div className={styles.loaderContainer}>
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      )}
      {children}
    </div>
  );
}
