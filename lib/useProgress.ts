'use client';

import { useState, useEffect } from 'react';
import { Progress, SessionLog } from '@/lib/types';

const STORAGE_KEY = 'runapp-progress';

export function useProgress() {
  const [progress, setProgress] = useState<Progress>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setProgress(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to load progress:', e);
      }
    }
    setIsLoaded(true);
  }, []);

  const updateSession = (key: string, log: SessionLog) => {
    const updated = { ...progress, [key]: log };
    setProgress(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const getSession = (key: string): SessionLog => {
    return (
      progress[key] || {
        completed: false,
      }
    );
  };

  const toggleComplete = (key: string) => {
    const current = getSession(key);
    updateSession(key, {
      ...current,
      completed: !current.completed,
      date: new Date().toISOString().split('T')[0],
    });
  };

  const resetProgress = () => {
    setProgress({});
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    progress,
    isLoaded,
    updateSession,
    getSession,
    toggleComplete,
    resetProgress,
  };
}
