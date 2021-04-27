import React from  'react';

export const Loading = () => {
    return(
        //fa-pulse: to make it rotate, fa-3X: make is larger, fa-fw: fixed width
      <div className="col">
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary" />
          <p>Loading...</p>
      </div>  
    );
};
