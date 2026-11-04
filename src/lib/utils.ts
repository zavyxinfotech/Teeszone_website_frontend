import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phone: string) {
  return phone.replace(/(\d{2})(\d{5})(\d{5})/, '+$1 $2 $3');
}
