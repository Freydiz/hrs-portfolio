/**
 * Resolves a CSS variable to its actual value, or returns the fallback.
 * If the input is not a CSS variable reference (e.g. a color string), it returns the input directly.
 */
export const getCssVariable = (variableName: string, fallback: string): string => {
  if (!variableName.startsWith('--')) return variableName;

  const computedStyles = getComputedStyle(document.documentElement);
  return computedStyles.getPropertyValue(variableName).trim() || fallback;
};
