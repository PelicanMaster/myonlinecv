import React from 'react';

import data from '../config/data.json';
console.log(data);
import Content from './components/layout/Content';
import { MenuItem } from './components/layout/utils';
import Navigation from './components/layout/Navigation';
import { CustomIconProps } from './components/CustomIcon';

const findItemByHash = (hash: string, items: Array<MenuItem>) => {
    let child: MenuItem | undefined;

    if (hash) {
        items.find(item => {
            if ('children' in item) {
                child = findItemByHash(hash, item.children);
            } else if (item.hash === hash) {
                child = item;
            }

            return child;
        });
    }

    return child;
};

const getItem = () => {
    const hash = window.location.hash.replace('#', '');
    return findItemByHash(hash.replace('#', ''), data.navigation as Array<MenuItem>) ?? data.navigation[0].children[0];
};

const App = () => {
    const [item, setItem] = React.useState(getItem());

    const handleItemClick = (item: MenuItem) => {
        if (item.hash) {
            window.location.hash = item.hash;
        } else {
            window.location.hash = '';
        }

        setItem(item);
    };

    React.useLayoutEffect(() => {
        const callback = () => setItem(getItem());
        window.addEventListener('hashchange', callback);
        return () => window.removeEventListener('hashchange', callback);
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
};

export default App;