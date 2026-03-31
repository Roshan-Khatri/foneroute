import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Renders a Sanity string value safely.
 * @param value The value to render.
 * @returns The rendered string.
 */
export function renderSanityString(value: any): string {
  if (typeof value === 'string') {
    return value;
  }
  if (value && typeof value === 'object' && 'textValue' in value) {
    return String(value.textValue);
  }
  if (Array.isArray(value)) {
    // This is a basic fallback for Portable Text.
    // For rich rendering, you should use a Portable Text component.
    return value
      .map(block => {
        if (block._type === 'span' && block.text) {
          return block.text;
        }
        return '';
      })
      .join('');
  }
  return '';
}
