declare module "react-horizontal-scrolling-menu" {
  import * as React from "react";

  export interface ScrollMenuProps {
    LeftArrow?: React.ReactNode;
    RightArrow?: React.ReactNode;
    onInit?: (api: any) => void;
    onUpdate?: (api: any) => void;
    options?: any;
    scrollContainerClassName?: string;
    wrapperClassName?: string;
    separatorClassName?: string;
    itemClassName?: string;
    children: React.ReactNode;
  }

  export const ScrollMenu: React.FC<ScrollMenuProps>;

  export function VisibilityContext(): any;
}
