import React from 'react';
import Lottie from 'lottie-react';
import Loading from '../assets/Loading.json'; // sesuaikan path

const LoadingLottie = () => {
  return (
    <div style={{ width: 400, margin: '0 auto' }}>
      <Lottie animationData={Loading} loop={true} />
    </div>
  );
};

export default LoadingLottie;
