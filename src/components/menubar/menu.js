import React, { useState, useRef } from 'react';

import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';

const menu = () => {
  return (
    <div className="App">
      <Menubar
        className="bg-blue-600 p-3 text-3xl text-white"
        start={'Welcome Doctor '}
      />
    </div>
  );
};
export default menu;
