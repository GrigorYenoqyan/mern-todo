import {
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import * as React from 'react';

// type PanelContent = string | null;

// interface PanelContextType {
//   content: PanelContent;
//   setContent: Dispatch<SetStateAction<PanelContent>>;
// }

const PanelStore = () => {
  const [content, setContent] = useState();

  return {
    content,
    setContent,
  };
};

const PanelContext = createContext(null);

export const usePanelContext = () => {
  const store = useContext(PanelContext);

  if (!store) {
    throw new Error(
      'Cannot use `usePanelContext` outside of a PanelContextProvider'
    );
  }

  return store;
};

// eslint-disable-next-line react/prop-types
export const PanelContextProvider = ({ children }) => {
  return (
    <PanelContext.Provider value={PanelStore()}>
      {children}
    </PanelContext.Provider>
  );
};
