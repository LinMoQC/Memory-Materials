import React, { createContext, useContext } from "react";
import {  Component, MaterialConfig } from "../materials/interface";

export interface MaterialDropContextType {
  addComponent: (component: Component, parentId?: string) => void;
  deleteComponent: (componentId: string) => void;
  getComponentById: (id: string, components: Component[]) => Component | null;
  components: Component[];
  componentConfig: { [key: string]: MaterialConfig }
}

const MaterialDropContext = createContext<MaterialDropContextType | null>(null);

export const useMaterialDropContext = () => {
  const context = useContext(MaterialDropContext);
  if (!context) {
    throw new Error("useMaterialDropContext must be used within a MaterialDropProvider");
  }
  return context;
};

export const MaterialDropProvider: React.FC<{ value: MaterialDropContextType; children: React.ReactNode }> = ({ value, children }) => {
  return <MaterialDropContext.Provider value={value}>{children}</MaterialDropContext.Provider>;
};
