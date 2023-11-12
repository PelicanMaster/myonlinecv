import React from "react";
import classNames from "classnames";

import data from '../../../config/data.json';
import { MenuItem, buildTree } from "./utils";

type NavigationProps = {
  onItemClick?: (item: MenuItem) => void;
  className?: string;
};

const Navigation: React.FC<NavigationProps> = ({ onItemClick, className }) => (
  <nav className={classNames('p-2 dark:bg-neutral-800 dark:text-neutral-300', className)}>
    {buildTree(Object.values(data.navigation as unknown as Array<MenuItem>), 'ul', onItemClick)}
  </nav>
);

export default Navigation;