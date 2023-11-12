import React from 'react';

import data from '../config/data.json';

import Content from './components/layout/Content';
import { MenuItem } from './components/layout/utils';
import Navigation from './components/layout/Navigation';
import { CustomIconProps } from './components/CustomIcon';

const App = () => {
  const [item, setItem] = React.useState<MenuItem>(data.navigation[0].children[0]);

  const handleItemClick = (item: MenuItem) => setItem(item);

  return (
    <main className="dark min-h-screen w-screen flex">
      <Navigation className="flex-shrink-0 w-72" onItemClick={handleItemClick} />
      <Content
        className="grow"
        title={item?.title}
        description={(item as unknown as { description: string })?.description}
        customIcon={(item as unknown as { customIcon: CustomIconProps['type'] }).customIcon}
        content={(item as unknown as { content: string })?.content}
      />
    </main>
  );
}

export default App;