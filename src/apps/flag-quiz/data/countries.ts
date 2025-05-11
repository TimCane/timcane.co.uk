export interface Country {
  name: string;
  code: string;
  continent: Continent;
  similarFlags?: string[]; // Array of country codes with similar flags
}

export enum Continent {
  Africa = 'Africa',
  Asia = 'Asia',
  Europe = 'Europe',
  NorthAmerica = 'North America',
  SouthAmerica = 'South America',
  Oceania = 'Oceania'
}

export const countries: Country[] = [
  // Africa
  { name: 'Algeria', code: 'DZ', continent: Continent.Africa, similarFlags: ['PS', 'SD'] },
  { name: 'Angola', code: 'AO', continent: Continent.Africa, similarFlags: ['DE', 'BE'] },
  { name: 'Benin', code: 'BJ', continent: Continent.Africa, similarFlags: ['ML'] },
  { name: 'Botswana', code: 'BW', continent: Continent.Africa, similarFlags: ['EE'] },
  { name: 'Burkina Faso', code: 'BF', continent: Continent.Africa, similarFlags: ['SN'] },
  { name: 'Burundi', code: 'BI', continent: Continent.Africa, similarFlags: ['MW'] },
  { name: 'Cabo Verde', code: 'CV', continent: Continent.Africa, similarFlags: ['EU'] },
  { name: 'Cameroon', code: 'CM', continent: Continent.Africa, similarFlags: ['SN', 'ML'] },
  { name: 'Central African Republic', code: 'CF', continent: Continent.Africa },
  { name: 'Chad', code: 'TD', continent: Continent.Africa, similarFlags: ['RO', 'MD'] },
  { name: 'Comoros', code: 'KM', continent: Continent.Africa, similarFlags: ['BR'] },
  { name: 'Congo', code: 'CG', continent: Continent.Africa, similarFlags: ['PT'] },
  { name: 'Côte d\'Ivoire', code: 'CI', continent: Continent.Africa, similarFlags: ['IE'] },
  { name: 'Democratic Republic of the Congo', code: 'CD', continent: Continent.Africa, similarFlags: ['ZM'] },
  { name: 'Djibouti', code: 'DJ', continent: Continent.Africa, similarFlags: ['ET'] },
  { name: 'Egypt', code: 'EG', continent: Continent.Africa, similarFlags: ['YE', 'SY', 'IQ'] },
  { name: 'Equatorial Guinea', code: 'GQ', continent: Continent.Africa, similarFlags: ['TZ'] },
  { name: 'Eritrea', code: 'ER', continent: Continent.Africa, similarFlags: ['ET'] },
  { name: 'Eswatini', code: 'SZ', continent: Continent.Africa, similarFlags: ['TH'] },
  { name: 'Ethiopia', code: 'ET', continent: Continent.Africa, similarFlags: ['BO', 'GH'] },
  { name: 'Gabon', code: 'GA', continent: Continent.Africa, similarFlags: ['SL'] },
  { name: 'Gambia', code: 'GM', continent: Continent.Africa, similarFlags: ['SN'] },
  { name: 'Ghana', code: 'GH', continent: Continent.Africa, similarFlags: ['ET', 'BO'] },
  { name: 'Guinea', code: 'GN', continent: Continent.Africa, similarFlags: ['ML', 'SN'] },
  { name: 'Guinea-Bissau', code: 'GW', continent: Continent.Africa, similarFlags: ['GN'] },
  { name: 'Kenya', code: 'KE', continent: Continent.Africa, similarFlags: ['SS'] },
  { name: 'Lesotho', code: 'LS', continent: Continent.Africa, similarFlags: ['ZA'] },
  { name: 'Liberia', code: 'LR', continent: Continent.Africa, similarFlags: ['US', 'MY'] },
  { name: 'Libya', code: 'LY', continent: Continent.Africa, similarFlags: ['BD'] },
  { name: 'Madagascar', code: 'MG', continent: Continent.Africa, similarFlags: ['ID', 'PL'] },
  { name: 'Malawi', code: 'MW', continent: Continent.Africa, similarFlags: ['BI'] },
  { name: 'Mali', code: 'ML', continent: Continent.Africa, similarFlags: ['GN', 'SN'] },
  { name: 'Mauritania', code: 'MR', continent: Continent.Africa, similarFlags: ['BN'] },
  { name: 'Mauritius', code: 'MU', continent: Continent.Africa, similarFlags: ['RW'] },
  { name: 'Morocco', code: 'MA', continent: Continent.Africa, similarFlags: ['VN'] },
  { name: 'Mozambique', code: 'MZ', continent: Continent.Africa, similarFlags: ['ZW'] },
  { name: 'Namibia', code: 'NA', continent: Continent.Africa, similarFlags: ['BW'] },
  { name: 'Niger', code: 'NE', continent: Continent.Africa, similarFlags: ['IN', 'CI'] },
  { name: 'Nigeria', code: 'NG', continent: Continent.Africa, similarFlags: ['IE', 'CI'] },
  { name: 'Rwanda', code: 'RW', continent: Continent.Africa, similarFlags: ['MU'] },
  { name: 'Sao Tome and Principe', code: 'ST', continent: Continent.Africa, similarFlags: ['CV'] },
  { name: 'Senegal', code: 'SN', continent: Continent.Africa, similarFlags: ['ML', 'GN'] },
  { name: 'Seychelles', code: 'SC', continent: Continent.Africa, similarFlags: ['NA'] },
  { name: 'Sierra Leone', code: 'SL', continent: Continent.Africa, similarFlags: ['GA'] },
  { name: 'Somalia', code: 'SO', continent: Continent.Africa, similarFlags: ['VN'] },
  { name: 'South Africa', code: 'ZA', continent: Continent.Africa, similarFlags: ['LS', 'NL'] },
  { name: 'South Sudan', code: 'SS', continent: Continent.Africa, similarFlags: ['KE', 'PS'] },
  { name: 'Sudan', code: 'SD', continent: Continent.Africa, similarFlags: ['PS', 'DZ'] },
  { name: 'Tanzania', code: 'TZ', continent: Continent.Africa, similarFlags: ['GQ'] },
  { name: 'Togo', code: 'TG', continent: Continent.Africa, similarFlags: ['GH'] },
  { name: 'Tunisia', code: 'TN', continent: Continent.Africa, similarFlags: ['TR'] },
  { name: 'Uganda', code: 'UG', continent: Continent.Africa, similarFlags: ['ZW'] },
  { name: 'Zambia', code: 'ZM', continent: Continent.Africa, similarFlags: ['CD'] },
  { name: 'Zimbabwe', code: 'ZW', continent: Continent.Africa, similarFlags: ['MZ', 'UG'] },
  
  // Asia
  { name: 'Afghanistan', code: 'AF', continent: Continent.Asia, similarFlags: ['IR', 'PK'] },
  { name: 'Bahrain', code: 'BH', continent: Continent.Asia, similarFlags: ['QA'] },
  { name: 'Bangladesh', code: 'BD', continent: Continent.Asia, similarFlags: ['JP', 'LY'] },
  { name: 'Bhutan', code: 'BT', continent: Continent.Asia, similarFlags: ['NP'] },
  { name: 'Brunei', code: 'BN', continent: Continent.Asia, similarFlags: ['MR'] },
  { name: 'Cambodia', code: 'KH', continent: Continent.Asia, similarFlags: ['TH'] },
  { name: 'China', code: 'CN', continent: Continent.Asia, similarFlags: ['VN', 'MA'] },
  { name: 'Cyprus', code: 'CY', continent: Continent.Asia, similarFlags: ['TR'] },
  { name: 'India', code: 'IN', continent: Continent.Asia, similarFlags: ['NE', 'IE'] },
  { name: 'Indonesia', code: 'ID', continent: Continent.Asia, similarFlags: ['PL', 'MC'] },
  { name: 'Iran', code: 'IR', continent: Continent.Asia, similarFlags: ['AF', 'TJ'] },
  { name: 'Iraq', code: 'IQ', continent: Continent.Asia, similarFlags: ['EG', 'SY', 'YE'] },
  { name: 'Israel', code: 'IL', continent: Continent.Asia, similarFlags: ['AR', 'UY'] },
  { name: 'Japan', code: 'JP', continent: Continent.Asia, similarFlags: ['BD', 'PW'] },
  { name: 'Jordan', code: 'JO', continent: Continent.Asia, similarFlags: ['PS', 'SD'] },
  { name: 'Kazakhstan', code: 'KZ', continent: Continent.Asia, similarFlags: ['KG'] },
  { name: 'Kuwait', code: 'KW', continent: Continent.Asia, similarFlags: ['JO', 'PS'] },
  { name: 'Kyrgyzstan', code: 'KG', continent: Continent.Asia, similarFlags: ['KZ'] },
  { name: 'Laos', code: 'LA', continent: Continent.Asia, similarFlags: ['TH', 'KH'] },
  { name: 'Lebanon', code: 'LB', continent: Continent.Asia, similarFlags: ['AT', 'CA'] },
  { name: 'Malaysia', code: 'MY', continent: Continent.Asia, similarFlags: ['US', 'LR'] },
  { name: 'Maldives', code: 'MV', continent: Continent.Asia, similarFlags: ['TR'] },
  { name: 'Mongolia', code: 'MN', continent: Continent.Asia, similarFlags: ['LT'] },
  { name: 'Myanmar', code: 'MM', continent: Continent.Asia, similarFlags: ['LT'] },
  { name: 'Nepal', code: 'NP', continent: Continent.Asia, similarFlags: ['BT'] },
  { name: 'North Korea', code: 'KP', continent: Continent.Asia, similarFlags: ['CU'] },
  { name: 'Oman', code: 'OM', continent: Continent.Asia, similarFlags: ['BH', 'QA'] },
  { name: 'Pakistan', code: 'PK', continent: Continent.Asia, similarFlags: ['AF', 'IR'] },
  { name: 'Palestine', code: 'PS', continent: Continent.Asia, similarFlags: ['JO', 'SD', 'DZ'] },
  { name: 'Philippines', code: 'PH', continent: Continent.Asia, similarFlags: ['CZ', 'CL'] },
  { name: 'Qatar', code: 'QA', continent: Continent.Asia, similarFlags: ['BH'] },
  { name: 'Saudi Arabia', code: 'SA', continent: Continent.Asia, similarFlags: ['PK'] },
  { name: 'Singapore', code: 'SG', continent: Continent.Asia, similarFlags: ['ID', 'PL'] },
  { name: 'South Korea', code: 'KR', continent: Continent.Asia, similarFlags: ['TH'] },
  { name: 'Sri Lanka', code: 'LK', continent: Continent.Asia, similarFlags: ['BD'] },
  { name: 'Syria', code: 'SY', continent: Continent.Asia, similarFlags: ['EG', 'IQ', 'YE'] },
  { name: 'Taiwan', code: 'TW', continent: Continent.Asia, similarFlags: ['SM'] },
  { name: 'Tajikistan', code: 'TJ', continent: Continent.Asia, similarFlags: ['IR', 'HU'] },
  { name: 'Thailand', code: 'TH', continent: Continent.Asia, similarFlags: ['CR', 'KH'] },
  { name: 'Timor-Leste', code: 'TL', continent: Continent.Asia, similarFlags: ['CU'] },
  { name: 'Turkey', code: 'TR', continent: Continent.Asia, similarFlags: ['TN', 'MV'] },
  { name: 'Turkmenistan', code: 'TM', continent: Continent.Asia, similarFlags: ['PK'] },
  { name: 'United Arab Emirates', code: 'AE', continent: Continent.Asia, similarFlags: ['PS', 'KW'] },
  { name: 'Uzbekistan', code: 'UZ', continent: Continent.Asia, similarFlags: ['TJ'] },
  { name: 'Vietnam', code: 'VN', continent: Continent.Asia, similarFlags: ['CN', 'MA'] },
  { name: 'Yemen', code: 'YE', continent: Continent.Asia, similarFlags: ['EG', 'SY', 'IQ'] },
  
  // Europe
  { name: 'Albania', code: 'AL', continent: Continent.Europe, similarFlags: ['ME', 'MK'] },
  { name: 'Andorra', code: 'AD', continent: Continent.Europe, similarFlags: ['MD', 'RO'] },
  { name: 'Armenia', code: 'AM', continent: Continent.Europe, similarFlags: ['BG', 'RU'] },
  { name: 'Austria', code: 'AT', continent: Continent.Europe, similarFlags: ['LV', 'LB'] },
  { name: 'Azerbaijan', code: 'AZ', continent: Continent.Europe, similarFlags: ['TR', 'PK'] },
  { name: 'Belarus', code: 'BY', continent: Continent.Europe, similarFlags: ['BG', 'HU'] },
  { name: 'Belgium', code: 'BE', continent: Continent.Europe, similarFlags: ['DE', 'AO'] },
  { name: 'Bosnia and Herzegovina', code: 'BA', continent: Continent.Europe, similarFlags: ['VA'] },
  { name: 'Bulgaria', code: 'BG', continent: Continent.Europe, similarFlags: ['HU', 'BY'] },
  { name: 'Croatia', code: 'HR', continent: Continent.Europe, similarFlags: ['NL', 'LU'] },
  { name: 'Czech Republic', code: 'CZ', continent: Continent.Europe, similarFlags: ['PH', 'CL'] },
  { name: 'Denmark', code: 'DK', continent: Continent.Europe, similarFlags: ['NO', 'SE', 'IS', 'FI'] },
  { name: 'Estonia', code: 'EE', continent: Continent.Europe, similarFlags: ['BW'] },
  { name: 'Finland', code: 'FI', continent: Continent.Europe, similarFlags: ['SE', 'NO', 'IS'] },
  { name: 'France', code: 'FR', continent: Continent.Europe, similarFlags: ['NL', 'RU', 'LU'] },
  { name: 'Georgia', code: 'GE', continent: Continent.Europe, similarFlags: ['CH', 'MT'] },
  { name: 'Germany', code: 'DE', continent: Continent.Europe, similarFlags: ['BE', 'AO'] },
  { name: 'Greece', code: 'GR', continent: Continent.Europe, similarFlags: ['UY', 'AR'] },
  { name: 'Hungary', code: 'HU', continent: Continent.Europe, similarFlags: ['BG', 'IT'] },
  { name: 'Iceland', code: 'IS', continent: Continent.Europe, similarFlags: ['NO', 'DK', 'FI'] },
  { name: 'Ireland', code: 'IE', continent: Continent.Europe, similarFlags: ['IT', 'CI', 'NG'] },
  { name: 'Italy', code: 'IT', continent: Continent.Europe, similarFlags: ['IE', 'MX'] },
  { name: 'Latvia', code: 'LV', continent: Continent.Europe, similarFlags: ['AT', 'LB'] },
  { name: 'Liechtenstein', code: 'LI', continent: Continent.Europe, similarFlags: ['HT'] },
  { name: 'Lithuania', code: 'LT', continent: Continent.Europe, similarFlags: ['CO', 'EC'] },
  { name: 'Luxembourg', code: 'LU', continent: Continent.Europe, similarFlags: ['NL', 'FR'] },
  { name: 'Malta', code: 'MT', continent: Continent.Europe, similarFlags: ['PL', 'MC'] },
  { name: 'Moldova', code: 'MD', continent: Continent.Europe, similarFlags: ['RO', 'AD'] },
  { name: 'Monaco', code: 'MC', continent: Continent.Europe, similarFlags: ['ID', 'PL'] },
  { name: 'Montenegro', code: 'ME', continent: Continent.Europe, similarFlags: ['AL', 'MK'] },
  { name: 'Netherlands', code: 'NL', continent: Continent.Europe, similarFlags: ['FR', 'LU', 'RU'] },
  { name: 'North Macedonia', code: 'MK', continent: Continent.Europe, similarFlags: ['AL', 'ME'] },
  { name: 'Norway', code: 'NO', continent: Continent.Europe, similarFlags: ['IS', 'DK', 'SE', 'FI'] },
  { name: 'Poland', code: 'PL', continent: Continent.Europe, similarFlags: ['ID', 'MC'] },
  { name: 'Portugal', code: 'PT', continent: Continent.Europe, similarFlags: ['CG', 'BO'] },
  { name: 'Romania', code: 'RO', continent: Continent.Europe, similarFlags: ['TD', 'MD'] },
  { name: 'Russia', code: 'RU', continent: Continent.Europe, similarFlags: ['NL', 'FR', 'SI', 'SK'] },
  { name: 'San Marino', code: 'SM', continent: Continent.Europe, similarFlags: ['PA', 'TW'] },
  { name: 'Serbia', code: 'RS', continent: Continent.Europe, similarFlags: ['SK', 'SI', 'RU'] },
  { name: 'Slovakia', code: 'SK', continent: Continent.Europe, similarFlags: ['SI', 'RS', 'RU'] },
  { name: 'Slovenia', code: 'SI', continent: Continent.Europe, similarFlags: ['SK', 'RS', 'RU'] },
  { name: 'Spain', code: 'ES', continent: Continent.Europe, similarFlags: ['AL', 'DE'] },
  { name: 'Sweden', code: 'SE', continent: Continent.Europe, similarFlags: ['DK', 'NO', 'FI', 'IS'] },
  { name: 'Switzerland', code: 'CH', continent: Continent.Europe, similarFlags: ['DK', 'NO'] },
  { name: 'Ukraine', code: 'UA', continent: Continent.Europe, similarFlags: ['SE', 'CO'] },
  { name: 'United Kingdom', code: 'GB', continent: Continent.Europe, similarFlags: ['AU', 'NZ', 'FJ'] },
  { name: 'Vatican City', code: 'VA', continent: Continent.Europe, similarFlags: ['BA', 'MT'] },
  
  // North America
  { name: 'Antigua and Barbuda', code: 'AG', continent: Continent.NorthAmerica, similarFlags: ['MK'] },
  { name: 'Bahamas', code: 'BS', continent: Continent.NorthAmerica, similarFlags: ['KI'] },
  { name: 'Barbados', code: 'BB', continent: Continent.NorthAmerica, similarFlags: ['UA'] },
  { name: 'Belize', code: 'BZ', continent: Continent.NorthAmerica, similarFlags: ['GT'] },
  { name: 'Canada', code: 'CA', continent: Continent.NorthAmerica, similarFlags: ['PE', 'LB'] },
  { name: 'Costa Rica', code: 'CR', continent: Continent.NorthAmerica, similarFlags: ['TH', 'KR'] },
  { name: 'Cuba', code: 'CU', continent: Continent.NorthAmerica, similarFlags: ['PR', 'KP'] },
  { name: 'Dominica', code: 'DM', continent: Continent.NorthAmerica, similarFlags: ['BR'] },
  { name: 'Dominican Republic', code: 'DO', continent: Continent.NorthAmerica, similarFlags: ['CZ', 'PH'] },
  { name: 'El Salvador', code: 'SV', continent: Continent.NorthAmerica, similarFlags: ['NI', 'AR'] },
  { name: 'Grenada', code: 'GD', continent: Continent.NorthAmerica, similarFlags: ['BD'] },
  { name: 'Guatemala', code: 'GT', continent: Continent.NorthAmerica, similarFlags: ['NI', 'HN'] },
  { name: 'Haiti', code: 'HT', continent: Continent.NorthAmerica, similarFlags: ['LI'] },
  { name: 'Honduras', code: 'HN', continent: Continent.NorthAmerica, similarFlags: ['NI', 'SV'] },
  { name: 'Jamaica', code: 'JM', continent: Continent.NorthAmerica, similarFlags: ['SN'] },
  { name: 'Mexico', code: 'MX', continent: Continent.NorthAmerica, similarFlags: ['IT', 'IE'] },
  { name: 'Nicaragua', code: 'NI', continent: Continent.NorthAmerica, similarFlags: ['HN', 'SV'] },
  { name: 'Panama', code: 'PA', continent: Continent.NorthAmerica, similarFlags: ['CU', 'SM'] },
  { name: 'Saint Kitts and Nevis', code: 'KN', continent: Continent.NorthAmerica, similarFlags: ['JM'] },
  { name: 'Saint Lucia', code: 'LC', continent: Continent.NorthAmerica, similarFlags: ['AG'] },
  { name: 'Saint Vincent and the Grenadines', code: 'VC', continent: Continent.NorthAmerica, similarFlags: ['MX'] },
  { name: 'Trinidad and Tobago', code: 'TT', continent: Continent.NorthAmerica, similarFlags: ['TO'] },
  { name: 'United States', code: 'US', continent: Continent.NorthAmerica, similarFlags: ['LR', 'MY'] },
  
  // South America
  { name: 'Argentina', code: 'AR', continent: Continent.SouthAmerica, similarFlags: ['UY', 'SV', 'IL'] },
  { name: 'Bolivia', code: 'BO', continent: Continent.SouthAmerica, similarFlags: ['GH', 'ET'] },
  { name: 'Brazil', code: 'BR', continent: Continent.SouthAmerica, similarFlags: ['KM', 'DM'] },
  { name: 'Chile', code: 'CL', continent: Continent.SouthAmerica, similarFlags: ['CZ', 'PH'] },
  { name: 'Colombia', code: 'CO', continent: Continent.SouthAmerica, similarFlags: ['EC', 'VE'] },
  { name: 'Ecuador', code: 'EC', continent: Continent.SouthAmerica, similarFlags: ['CO', 'VE'] },
  { name: 'Guyana', code: 'GY', continent: Continent.SouthAmerica, similarFlags: ['ZW'] },
  { name: 'Paraguay', code: 'PY', continent: Continent.SouthAmerica, similarFlags: ['NL'] },
  { name: 'Peru', code: 'PE', continent: Continent.SouthAmerica, similarFlags: ['CA', 'PL'] },
  { name: 'Suriname', code: 'SR', continent: Continent.SouthAmerica, similarFlags: ['GH'] },
  { name: 'Uruguay', code: 'UY', continent: Continent.SouthAmerica, similarFlags: ['AR', 'GR'] },
  { name: 'Venezuela', code: 'VE', continent: Continent.SouthAmerica, similarFlags: ['CO', 'EC'] },
  
  // Oceania
  { name: 'Australia', code: 'AU', continent: Continent.Oceania, similarFlags: ['NZ', 'GB', 'FJ'] },
  { name: 'Fiji', code: 'FJ', continent: Continent.Oceania, similarFlags: ['AU', 'NZ', 'GB'] },
  { name: 'Kiribati', code: 'KI', continent: Continent.Oceania, similarFlags: ['BS'] },
  { name: 'Marshall Islands', code: 'MH', continent: Continent.Oceania, similarFlags: ['US'] },
  { name: 'Micronesia', code: 'FM', continent: Continent.Oceania, similarFlags: ['KI'] },
  { name: 'Nauru', code: 'NR', continent: Continent.Oceania, similarFlags: ['MH'] },
  { name: 'New Zealand', code: 'NZ', continent: Continent.Oceania, similarFlags: ['AU', 'GB', 'FJ'] },
  { name: 'Palau', code: 'PW', continent: Continent.Oceania, similarFlags: ['JP', 'BD'] },
  { name: 'Papua New Guinea', code: 'PG', continent: Continent.Oceania, similarFlags: ['DE'] },
  { name: 'Samoa', code: 'WS', continent: Continent.Oceania, similarFlags: ['TO'] },
  { name: 'Solomon Islands', code: 'SB', continent: Continent.Oceania, similarFlags: ['JM'] },
  { name: 'Tonga', code: 'TO', continent: Continent.Oceania, similarFlags: ['CH', 'TT'] },
  { name: 'Tuvalu', code: 'TV', continent: Continent.Oceania, similarFlags: ['FJ', 'AU'] },
  { name: 'Vanuatu', code: 'VU', continent: Continent.Oceania, similarFlags: ['SB'] }
];

// Helper function to get countries by continent
export const getCountriesByContinent = (continent: Continent): Country[] => {
  return countries.filter(country => country.continent === continent);
};

// Helper function to get all continents
export const getContinents = (): Continent[] => {
  return Object.values(Continent);
};

// Helper function to get a random country
export const getRandomCountry = (): Country => {
  return countries[Math.floor(Math.random() * countries.length)];
};

// Helper function to get a random country from a specific continent
export const getRandomCountryFromContinent = (continent: Continent): Country => {
  const continentCountries = getCountriesByContinent(continent);
  return continentCountries[Math.floor(Math.random() * continentCountries.length)];
};

// Helper function to get a random set of countries
export const getRandomCountries = (count: number): Country[] => {
  const shuffled = [...countries].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Helper function to get countries for multiple continents
export const getCountriesForContinents = (continents: Continent[]): Country[] => {
  return countries.filter(country => continents.includes(country.continent));
};

// Helper function to get countries with similar flags to a given country
export const getCountriesWithSimilarFlags = (countryCode: string, availableCountries: Country[]): Country[] => {
  // Find the country with the given code
  const country = countries.find(c => c.code === countryCode);
  
  if (!country || !country.similarFlags || country.similarFlags.length === 0) {
    return [];
  }
  
  // Get countries with similar flags that are in the available countries list
  return availableCountries.filter(c => 
    country.similarFlags?.includes(c.code) && c.code !== countryCode
  );
};

// Helper function to include similar flags in quiz options to make it harder
export const getSimilarFlagOptions = (
  correctAnswer: Country, 
  availableCountries: Country[], 
  count: number, 
  difficulty: 'easy' | 'medium' | 'hard'
): Country[] => {
  // Chance of including similar flags based on difficulty
  const similarFlagChance = {
    easy: 0.2,   // 20% chance on easy
    medium: 0.5, // 50% chance on medium
    hard: 0.8    // 80% chance on hard
  };
  
  // Determine if we should include similar flags based on difficulty
  const shouldIncludeSimilarFlags = Math.random() < similarFlagChance[difficulty] || difficulty === 'hard';
  
  if (!shouldIncludeSimilarFlags || !correctAnswer.similarFlags || correctAnswer.similarFlags.length === 0) {
    // If not using similar flags, just return random countries
    return availableCountries
      .filter(c => c.code !== correctAnswer.code)
      .sort(() => 0.5 - Math.random())
      .slice(0, count);
  }
  
  // Get countries with similar flags
  const similarFlagCountries = getCountriesWithSimilarFlags(correctAnswer.code, availableCountries);
  
  // If we don't have enough similar flags, add some random countries
  if (similarFlagCountries.length < count) {
    const remainingCount = count - similarFlagCountries.length;
    const otherCountries = availableCountries
      .filter(c => 
        c.code !== correctAnswer.code && 
        !similarFlagCountries.some(sc => sc.code === c.code)
      )
      .sort(() => 0.5 - Math.random())
      .slice(0, remainingCount);
    
    return [...similarFlagCountries, ...otherCountries];
  }
  
  // If we have more similar flags than needed, take a random subset
  return similarFlagCountries
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
};
