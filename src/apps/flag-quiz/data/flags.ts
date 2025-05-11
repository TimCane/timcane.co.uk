// Flag image utilities

/**
 * Get the URL for a country's flag image based on its country code
 * Using the flagcdn.com service which provides SVG flags
 * @param countryCode ISO 3166-1 alpha-2 country code
 * @returns URL to the flag image
 */
export const getFlagUrl = (countryCode: string): string => {
  return `https://flagcdn.com/w320/${countryCode.toLowerCase()}.png`;
};

/**
 * Get a larger version of the flag image
 * @param countryCode ISO 3166-1 alpha-2 country code
 * @returns URL to the larger flag image
 */
export const getLargeFlagUrl = (countryCode: string): string => {
  return `https://flagcdn.com/w640/${countryCode.toLowerCase()}.png`;
};

/**
 * Get a smaller version of the flag image (for thumbnails)
 * @param countryCode ISO 3166-1 alpha-2 country code
 * @returns URL to the smaller flag image
 */
export const getSmallFlagUrl = (countryCode: string): string => {
  return `https://flagcdn.com/w160/${countryCode.toLowerCase()}.png`;
};
