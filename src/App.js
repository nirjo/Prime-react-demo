import React, { useState, useRef } from 'react';
import Menubar from './components/menubar/menu';
import Counter from './components/Counter/Counter';

import logo from './logo.svg';
import doctor from './doctor.svg';
import './style.css';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

import DemoTab from './components/Tabs/demoTab';

const App = () => {
  const items = [
    { label: 'Home', icon: 'pi pi-fw pi-home' },
    { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
    { label: 'Documentation', icon: 'pi pi-fw pi-file' },
    { label: 'Settings', icon: 'pi pi-fw pi-cog' },
  ];
  const [activeIndex, setActiveIndex] = useState(3);

  const [text, setText] = useState('');
  const tostRef = useRef();
  const onButtonClick = () => {
    if (text)
      tostRef.current.show({
        severity: 'info',
        summary: 'SUCCESS',
        detail: text,
      });
    else {
      tostRef.current.show({
        severity: 'error',
        summary: 'ERROR',
        detail: text,
      });
    }
  };
  return (
    <div className="App">
      <div className="card">
        <img src={doctor} className="App-logo" alt="logo" />
        <h1>Doctor Faraway</h1>
        <DemoTab />
      </div>
      <Menubar />
      <Counter />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <Toast ref={tostRef} />
        <span className="p-float-label p-input-icon-right">
          <InputText
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="pi pi-check"
          />
          <label htmlFor="righticon">Name</label>
        </span>
        <br />
        <Button
          type="button"
          label="SUBMIT"
          className="pi pi-check"
          onClick={onButtonClick}
        ></Button>
      </header>
    </div>
  );
};
export default App;
