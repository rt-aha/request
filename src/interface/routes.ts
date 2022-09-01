import React from "react";

export interface Iroutes {
  path: string,
  viewCopmonent: React.FC,
  key: string,
  meta?: {
    isNav: boolean,
    label: string,
    icon: any,
  }
};
