import React, { useState } from 'react';

import { TabMenu } from 'primereact/tabmenu';

const demoTab = () => {
  const items = [
    { label: 'Home', icon: 'pi pi-fw pi-home' },
    { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
    { label: 'Documentation', icon: 'pi pi-fw pi-file' },
    { label: 'Settings', icon: 'pi pi-fw pi-cog' },
  ];
  return (
    <div className="App">
      <TabMenu model={items} />
    </div>
  );
};
export default demoTab;
