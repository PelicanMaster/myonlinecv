import React, { PropsWithChildren } from 'react';
import Markdown from 'react-markdown';

import CustomIcon, { CustomIconProps } from '../CustomIcon';

type ContentProps = {
  title?: string;
  content?: string;
  className?: string;
  description?: string;
  customIcon?: CustomIconProps['type'];
};

const Content: React.FC<PropsWithChildren<ContentProps>> =
  ({ title, description, content, customIcon }) => (
      <div className="text-neutral-300 w-full flex flex-col shadow-xl z-10 shadow-neutral-900">
          <div className="dark:bg-neutral-900 px-2 py-4 flex justify-between">
              <div>
                  <CustomIcon type={customIcon} className="h-6 w-6 inline mr-1" />
                  <span className="align-middle">{title}</span>
              </div>
              <div>
                  {description}
              </div>
          </div>
          <div className="grow py-2 px-4 dark:bg-neutral-700 text-justify">
              <Markdown
                  components={{
                      'h1': ({ children }) => <h1 className="text-2xl font-bold">{children}</h1>,
                      'a': ({ href, children }) => {
                          const target = href?.startsWith('#') ? undefined : '_blank';
                          return (<a href={href} target={target} className="underline text-blue-300">{children}</a>);
                      },
                      'p': ({ children }) => <p className="my-2">{children}</p>,
                  }}
              >{content}</Markdown>
          </div>
      </div>
  );


export default Content;