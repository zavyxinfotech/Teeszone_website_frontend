import React from 'react';
import { ManufacturingProcess as BaseProcess } from '@/components/sections/ManufacturingProcess';

export const ManufacturingProcess: React.FC = () => {
  return (
    <div id="process-section" className="scroll-mt-20">
      <BaseProcess theme="light" />
    </div>
  );
};
