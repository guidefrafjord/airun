'use client';

import { Week } from '@/lib/types';
import { SessionRow } from './SessionRow';

interface WeekCardProps {
  week: Week;
  weekIndex: number;
  isCurrentWeek: boolean;
  isCompleted: boolean;
  getSessionStatus: (key: string) => boolean;
  onSessionToggle: (key: string) => void;
}

export function WeekCard({
  week,
  weekIndex,
  isCurrentWeek,
  isCompleted,
  getSessionStatus,
  onSessionToggle,
}: WeekCardProps) {
  const borderClass = isCurrentWeek
    ? 'border-green-400 shadow-lg shadow-green-200'
    : isCompleted
      ? 'border-gray-200 opacity-60'
      : 'border-gray-200';

  const headerBg = isCurrentWeek ? 'bg-green-50' : 'bg-gray-50';

  return (
    <div className={`border-2 rounded-lg overflow-hidden bg-white ${borderClass}`}>
      <div className={`${headerBg} px-4 py-3 border-b`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-800">Uke {week.week}</span>
            {week.isRestWeek && (
              <span className="px-2 py-0.5 text-xs font-semibold text-green-700 bg-green-100 rounded">
                Hvile
              </span>
            )}
            {isCurrentWeek && (
              <span className="px-2 py-0.5 text-xs font-semibold text-green-700 bg-green-100 rounded">
                Nå
              </span>
            )}
            {isCompleted && (
              <span className="text-green-600 text-lg">✓</span>
            )}
          </div>
          <span className="text-sm text-gray-600">~{week.totalKm} km</span>
        </div>
      </div>

      <div className="divide-y">
        {week.sessions.map((session) => (
          <div key={session.type} className="p-3">
            <SessionRow
              session={session}
              weekIndex={weekIndex}
              completed={getSessionStatus(`week-${weekIndex}-${session.type}`)}
              onToggle={() => onSessionToggle(`week-${weekIndex}-${session.type}`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
