import React from 'react';
import { LoadingLogo } from './LoadingLogo';

interface LoadingScreenProps {
  isLoading: boolean;
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
      <LoadingLogo />
    </div>
  );
}