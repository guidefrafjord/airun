export interface Session {
  type: 'A' | 'B' | 'C' | 'D';
  name: string;
  details: string[];
  optional?: boolean;
}

export interface Week {
  week: number;
  sessions: Session[];
  totalKm: number;
  isRestWeek?: boolean;
}

export interface SessionLog {
  completed: boolean;
  date?: string;
  duration?: string;
  pace?: string;
  heartRate?: number;
  notes?: string;
}

export interface Progress {
  [key: string]: SessionLog;
}
