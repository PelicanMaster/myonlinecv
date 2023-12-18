import React from 'react';

import data from '../config/data.json';
console.log(data);
import Content from './components/layout/Content';
import { MenuItem } from './components/layout/utils';
import Navigation from './components/layout/Navigation';
import { CustomIconProps } from './components/CustomIcon';

const findItemByHash = (hash: string) => {
  let child: MenuItem | undefined;

  if (hash) {
    data.navigation.find(({ children }) => {
      child = children.find(item => 'hash' in item ? item.hash === hash : false) as MenuItem;
      return child;
    });
  }

  return child;
}

const getItem = () => {
  const { hash } = window.location;
  return findItemByHash(hash.replace('#', '')) ?? data.navigation[0].children[0];
};

const App = () => {
  const [item, setItem] = React.useState(getItem());

  const handleItemClick = (item: MenuItem) => {
    window.location.hash = item.hash;
    setItem(item);
  }

  React.useLayoutEffect(() => {
    const callback = () => setItem(getItem());
    window.addEventListener('hashchange', callback);
    () => window.removeEventListener('hashchange', callback);
  }, []);

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