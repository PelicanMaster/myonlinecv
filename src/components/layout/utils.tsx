import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export type MenuItem = {
  title: string;
} & ({ content?: string, description?: string } | { children: Array<MenuItem> })

export const buildTree = (data?: Array<MenuItem>, Wrapper: React.ElementType = React.Fragment) =>
  data?.map((item, index) => {
    if ('children' in item) {
      return (
        <Wrapper key={index}>
          <Disclosure>
            <Disclosure.Button className="py-2 w-full">
              <div className="flex gap-2 items-center">
                <ChevronRightIcon className="ui-open:rotate-90 w-4" />
                <p>{item.title}</p>
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500">
              <ul className="ml-2">
                {buildTree(item.children, 'li')}
              </ul>
            </Disclosure.Panel>
          </Disclosure>
        </Wrapper>
      );
    }

    return (
      <Wrapper key={index} className="mt-2 text-sm flex gap-2 items-start">
        <ChevronRightIcon className="w-4 m-1" />
        <div>
          <p>{item.title}</p>
          <p className="italic">{item.description}</p>
        </div>
      </Wrapper>
    );
  }) ?? [];