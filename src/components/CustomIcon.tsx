import React from 'react';
import { IconType } from '@icons-pack/react-simple-icons/types';
import { SiBabel, SiCss3, SiHtml5, SiJavascript, SiNodedotjs, SiReact, SiRedux, SiWebpack } from '@icons-pack/react-simple-icons';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

export const ICONS = {
    babel: SiBabel,
    css: SiCss3,
    html: SiHtml5,
    javascript: SiJavascript,
    node: SiNodedotjs,
    react: SiReact,
    redux: SiRedux,
    webpack: SiWebpack
};

export type CustomIconProps = {
  type: keyof typeof ICONS;
} & React.ComponentPropsWithoutRef<IconType>;

const CustomIcon: React.FC<CustomIconProps> = ({ type, ...props }) => {
    const Icon = ICONS[type] ?? InformationCircleIcon;
    return <Icon {...props} />;
};

export default CustomIcon;