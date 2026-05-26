'use client';

import { Session } from '@/lib/types';

interface SessionRowProps {
  session: Session;
  weekIndex: number;
  completed: boolean;
  onToggle: () => void;
}

const typeColors = {
  A: 'border-l-green-600 bg-green-50',
  B: 'border-l-blue-600 bg-blue-50',
  C: 'border-l-orange-600 bg-orange-50',
  D: 'border-l-gray-600 bg-gray-50',
};

const typeLabelColors = {
  A: 'text-green-700 bg-green-100',
  B: 'text-blue-700 bg-blue-100',
  C: 'text-orange-700 bg-orange-100',
  D: 'text-gray-700 bg-gray-100',
};

export function SessionRow({ session, weekIndex, completed, onToggle }: SessionRowProps) {
  return (
    <div className={`border-l-4 p-3 rounded flex items-start gap-3 ${typeColors[session.type]}`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggle}
        className="mt-1 w-5 h-5 cursor-pointer"
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className={`px-2 py-0.5 text-xs font-semibold rounded ${typeLabelColors[session.type]}`}>
            Løp {session.type}
          </span>
          {completed && <span className="text-green-600 text-sm">✓</span>}
        </div>
        <p className={`font-medium text-sm ${completed ? 'line-through opacity-60' : ''}`}>
          {session.name}
        </p>
        <p className="text-xs text-gray-600 mt-1">{session.details.join(' · ')}</p>
      </div>
    </div>
  );
}
