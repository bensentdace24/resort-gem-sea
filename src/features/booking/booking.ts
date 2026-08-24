const dayMs = 86_400_000;

function parseDate(value: string) {
  const [year, month, day] = value.split('-').map(Number);
  return new Date(year, month - 1, day);
}

export function validateStay(checkIn: string, checkOut: string): string | null {
  if (!checkIn || !checkOut) return 'Choose both check-in and check-out dates.';
  if (parseDate(checkOut) <= parseDate(checkIn)) return 'Check-out must be after check-in.';
  return null;
}

export function formatStaySummary(checkIn: string, checkOut: string, guests: number) {
  const nights = Math.round((parseDate(checkOut).getTime() - parseDate(checkIn).getTime()) / dayMs);
  const nightLabel = nights === 1 ? 'night' : 'nights';
  const guestLabel = guests === 1 ? 'guest' : 'guests';
  return `${nights} ${nightLabel} · ${guests} ${guestLabel}. Preview only — contact the resort to confirm.`;
}
