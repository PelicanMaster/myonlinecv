import React from "react";
import classNames from "classnames";

import data from '../../../config/data.json';
import { MenuItem, buildTree } from "./utils";

type NavigationProps = {
  className: string;
};




const Navigation: React.FC<NavigationProps> = ({ className }) => (
  <nav className={classNames('h-full p-2 dark:bg-neutral-800 dark:text-neutral-400', className)}>
    {buildTree(Object.values(data.navigation as unknown as Array<MenuItem>), 'ul')}
  </nav>
);

export default Navigation;