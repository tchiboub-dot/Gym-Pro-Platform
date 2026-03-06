export type OverlayPreset = 'heroDark' | 'sectionDark' | 'pricingAbstract' | 'lightClean';

export const overlayPresets: Record<OverlayPreset, string> = {
  heroDark: 'linear-gradient(135deg, rgba(9, 11, 16, 0.85) 0%, rgba(15, 19, 26, 0.75) 100%)',
  sectionDark: 'linear-gradient(180deg, rgba(9, 11, 16, 0.70) 0%, rgba(21, 27, 36, 0.80) 100%)',
  pricingAbstract: 'linear-gradient(120deg, rgba(24, 194, 164, 0.05) 0%, rgba(9, 11, 16, 0.85) 100%)',
  lightClean: 'linear-gradient(180deg, rgba(255, 255, 255, 0.92) 0%, rgba(244, 247, 251, 0.88) 100%)',
};
