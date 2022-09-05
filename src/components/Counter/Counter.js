import React, { useState, useRef } from 'react';
import { Button } from 'primereact/button';

import { Card } from 'primereact/card';

const Counter = () => {
  const header = <img alt="Card" src="images/usercard.png" />;
  const footer = (
    <span>
      <Button
        label="Save"
        icon="pi pi-check"
        style={{ marginRight: '.25em' }}
      />
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="p-button-secondary"
      />
    </span>
  );
  return (
    <div className="Grid">
      <div className="col-4"></div>
      <React.Fragment>
        <Card>
          <Card
            className="bg-black-alpha-20 m-4"
            footer={footer}
            header={header}
          >
            CARDS
          </Card>
        </Card>
      </React.Fragment>
    </div>
  );
};
export default Counter;
