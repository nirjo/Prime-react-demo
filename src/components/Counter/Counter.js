import React, { useState, useRef } from 'react';

import { Card } from 'primereact/card';

const Counter = () => {
  return (
    <div className="Grid">
      <div className="col-4"></div>
      <React.Fragment>
        <Card className="bg-black-alpha-20 m-4"> Cards</Card>
      </React.Fragment>
    </div>
  );
};
export default Counter;
