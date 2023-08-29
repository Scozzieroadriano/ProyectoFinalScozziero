import React from 'react';
import styles from './LoadingCircle.module.css'; // Archivo de estilos para el círculo de carga

const LoadingCircle = () => {
  return (
    <div className={`${styles.loadingCircle}`}>
      <div className={`${styles.circle}`}></div>
    </div>
  );
};

export default LoadingCircle;
