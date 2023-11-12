import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

import CustomIcon, { ICONS } from "../CustomIcon";

export type MenuItem = {
  title: string;
} & ({
  content?: string,
  description?: string,
  customIcon?: keyof typeof ICONS
} | { children: Array<MenuItem> })

export const buildTree = (
  data?: Array<MenuItem>,
  Wrapper: React.ElementType = React.Fragment,
  callback: (item: MenuItem) => void = null
) =>
  data?.map((item, index) => {
    if ('children' in item) {
      return (
        <Disclosure defaultOpen as={Wrapper} className="mt-2" key={index}>
          <Disclosure.Button className="p-2 w-full dark:bg-neutral-700 rounded-md">
            <div className="flex gap-2 items-center">
              <ChevronRightIcon className="ui-open:rotate-90 ui-not-open:rotate-0 w-4 m-1" />
              <p className="font-bold">{item.title}</p>
            </div>
          </Disclosure.Button>
          <Disclosure.Panel as="ul" className="ml-4 pl-2 border-l-2 dark:border-neutral-700">
            {buildTree(item.children, 'li', callback)}
          </Disclosure.Panel>
        </Disclosure>
      );
    }

    const handleClick = () => callback?.(item);

    return (
      <Wrapper
        key={index}
        onClick={handleClick}
        className="mt-2 p-2 text-sm flex gap-2 items-center rounded-md dark:hover:bg-neutral-900 cursor-pointer"
      >
        <CustomIcon type={item.customIcon} className="h-4 w-4 shrink-0" />
        <div>
          <p className="font-bold">{item.title}</p>
          <p className="italic dark:text-neutral-500">{item.description}</p>
        </div>
      </Wrapper>
    );
  }) ?? [];