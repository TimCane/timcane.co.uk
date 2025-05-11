export interface Country {
  name: string;
  code: string;
  continent: Continent;
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
  { name: 'Algeria', code: 'DZ', continent: Continent.Africa },
  { name: 'Angola', code: 'AO', continent: Continent.Africa },
  { name: 'Benin', code: 'BJ', continent: Continent.Africa },
  { name: 'Botswana', code: 'BW', continent: Continent.Africa },
  { name: 'Burkina Faso', code: 'BF', continent: Continent.Africa },
  { name: 'Burundi', code: 'BI', continent: Continent.Africa },
  { name: 'Cabo Verde', code: 'CV', continent: Continent.Africa },
  { name: 'Cameroon', code: 'CM', continent: Continent.Africa },
  { name: 'Central African Republic', code: 'CF', continent: Continent.Africa },
  { name: 'Chad', code: 'TD', continent: Continent.Africa },
  { name: 'Comoros', code: 'KM', continent: Continent.Africa },
  { name: 'Congo', code: 'CG', continent: Continent.Africa },
  { name: 'Côte d\'Ivoire', code: 'CI', continent: Continent.Africa },
  { name: 'Democratic Republic of the Congo', code: 'CD', continent: Continent.Africa },
  { name: 'Djibouti', code: 'DJ', continent: Continent.Africa },
  { name: 'Egypt', code: 'EG', continent: Continent.Africa },
  { name: 'Equatorial Guinea', code: 'GQ', continent: Continent.Africa },
  { name: 'Eritrea', code: 'ER', continent: Continent.Africa },
  { name: 'Eswatini', code: 'SZ', continent: Continent.Africa },
  { name: 'Ethiopia', code: 'ET', continent: Continent.Africa },
  { name: 'Gabon', code: 'GA', continent: Continent.Africa },
  { name: 'Gambia', code: 'GM', continent: Continent.Africa },
  { name: 'Ghana', code: 'GH', continent: Continent.Africa },
  { name: 'Guinea', code: 'GN', continent: Continent.Africa },
  { name: 'Guinea-Bissau', code: 'GW', continent: Continent.Africa },
  { name: 'Kenya', code: 'KE', continent: Continent.Africa },
  { name: 'Lesotho', code: 'LS', continent: Continent.Africa },
  { name: 'Liberia', code: 'LR', continent: Continent.Africa },
  { name: 'Libya', code: 'LY', continent: Continent.Africa },
  { name: 'Madagascar', code: 'MG', continent: Continent.Africa },
  { name: 'Malawi', code: 'MW', continent: Continent.Africa },
  { name: 'Mali', code: 'ML', continent: Continent.Africa },
  { name: 'Mauritania', code: 'MR', continent: Continent.Africa },
  { name: 'Mauritius', code: 'MU', continent: Continent.Africa },
  { name: 'Morocco', code: 'MA', continent: Continent.Africa },
  { name: 'Mozambique', code: 'MZ', continent: Continent.Africa },
  { name: 'Namibia', code: 'NA', continent: Continent.Africa },
  { name: 'Niger', code: 'NE', continent: Continent.Africa },
  { name: 'Nigeria', code: 'NG', continent: Continent.Africa },
  { name: 'Rwanda', code: 'RW', continent: Continent.Africa },
  { name: 'Sao Tome and Principe', code: 'ST', continent: Continent.Africa },
  { name: 'Senegal', code: 'SN', continent: Continent.Africa },
  { name: 'Seychelles', code: 'SC', continent: Continent.Africa },
  { name: 'Sierra Leone', code: 'SL', continent: Continent.Africa },
  { name: 'Somalia', code: 'SO', continent: Continent.Africa },
  { name: 'South Africa', code: 'ZA', continent: Continent.Africa },
  { name: 'South Sudan', code: 'SS', continent: Continent.Africa },
  { name: 'Sudan', code: 'SD', continent: Continent.Africa },
  { name: 'Tanzania', code: 'TZ', continent: Continent.Africa },
  { name: 'Togo', code: 'TG', continent: Continent.Africa },
  { name: 'Tunisia', code: 'TN', continent: Continent.Africa },
  { name: 'Uganda', code: 'UG', continent: Continent.Africa },
  { name: 'Zambia', code: 'ZM', continent: Continent.Africa },
  { name: 'Zimbabwe', code: 'ZW', continent: Continent.Africa },
  
  // Asia
  { name: 'Afghanistan', code: 'AF', continent: Continent.Asia },
  { name: 'Bahrain', code: 'BH', continent: Continent.Asia },
  { name: 'Bangladesh', code: 'BD', continent: Continent.Asia },
  { name: 'Bhutan', code: 'BT', continent: Continent.Asia },
  { name: 'Brunei', code: 'BN', continent: Continent.Asia },
  { name: 'Cambodia', code: 'KH', continent: Continent.Asia },
  { name: 'China', code: 'CN', continent: Continent.Asia },
  { name: 'Cyprus', code: 'CY', continent: Continent.Asia },
  { name: 'India', code: 'IN', continent: Continent.Asia },
  { name: 'Indonesia', code: 'ID', continent: Continent.Asia },
  { name: 'Iran', code: 'IR', continent: Continent.Asia },
  { name: 'Iraq', code: 'IQ', continent: Continent.Asia },
  { name: 'Israel', code: 'IL', continent: Continent.Asia },
  { name: 'Japan', code: 'JP', continent: Continent.Asia },
  { name: 'Jordan', code: 'JO', continent: Continent.Asia },
  { name: 'Kazakhstan', code: 'KZ', continent: Continent.Asia },
  { name: 'Kuwait', code: 'KW', continent: Continent.Asia },
  { name: 'Kyrgyzstan', code: 'KG', continent: Continent.Asia },
  { name: 'Laos', code: 'LA', continent: Continent.Asia },
  { name: 'Lebanon', code: 'LB', continent: Continent.Asia },
  { name: 'Malaysia', code: 'MY', continent: Continent.Asia },
  { name: 'Maldives', code: 'MV', continent: Continent.Asia },
  { name: 'Mongolia', code: 'MN', continent: Continent.Asia },
  { name: 'Myanmar', code: 'MM', continent: Continent.Asia },
  { name: 'Nepal', code: 'NP', continent: Continent.Asia },
  { name: 'North Korea', code: 'KP', continent: Continent.Asia },
  { name: 'Oman', code: 'OM', continent: Continent.Asia },
  { name: 'Pakistan', code: 'PK', continent: Continent.Asia },
  { name: 'Palestine', code: 'PS', continent: Continent.Asia },
  { name: 'Philippines', code: 'PH', continent: Continent.Asia },
  { name: 'Qatar', code: 'QA', continent: Continent.Asia },
  { name: 'Saudi Arabia', code: 'SA', continent: Continent.Asia },
  { name: 'Singapore', code: 'SG', continent: Continent.Asia },
  { name: 'South Korea', code: 'KR', continent: Continent.Asia },
  { name: 'Sri Lanka', code: 'LK', continent: Continent.Asia },
  { name: 'Syria', code: 'SY', continent: Continent.Asia },
  { name: 'Taiwan', code: 'TW', continent: Continent.Asia },
  { name: 'Tajikistan', code: 'TJ', continent: Continent.Asia },
  { name: 'Thailand', code: 'TH', continent: Continent.Asia },
  { name: 'Timor-Leste', code: 'TL', continent: Continent.Asia },
  { name: 'Turkey', code: 'TR', continent: Continent.Asia },
  { name: 'Turkmenistan', code: 'TM', continent: Continent.Asia },
  { name: 'United Arab Emirates', code: 'AE', continent: Continent.Asia },
  { name: 'Uzbekistan', code: 'UZ', continent: Continent.Asia },
  { name: 'Vietnam', code: 'VN', continent: Continent.Asia },
  { name: 'Yemen', code: 'YE', continent: Continent.Asia },
  
  // Europe
  { name: 'Albania', code: 'AL', continent: Continent.Europe },
  { name: 'Andorra', code: 'AD', continent: Continent.Europe },
  { name: 'Armenia', code: 'AM', continent: Continent.Europe },
  { name: 'Austria', code: 'AT', continent: Continent.Europe },
  { name: 'Azerbaijan', code: 'AZ', continent: Continent.Europe },
  { name: 'Belarus', code: 'BY', continent: Continent.Europe },
  { name: 'Belgium', code: 'BE', continent: Continent.Europe },
  { name: 'Bosnia and Herzegovina', code: 'BA', continent: Continent.Europe },
  { name: 'Bulgaria', code: 'BG', continent: Continent.Europe },
  { name: 'Croatia', code: 'HR', continent: Continent.Europe },
  { name: 'Czech Republic', code: 'CZ', continent: Continent.Europe },
  { name: 'Denmark', code: 'DK', continent: Continent.Europe },
  { name: 'Estonia', code: 'EE', continent: Continent.Europe },
  { name: 'Finland', code: 'FI', continent: Continent.Europe },
  { name: 'France', code: 'FR', continent: Continent.Europe },
  { name: 'Georgia', code: 'GE', continent: Continent.Europe },
  { name: 'Germany', code: 'DE', continent: Continent.Europe },
  { name: 'Greece', code: 'GR', continent: Continent.Europe },
  { name: 'Hungary', code: 'HU', continent: Continent.Europe },
  { name: 'Iceland', code: 'IS', continent: Continent.Europe },
  { name: 'Ireland', code: 'IE', continent: Continent.Europe },
  { name: 'Italy', code: 'IT', continent: Continent.Europe },
  { name: 'Latvia', code: 'LV', continent: Continent.Europe },
  { name: 'Liechtenstein', code: 'LI', continent: Continent.Europe },
  { name: 'Lithuania', code: 'LT', continent: Continent.Europe },
  { name: 'Luxembourg', code: 'LU', continent: Continent.Europe },
  { name: 'Malta', code: 'MT', continent: Continent.Europe },
  { name: 'Moldova', code: 'MD', continent: Continent.Europe },
  { name: 'Monaco', code: 'MC', continent: Continent.Europe },
  { name: 'Montenegro', code: 'ME', continent: Continent.Europe },
  { name: 'Netherlands', code: 'NL', continent: Continent.Europe },
  { name: 'North Macedonia', code: 'MK', continent: Continent.Europe },
  { name: 'Norway', code: 'NO', continent: Continent.Europe },
  { name: 'Poland', code: 'PL', continent: Continent.Europe },
  { name: 'Portugal', code: 'PT', continent: Continent.Europe },
  { name: 'Romania', code: 'RO', continent: Continent.Europe },
  { name: 'Russia', code: 'RU', continent: Continent.Europe },
  { name: 'San Marino', code: 'SM', continent: Continent.Europe },
  { name: 'Serbia', code: 'RS', continent: Continent.Europe },
  { name: 'Slovakia', code: 'SK', continent: Continent.Europe },
  { name: 'Slovenia', code: 'SI', continent: Continent.Europe },
  { name: 'Spain', code: 'ES', continent: Continent.Europe },
  { name: 'Sweden', code: 'SE', continent: Continent.Europe },
  { name: 'Switzerland', code: 'CH', continent: Continent.Europe },
  { name: 'Ukraine', code: 'UA', continent: Continent.Europe },
  { name: 'United Kingdom', code: 'GB', continent: Continent.Europe },
  { name: 'Vatican City', code: 'VA', continent: Continent.Europe },
  
  // North America
  { name: 'Antigua and Barbuda', code: 'AG', continent: Continent.NorthAmerica },
  { name: 'Bahamas', code: 'BS', continent: Continent.NorthAmerica },
  { name: 'Barbados', code: 'BB', continent: Continent.NorthAmerica },
  { name: 'Belize', code: 'BZ', continent: Continent.NorthAmerica },
  { name: 'Canada', code: 'CA', continent: Continent.NorthAmerica },
  { name: 'Costa Rica', code: 'CR', continent: Continent.NorthAmerica },
  { name: 'Cuba', code: 'CU', continent: Continent.NorthAmerica },
  { name: 'Dominica', code: 'DM', continent: Continent.NorthAmerica },
  { name: 'Dominican Republic', code: 'DO', continent: Continent.NorthAmerica },
  { name: 'El Salvador', code: 'SV', continent: Continent.NorthAmerica },
  { name: 'Grenada', code: 'GD', continent: Continent.NorthAmerica },
  { name: 'Guatemala', code: 'GT', continent: Continent.NorthAmerica },
  { name: 'Haiti', code: 'HT', continent: Continent.NorthAmerica },
  { name: 'Honduras', code: 'HN', continent: Continent.NorthAmerica },
  { name: 'Jamaica', code: 'JM', continent: Continent.NorthAmerica },
  { name: 'Mexico', code: 'MX', continent: Continent.NorthAmerica },
  { name: 'Nicaragua', code: 'NI', continent: Continent.NorthAmerica },
  { name: 'Panama', code: 'PA', continent: Continent.NorthAmerica },
  { name: 'Saint Kitts and Nevis', code: 'KN', continent: Continent.NorthAmerica },
  { name: 'Saint Lucia', code: 'LC', continent: Continent.NorthAmerica },
  { name: 'Saint Vincent and the Grenadines', code: 'VC', continent: Continent.NorthAmerica },
  { name: 'Trinidad and Tobago', code: 'TT', continent: Continent.NorthAmerica },
  { name: 'United States', code: 'US', continent: Continent.NorthAmerica },
  
  // South America
  { name: 'Argentina', code: 'AR', continent: Continent.SouthAmerica },
  { name: 'Bolivia', code: 'BO', continent: Continent.SouthAmerica },
  { name: 'Brazil', code: 'BR', continent: Continent.SouthAmerica },
  { name: 'Chile', code: 'CL', continent: Continent.SouthAmerica },
  { name: 'Colombia', code: 'CO', continent: Continent.SouthAmerica },
  { name: 'Ecuador', code: 'EC', continent: Continent.SouthAmerica },
  { name: 'Guyana', code: 'GY', continent: Continent.SouthAmerica },
  { name: 'Paraguay', code: 'PY', continent: Continent.SouthAmerica },
  { name: 'Peru', code: 'PE', continent: Continent.SouthAmerica },
  { name: 'Suriname', code: 'SR', continent: Continent.SouthAmerica },
  { name: 'Uruguay', code: 'UY', continent: Continent.SouthAmerica },
  { name: 'Venezuela', code: 'VE', continent: Continent.SouthAmerica },
  
  // Oceania
  { name: 'Australia', code: 'AU', continent: Continent.Oceania },
  { name: 'Fiji', code: 'FJ', continent: Continent.Oceania },
  { name: 'Kiribati', code: 'KI', continent: Continent.Oceania },
  { name: 'Marshall Islands', code: 'MH', continent: Continent.Oceania },
  { name: 'Micronesia', code: 'FM', continent: Continent.Oceania },
  { name: 'Nauru', code: 'NR', continent: Continent.Oceania },
  { name: 'New Zealand', code: 'NZ', continent: Continent.Oceania },
  { name: 'Palau', code: 'PW', continent: Continent.Oceania },
  { name: 'Papua New Guinea', code: 'PG', continent: Continent.Oceania },
  { name: 'Samoa', code: 'WS', continent: Continent.Oceania },
  { name: 'Solomon Islands', code: 'SB', continent: Continent.Oceania },
  { name: 'Tonga', code: 'TO', continent: Continent.Oceania },
  { name: 'Tuvalu', code: 'TV', continent: Continent.Oceania },
  { name: 'Vanuatu', code: 'VU', continent: Continent.Oceania }
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
