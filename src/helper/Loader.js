import React from 'react';

/**
 * Renders the preloader
 */
const Loader = () => {

  return (
    <div className="preloader">
      <div className="status">
        <div className="spinner-border avatar-sm text-primary m-2" role="status" />
      </div>
    </div>
  );
}

export default Loader;