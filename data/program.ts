import { Week } from '@/lib/types';

export const PROGRAM: Week[] = [
  {
    week: 1,
    totalKm: 12,
    sessions: [
      { type: 'A', name: 'Langtur ute', details: ['3,5 km', '6:30–7:00 /km', 'S1 · <155 bpm', 'Ute'] },
      { type: 'B', name: 'Intervaller', details: ['5 × 3 min', '9,5 km/t · 2% stigning', 'Hvile: 2 min gange', 'Toppe S4'] },
      { type: 'C', name: 'Moderat kontinuerlig', details: ['3 km', '5:30–6:00 /km', 'S2–3 · 157–176 bpm', 'Ute / mølla'] },
    ],
  },
  {
    week: 2,
    totalKm: 14,
    sessions: [
      { type: 'A', name: 'Langtur ute', details: ['4 km', '6:15–6:45 /km', 'S1 · <155 bpm', 'Ute'] },
      { type: 'B', name: 'Intervaller', details: ['6 × 3 min', '9,5 km/t · 2% stigning', 'Hvile: 2 min gange', 'Toppe S4'] },
      { type: 'C', name: 'Moderat kontinuerlig', details: ['3,5 km', '5:20–5:50 /km', 'S2–3 · 157–176 bpm', 'Ute / mølla'] },
    ],
  },
  {
    week: 3,
    totalKm: 16,
    sessions: [
      { type: 'A', name: 'Langtur ute', details: ['4,5 km', '6:00–6:30 /km', 'S1 · <155 bpm', 'Ute'] },
      { type: 'B', name: 'Intervaller', details: ['6 × 3 min', '10 km/t · 2% stigning', 'Hvile: 2 min gange', 'Toppe S4'] },
      { type: 'C', name: 'Moderat kontinuerlig', details: ['4 km', '5:15–5:45 /km', 'S2–3 · 157–176 bpm', 'Ute / mølla'] },
    ],
  },
  {
    week: 4,
    totalKm: 11,
    isRestWeek: true,
    sessions: [
      { type: 'A', name: 'Hvileuke – Langtur rolig', details: ['3 km', 'Rolig tempo', 'S1 · <145 bpm', 'Ute'] },
      { type: 'B', name: 'Hvileuke – Lett intervall', details: ['3 × 3 min lett', '9 km/t', 'Hvile: 2 min gange', 'Lett innsats'] },
      { type: 'C', name: 'Hvileuke – Rolig jogg', details: ['2,5 km', 'Rolig', 'Under 150 bpm', 'Ute / mølla'] },
    ],
  },
  {
    week: 5,
    totalKm: 18,
    sessions: [
      { type: 'A', name: 'Langtur ute', details: ['5 km', '5:50–6:20 /km', 'S1 · <155 bpm', 'Ute'] },
      { type: 'B', name: 'Intervaller', details: ['7 × 3 min', '10 km/t · 2% stigning', 'Hvile: 2 min gange', 'Toppe S4'] },
      { type: 'C', name: 'Moderat kontinuerlig', details: ['4,5 km', '5:10–5:40 /km', 'S2–3 · 157–176 bpm', 'Ute / mølla'] },
    ],
  },
  {
    week: 6,
    totalKm: 20,
    sessions: [
      { type: 'A', name: 'Langtur ute', details: ['5,5 km', '5:45–6:10 /km', 'S1 · <155 bpm', 'Ute'] },
      { type: 'B', name: 'Intervaller', details: ['7 × 3 min', '10,5 km/t · 2% stigning', 'Hvile: 2 min gange', 'Toppe S4'] },
      { type: 'C', name: 'Moderat kontinuerlig', details: ['5 km', '5:05–5:35 /km', 'S2–3 · 157–176 bpm', 'Ute / mølla'] },
    ],
  },
  {
    week: 7,
    totalKm: 22,
    sessions: [
      { type: 'A', name: 'Langtur ute', details: ['6 km', '5:40–6:05 /km', 'S1 · <155 bpm', 'Ute'] },
      { type: 'B', name: 'Intervaller', details: ['8 × 3 min', '10,5 km/t · 2% stigning', 'Hvile: 2 min gange', 'Toppe S4'] },
      { type: 'C', name: 'Moderat kontinuerlig', details: ['5,5 km', '5:00–5:30 /km', 'S2–3 · 157–176 bpm', 'Ute / mølla'] },
    ],
  },
  {
    week: 8,
    totalKm: 14,
    isRestWeek: true,
    sessions: [
      { type: 'A', name: 'Hvileuke – Langtur rolig', details: ['4 km', 'Rolig tempo', 'S1 · <145 bpm', 'Ute'] },
      { type: 'B', name: 'Hvileuke – Lett intervall', details: ['4 × 3 min lett', '9,5 km/t', 'Hvile: 2 min gange', 'Lett innsats'] },
      { type: 'C', name: 'Hvileuke – Rolig jogg', details: ['3 km', 'Rolig', 'Under 150 bpm', 'Ute / mølla'] },
    ],
  },
  {
    week: 9,
    totalKm: 24,
    sessions: [
      { type: 'A', name: 'Langtur ute', details: ['7 km', '5:35–6:00 /km', 'S1 · <155 bpm', 'Ute'] },
      { type: 'B', name: 'Intervaller', details: ['8 × 3 min', '11 km/t · 2% stigning', 'Hvile: 2 min gange', 'Toppe S4'] },
      { type: 'C', name: 'Moderat kontinuerlig', details: ['6 km', '4:55–5:25 /km', 'S2–3 · 157–176 bpm', 'Ute / mølla'] },
    ],
  },
  {
    week: 10,
    totalKm: 26,
    sessions: [
      { type: 'A', name: 'Langtur ute', details: ['7,5 km', '5:30–5:55 /km', 'S1 · <155 bpm', 'Ute'] },
      { type: 'B', name: 'Intervaller', details: ['9 × 3 min', '11 km/t · 2% stigning', 'Hvile: 2 min gange', 'Toppe S4'] },
      { type: 'C', name: 'Moderat kontinuerlig', details: ['6,5 km', '4:50–5:20 /km', 'S2–3 · 157–176 bpm', 'Ute / mølla'] },
    ],
  },
  {
    week: 11,
    totalKm: 28,
    sessions: [
      { type: 'A', name: 'Langtur ute', details: ['8 km', '5:25–5:50 /km', 'S1 · <155 bpm', 'Ute'] },
      { type: 'B', name: 'Intervaller', details: ['9 × 3 min', '11,5 km/t · 2% stigning', 'Hvile: 2 min gange', 'Toppe S4'] },
      { type: 'C', name: 'Moderat kontinuerlig', details: ['7 km', '4:45–5:15 /km', 'S2–3 · 157–176 bpm', 'Ute / mølla'] },
    ],
  },
  {
    week: 12,
    totalKm: 18,
    sessions: [
      { type: 'A', name: 'Avslutning – rolig langtur', details: ['5 km', 'Lett tempo', 'S1 · <150 bpm', 'Ute'] },
      { type: 'B', name: 'Avslutning – moderat intervall', details: ['5 × 3 min', '10,5 km/t', 'Hvile: 2 min gange', 'Ikke press'] },
      { type: 'C', name: 'Moderat kontinuerlig', details: ['4 km', 'Rolig', 'Under 155 bpm', 'Ute / mølla'] },
    ],
  },
];
