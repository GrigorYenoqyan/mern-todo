import React from 'react';
import { usePanelContext } from './PanelContext';

export default function First() {
  const a = usePanelContext();
  return <div>First</div>;
}
