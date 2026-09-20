import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function sanitizeUrl(url: string): string {
  try {
    const parsed = new URL(url);
    const allowedProtocols = ["https:", "mailto:"];
    if (!allowedProtocols.includes(parsed.protocol)) {
      return "#";
    }
    return parsed.toString();
  } catch {
    return "#";
  }
}

export function formatEmailForDisplay(email: string): string {
  return email.replace("@", " [at] ").replace(".", " [dot] ");
}
