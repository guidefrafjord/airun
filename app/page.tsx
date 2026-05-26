'use client';

import { useState, useEffect } from 'react';
import { PROGRAM } from '@/data/program';
import { useProgress } from '@/lib/useProgress';
import { WeekCard } from '@/components/WeekCard';

export default function Home() {
  const { progress, isLoaded, toggleComplete, resetProgress } = useProgress();
  const [currentWeek, setCurrentWeek] = useState(0);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  useEffect(() => {
    if (!isLoaded) return;

    for (let i = 0; i < PROGRAM.length; i++) {
      const weekSessions = PROGRAM[i].sessions;
      const allSessionsCompleted = weekSessions.every(
        (session) => progress[`week-${i}-${session.type}`]?.completed
      );

      if (!allSessionsCompleted) {
        setCurrentWeek(i);
        return;
      }
    }

    setCurrentWeek(PROGRAM.length - 1);
  }, [isLoaded, progress]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">Laster...</div>
      </div>
    );
  }

  const totalSessions = PROGRAM.reduce((sum, week) => sum + week.sessions.length, 0);
  const completedSessions = Object.values(progress).filter((log) => log.completed).length;
  const completedWeeks = PROGRAM.filter((_, i) => {
    const weekSessions = PROGRAM[i].sessions;
    return weekSessions.every((session) => progress[`week-${i}-${session.type}`]?.completed);
  }).length;

  const percentComplete = Math.round((completedSessions / totalSessions) * 100);

  const handleReset = () => {
    resetProgress();
    setShowResetConfirm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Løpeprogram 2026</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl font-bold text-green-600">{percentComplete}%</div>
              <div className="text-gray-600 text-sm">Fullført</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl font-bold text-green-600">{completedWeeks}/{PROGRAM.length}</div>
              <div className="text-gray-600 text-sm">Uker</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl font-bold text-green-600">{completedSessions}/{totalSessions}</div>
              <div className="text-gray-600 text-sm">Økter</div>
            </div>
          </div>

          {showResetConfirm ? (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-red-900 font-medium mb-3">Vil du nullstille hele programmet?</p>
              <div className="flex gap-3">
                <button
                  onClick={handleReset}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Ja, nullstill
                </button>
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                >
                  Avbryt
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setShowResetConfirm(true)}
              className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
            >
              Nullstill program
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {PROGRAM.map((week, index) => (
            <WeekCard
              key={week.week}
              week={week}
              weekIndex={index}
              isCurrentWeek={index === currentWeek}
              isCompleted={PROGRAM[index].sessions.every(
                (session) => progress[`week-${index}-${session.type}`]?.completed
              )}
              getSessionStatus={(key) => progress[key]?.completed || false}
              onSessionToggle={toggleComplete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
