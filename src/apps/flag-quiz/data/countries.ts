export interface Country {
  name: string;
  code: string;
  continent: Continent;
  similarFlags?: string[]; // Array of country codes with similar flags
  colors?: string[]; // Array of dominant colors in the flag
  familiarity?: number; // Familiarity score from 0 to 1, with 1 being most familiar
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
  { name: 'Algeria', code: 'DZ', continent: Continent.Africa, similarFlags: ['PS', 'SD'], colors: ['green', 'white', 'red'], familiarity: 0.6 },
  { name: 'Angola', code: 'AO', continent: Continent.Africa, similarFlags: ['DE', 'BE'], colors: ['red', 'black', 'yellow'], familiarity: 0.5 },
  { name: 'Benin', code: 'BJ', continent: Continent.Africa, similarFlags: ['GN', 'ML'], colors: ['green', 'yellow', 'red'], familiarity: 0.4 },
  { name: 'Botswana', code: 'BW', continent: Continent.Africa, similarFlags: ['EE'], colors: ['blue', 'white', 'black'], familiarity: 0.4 },
  { name: 'Burkina Faso', code: 'BF', continent: Continent.Africa, similarFlags: ['GH'], colors: ['red', 'green', 'yellow'], familiarity: 0.4 },
  { name: 'Burundi', code: 'BI', continent: Continent.Africa, similarFlags: ['MW'], colors: ['red', 'white', 'green'], familiarity: 0.3 },
  { name: 'Cabo Verde', code: 'CV', continent: Continent.Africa, similarFlags: ['EU'], colors: ['blue', 'white', 'red'], familiarity: 0.3 },
  { name: 'Cameroon', code: 'CM', continent: Continent.Africa, similarFlags: ['SN', 'ML'], colors: ['green', 'red', 'yellow'], familiarity: 0.4 },
  { name: 'Central African Republic', code: 'CF', continent: Continent.Africa, colors: ['blue', 'white', 'green', 'yellow', 'red'], familiarity: 0.2 },
  { name: 'Chad', code: 'TD', continent: Continent.Africa, similarFlags: ['RO', 'MD'], colors: ['blue', 'yellow', 'red'], familiarity: 0.3 },
  { name: 'Comoros', code: 'KM', continent: Continent.Africa, similarFlags: ['BR'], colors: ['green', 'white', 'red', 'blue', 'yellow'], familiarity: 0.25 },
  { name: 'Congo', code: 'CG', continent: Continent.Africa, similarFlags: ['PT'], colors: ['green', 'yellow', 'red'], familiarity: 0.3 },
  { name: 'Côte d\'Ivoire', code: 'CI', continent: Continent.Africa, similarFlags: ['IE'], colors: ['orange', 'white', 'green'], familiarity: 0.4 },
  { name: 'Democratic Republic of the Congo', code: 'CD', continent: Continent.Africa, similarFlags: ['ZM'], colors: ['blue', 'yellow', 'red'], familiarity: 0.3 },
  { name: 'Djibouti', code: 'DJ', continent: Continent.Africa, similarFlags: ['ET'], colors: ['blue', 'white', 'green'], familiarity: 0.2 },
  { name: 'Egypt', code: 'EG', continent: Continent.Africa, similarFlags: ['YE', 'SY', 'IQ'], colors: ['red', 'white', 'black'], familiarity: 0.7 },
  { name: 'Equatorial Guinea', code: 'GQ', continent: Continent.Africa, similarFlags: ['TZ'], colors: ['green', 'white', 'red', 'blue'], familiarity: 0.2 },
  { name: 'Eritrea', code: 'ER', continent: Continent.Africa, similarFlags: ['ET'], colors: ['green', 'blue', 'red'], familiarity: 0.2 },
  { name: 'Eswatini', code: 'SZ', continent: Continent.Africa, similarFlags: ['TH'], colors: ['blue', 'yellow', 'red', 'black'], familiarity: 0.3 },
  { name: 'Ethiopia', code: 'ET', continent: Continent.Africa, similarFlags: ['BO', 'GH'], colors: ['green', 'yellow', 'red', 'blue'], familiarity: 0.4 },
  { name: 'Gabon', code: 'GA', continent: Continent.Africa, similarFlags: ['SL'], colors: ['green', 'yellow', 'blue'], familiarity: 0.3 },
  { name: 'Gambia', code: 'GM', continent: Continent.Africa, similarFlags: ['SN'], colors: ['red', 'blue', 'green', 'white'], familiarity: 0.3 },
  { name: 'Ghana', code: 'GH', continent: Continent.Africa, similarFlags: ['ET', 'BO'], colors: ['red', 'yellow', 'green', 'black'], familiarity: 0.5 },
  { name: 'Guinea', code: 'GN', continent: Continent.Africa, similarFlags: ['ML', 'SN'], colors: ['red', 'yellow', 'green'], familiarity: 0.3 },
  { name: 'Guinea-Bissau', code: 'GW', continent: Continent.Africa, similarFlags: ['GN'], colors: ['red', 'yellow', 'green', 'black'], familiarity: 0.2 },
  { name: 'Kenya', code: 'KE', continent: Continent.Africa, similarFlags: ['SS'], colors: ['black', 'red', 'green', 'white'], familiarity: 0.5 },
  { name: 'Lesotho', code: 'LS', continent: Continent.Africa, similarFlags: ['ZA'], colors: ['blue', 'white', 'green', 'black'], familiarity: 0.3 },
  { name: 'Liberia', code: 'LR', continent: Continent.Africa, similarFlags: ['US', 'MY'], colors: ['red', 'white', 'blue'], familiarity: 0.3 },
  { name: 'Libya', code: 'LY', continent: Continent.Africa, similarFlags: ['BD'], colors: ['red', 'black', 'green'], familiarity: 0.4 },
  { name: 'Madagascar', code: 'MG', continent: Continent.Africa, similarFlags: ['ID', 'PL'], colors: ['white', 'red', 'green'], familiarity: 0.4 },
  { name: 'Malawi', code: 'MW', continent: Continent.Africa, similarFlags: ['BI'], colors: ['black', 'red', 'green'], familiarity: 0.3 },
  { name: 'Mali', code: 'ML', continent: Continent.Africa, similarFlags: ['GN', 'SN'], colors: ['green', 'yellow', 'red'], familiarity: 0.4 },
  { name: 'Mauritania', code: 'MR', continent: Continent.Africa, similarFlags: ['BN'], colors: ['green', 'yellow'], familiarity: 0.2 },
  { name: 'Mauritius', code: 'MU', continent: Continent.Africa, similarFlags: ['RW'], colors: ['red', 'blue', 'yellow', 'green'], familiarity: 0.4 },
  { name: 'Morocco', code: 'MA', continent: Continent.Africa, similarFlags: ['VN'], colors: ['red', 'green'], familiarity: 0.5 },
  { name: 'Mozambique', code: 'MZ', continent: Continent.Africa, similarFlags: ['ZW'], colors: ['green', 'black', 'yellow', 'white', 'red'], familiarity: 0.3 },
  { name: 'Namibia', code: 'NA', continent: Continent.Africa, similarFlags: ['BW'], colors: ['blue', 'red', 'green', 'white', 'yellow'], familiarity: 0.4 },
  { name: 'Niger', code: 'NE', continent: Continent.Africa, similarFlags: ['IN', 'CI'], colors: ['orange', 'white', 'green'], familiarity: 0.2 },
  { name: 'Nigeria', code: 'NG', continent: Continent.Africa, similarFlags: ['IE', 'CI'], colors: ['green', 'white', 'green'], familiarity: 0.5 },
  { name: 'Rwanda', code: 'RW', continent: Continent.Africa, similarFlags: ['MU'], colors: ['blue', 'yellow', 'green'], familiarity: 0.3 },
  { name: 'Sao Tome and Principe', code: 'ST', continent: Continent.Africa, similarFlags: ['CV'], colors: ['green', 'yellow', 'red', 'black'], familiarity: 0.2 },
  { name: 'Senegal', code: 'SN', continent: Continent.Africa, similarFlags: ['ML', 'GN'], colors: ['green', 'yellow', 'red'], familiarity: 0.4 },
  { name: 'Seychelles', code: 'SC', continent: Continent.Africa, similarFlags: ['NA'], colors: ['blue', 'yellow', 'red', 'white', 'green'], familiarity: 0.3 },
  { name: 'Sierra Leone', code: 'SL', continent: Continent.Africa, similarFlags: ['GA'], colors: ['green', 'white', 'blue'], familiarity: 0.3 },
  { name: 'Somalia', code: 'SO', continent: Continent.Africa, similarFlags: ['VN'], colors: ['blue', 'white'], familiarity: 0.3 },
  { name: 'South Africa', code: 'ZA', continent: Continent.Africa, similarFlags: ['LS', 'NL'], colors: ['green', 'yellow', 'black', 'white', 'red', 'blue'], familiarity: 0.7 },
  { name: 'South Sudan', code: 'SS', continent: Continent.Africa, similarFlags: ['KE', 'PS'], colors: ['black', 'red', 'green', 'white', 'blue'], familiarity: 0.3 },
  { name: 'Sudan', code: 'SD', continent: Continent.Africa, similarFlags: ['PS', 'DZ'], colors: ['red', 'white', 'black', 'green'], familiarity: 0.4 },
  { name: 'Tanzania', code: 'TZ', continent: Continent.Africa, similarFlags: ['GQ'], colors: ['green', 'black', 'blue', 'yellow'], familiarity: 0.4 },
  { name: 'Togo', code: 'TG', continent: Continent.Africa, similarFlags: ['GH'], colors: ['green', 'yellow', 'red', 'white'], familiarity: 0.3 },
  { name: 'Tunisia', code: 'TN', continent: Continent.Africa, similarFlags: ['TR'], colors: ['red', 'white'], familiarity: 0.4 },
  { name: 'Uganda', code: 'UG', continent: Continent.Africa, similarFlags: ['ZW'], colors: ['black', 'yellow', 'red'], familiarity: 0.4 },
  { name: 'Zambia', code: 'ZM', continent: Continent.Africa, similarFlags: ['CD'], colors: ['green', 'red', 'black', 'orange'], familiarity: 0.4 },
  { name: 'Zimbabwe', code: 'ZW', continent: Continent.Africa, similarFlags: ['MZ', 'UG'], colors: ['green', 'yellow', 'red', 'black', 'white'], familiarity: 0.4 },
  
  // Asia
  { name: 'Afghanistan', code: 'AF', continent: Continent.Asia, similarFlags: ['IR', 'PK'], colors: ['black', 'red', 'white', 'green'], familiarity: 0.4 },
  { name: 'Bahrain', code: 'BH', continent: Continent.Asia, similarFlags: ['QA'], colors: ['red', 'white'], familiarity: 0.3 },
  { name: 'Bangladesh', code: 'BD', continent: Continent.Asia, similarFlags: ['JP', 'LY'], colors: ['green', 'red'], familiarity: 0.5 },
  { name: 'Bhutan', code: 'BT', continent: Continent.Asia, similarFlags: ['NP'], colors: ['yellow', 'orange', 'white'], familiarity: 0.3 },
  { name: 'Brunei', code: 'BN', continent: Continent.Asia, similarFlags: ['MR'], colors: ['yellow', 'white', 'black'], familiarity: 0.2 },
  { name: 'Cambodia', code: 'KH', continent: Continent.Asia, similarFlags: ['TH'], colors: ['blue', 'red'], familiarity: 0.4 },
  { name: 'China', code: 'CN', continent: Continent.Asia, similarFlags: ['VN'], colors: ['red', 'yellow'], familiarity: 0.95 },
  { name: 'Cyprus', code: 'CY', continent: Continent.Asia, similarFlags: ['TR'], colors: ['white', 'yellow'], familiarity: 0.3 },
  { name: 'India', code: 'IN', continent: Continent.Asia, similarFlags: ['NE', 'IE'], colors: ['orange', 'white', 'green'], familiarity: 0.9 },
  { name: 'Indonesia', code: 'ID', continent: Continent.Asia, similarFlags: ['PL', 'MC'], colors: ['red', 'white'], familiarity: 0.6 },
  { name: 'Iran', code: 'IR', continent: Continent.Asia, similarFlags: ['AF', 'TJ'], colors: ['green', 'white', 'red'], familiarity: 0.6 },
  { name: 'Iraq', code: 'IQ', continent: Continent.Asia, similarFlags: ['EG', 'SY', 'YE'], colors: ['red', 'white', 'black', 'green'], familiarity: 0.5 },
  { name: 'Israel', code: 'IL', continent: Continent.Asia, similarFlags: ['AR', 'UY'], colors: ['blue', 'white'], familiarity: 0.6 },
  { name: 'Japan', code: 'JP', continent: Continent.Asia, similarFlags: ['BD'], colors: ['white', 'red'], familiarity: 0.95 },
  { name: 'Jordan', code: 'JO', continent: Continent.Asia, similarFlags: ['PS', 'SD'], colors: ['black', 'white', 'green', 'red'], familiarity: 0.5 },
  { name: 'Kazakhstan', code: 'KZ', continent: Continent.Asia, similarFlags: ['PA'], colors: ['blue', 'yellow'], familiarity: 0.3 },
  { name: 'Kuwait', code: 'KW', continent: Continent.Asia, similarFlags: ['JO', 'PS'], colors: ['green', 'white', 'red', 'black'], familiarity: 0.4 },
  { name: 'Kyrgyzstan', code: 'KG', continent: Continent.Asia, similarFlags: ['UZ'], colors: ['red', 'yellow'], familiarity: 0.2 },
  { name: 'Laos', code: 'LA', continent: Continent.Asia, similarFlags: ['TH'], colors: ['blue', 'red', 'white'], familiarity: 0.3 },
  { name: 'Lebanon', code: 'LB', continent: Continent.Asia, similarFlags: ['AT', 'LV'], colors: ['red', 'white', 'green'], familiarity: 0.5 },
  { name: 'Malaysia', code: 'MY', continent: Continent.Asia, similarFlags: ['US', 'LR'], colors: ['blue', 'red', 'white', 'yellow'], familiarity: 0.6 },
  { name: 'Maldives', code: 'MV', continent: Continent.Asia, similarFlags: ['TR', 'TN'], colors: ['red', 'green', 'white'], familiarity: 0.3 },
  { name: 'Mongolia', code: 'MN', continent: Continent.Asia, similarFlags: ['KG'], colors: ['red', 'blue', 'yellow'], familiarity: 0.3 },
  { name: 'Myanmar', code: 'MM', continent: Continent.Asia, similarFlags: ['LT'], colors: ['yellow', 'green', 'red', 'white'], familiarity: 0.4 },
  { name: 'Nepal', code: 'NP', continent: Continent.Asia, similarFlags: ['BT'], colors: ['blue', 'red', 'white'], familiarity: 0.4 },
  { name: 'North Korea', code: 'KP', continent: Continent.Asia, similarFlags: ['CU'], colors: ['blue', 'red', 'white'], familiarity: 0.4 },
  { name: 'Oman', code: 'OM', continent: Continent.Asia, similarFlags: ['AE'], colors: ['red', 'white', 'green'], familiarity: 0.4 },
  { name: 'Pakistan', code: 'PK', continent: Continent.Asia, similarFlags: ['TM', 'SA'], colors: ['green', 'white'], familiarity: 0.6 },
  { name: 'Palestine', code: 'PS', continent: Continent.Asia, similarFlags: ['JO', 'SD'], colors: ['black', 'white', 'green', 'red'], familiarity: 0.5 },
  { name: 'Philippines', code: 'PH', continent: Continent.Asia, similarFlags: ['CZ', 'CL'], colors: ['blue', 'red', 'white', 'yellow'], familiarity: 0.6 },
  { name: 'Qatar', code: 'QA', continent: Continent.Asia, similarFlags: ['BH'], colors: ['white', 'maroon'], familiarity: 0.5 },
  { name: 'Saudi Arabia', code: 'SA', continent: Continent.Asia, similarFlags: ['PK'], colors: ['green', 'white'], familiarity: 0.6 },
  { name: 'Singapore', code: 'SG', continent: Continent.Asia, similarFlags: ['ID', 'PL'], colors: ['red', 'white'], familiarity: 0.7 },
  { name: 'South Korea', code: 'KR', continent: Continent.Asia, similarFlags: ['CR'], colors: ['white', 'red', 'blue', 'black'], familiarity: 0.8 },
  { name: 'Sri Lanka', code: 'LK', continent: Continent.Asia, similarFlags: ['BD'], colors: ['yellow', 'green', 'orange', 'maroon'], familiarity: 0.5 },
  { name: 'Syria', code: 'SY', continent: Continent.Asia, similarFlags: ['EG', 'IQ', 'YE'], colors: ['red', 'white', 'black', 'green'], familiarity: 0.5 },
  { name: 'Taiwan', code: 'TW', continent: Continent.Asia, similarFlags: ['SM'], colors: ['red', 'blue', 'white'], familiarity: 0.6 },
  { name: 'Tajikistan', code: 'TJ', continent: Continent.Asia, similarFlags: ['IR'], colors: ['red', 'white', 'green'], familiarity: 0.2 },
  { name: 'Thailand', code: 'TH', continent: Continent.Asia, similarFlags: ['CR', 'SZ'], colors: ['red', 'white', 'blue'], familiarity: 0.7 },
  { name: 'Timor-Leste', code: 'TL', continent: Continent.Asia, similarFlags: ['CU'], colors: ['red', 'yellow', 'black', 'white'], familiarity: 0.2 },
  { name: 'Turkey', code: 'TR', continent: Continent.Asia, similarFlags: ['TN', 'MV'], colors: ['red', 'white'], familiarity: 0.7 },
  { name: 'Turkmenistan', code: 'TM', continent: Continent.Asia, similarFlags: ['PK'], colors: ['green', 'red'], familiarity: 0.2 },
  { name: 'United Arab Emirates', code: 'AE', continent: Continent.Asia, similarFlags: ['OM'], colors: ['red', 'green', 'white', 'black'], familiarity: 0.6 },
  { name: 'Uzbekistan', code: 'UZ', continent: Continent.Asia, similarFlags: ['KG'], colors: ['blue', 'white', 'green', 'red'], familiarity: 0.3 },
  { name: 'Vietnam', code: 'VN', continent: Continent.Asia, similarFlags: ['CN', 'MA'], colors: ['red', 'yellow'], familiarity: 0.7 },
  { name: 'Yemen', code: 'YE', continent: Continent.Asia, similarFlags: ['EG', 'SY', 'IQ'], colors: ['red', 'white', 'black'], familiarity: 0.4 },
  
  // Europe
  { name: 'Albania', code: 'AL', continent: Continent.Europe, similarFlags: ['ES'], colors: ['red', 'black'], familiarity: 0.4 },
  { name: 'Andorra', code: 'AD', continent: Continent.Europe, similarFlags: ['MD', 'RO'], colors: ['blue', 'yellow', 'red'], familiarity: 0.3 },
  { name: 'Armenia', code: 'AM', continent: Continent.Europe, similarFlags: ['CO', 'VE'], colors: ['red', 'blue', 'orange'], familiarity: 0.3 },
  { name: 'Austria', code: 'AT', continent: Continent.Europe, similarFlags: ['LV', 'LB'], colors: ['red', 'white'], familiarity: 0.7 },
  { name: 'Azerbaijan', code: 'AZ', continent: Continent.Europe, similarFlags: ['TR'], colors: ['blue', 'red', 'green'], familiarity: 0.4 },
  { name: 'Belarus', code: 'BY', continent: Continent.Europe, similarFlags: ['BG'], colors: ['red', 'green', 'white'], familiarity: 0.4 },
  { name: 'Belgium', code: 'BE', continent: Continent.Europe, similarFlags: ['DE', 'AO'], colors: ['black', 'yellow', 'red'], familiarity: 0.8 },
  { name: 'Bosnia and Herzegovina', code: 'BA', continent: Continent.Europe, similarFlags: ['VA'], colors: ['blue', 'yellow', 'white'], familiarity: 0.4 },
  { name: 'Bulgaria', code: 'BG', continent: Continent.Europe, similarFlags: ['BY', 'HU'], colors: ['white', 'green', 'red'], familiarity: 0.5 },
  { name: 'Croatia', code: 'HR', continent: Continent.Europe, similarFlags: ['NL', 'SI'], colors: ['red', 'white', 'blue'], familiarity: 0.6 },
  { name: 'Czech Republic', code: 'CZ', continent: Continent.Europe, similarFlags: ['PH', 'CL'], colors: ['white', 'red', 'blue'], familiarity: 0.7 },
  { name: 'Denmark', code: 'DK', continent: Continent.Europe, similarFlags: ['NO', 'SE', 'FI', 'IS'], colors: ['red', 'white'], familiarity: 0.8 },
  { name: 'Estonia', code: 'EE', continent: Continent.Europe, similarFlags: ['BW'], colors: ['blue', 'black', 'white'], familiarity: 0.4 },
  { name: 'Finland', code: 'FI', continent: Continent.Europe, similarFlags: ['DK', 'SE', 'NO', 'IS'], colors: ['white', 'blue'], familiarity: 0.7 },
  { name: 'France', code: 'FR', continent: Continent.Europe, similarFlags: ['NL', 'RU'], colors: ['blue', 'white', 'red'], familiarity: 0.95 },
  { name: 'Georgia', code: 'GE', continent: Continent.Europe, similarFlags: ['CH', 'DK'], colors: ['white', 'red'], familiarity: 0.4 },
  { name: 'Germany', code: 'DE', continent: Continent.Europe, similarFlags: ['BE', 'AO'], colors: ['black', 'red', 'yellow'], familiarity: 0.95 },
  { name: 'Greece', code: 'GR', continent: Continent.Europe, similarFlags: ['AR', 'UY'], colors: ['blue', 'white'], familiarity: 0.7 },
  { name: 'Hungary', code: 'HU', continent: Continent.Europe, similarFlags: ['BG', 'IT'], colors: ['red', 'white', 'green'], familiarity: 0.6 },
  { name: 'Iceland', code: 'IS', continent: Continent.Europe, similarFlags: ['NO', 'DK', 'FI'], colors: ['blue', 'white', 'red'], familiarity: 0.6 },
  { name: 'Ireland', code: 'IE', continent: Continent.Europe, similarFlags: ['IT', 'CI', 'NG'], colors: ['green', 'white', 'orange'], familiarity: 0.8 },
  { name: 'Italy', code: 'IT', continent: Continent.Europe, similarFlags: ['HU', 'BG'], colors: ['green', 'white', 'red'], familiarity: 0.9 },
  { name: 'Latvia', code: 'LV', continent: Continent.Europe, similarFlags: ['AT', 'LB'], colors: ['red', 'white'], familiarity: 0.4 },
  { name: 'Liechtenstein', code: 'LI', continent: Continent.Europe, similarFlags: ['HT'], colors: ['blue', 'red'], familiarity: 0.3 },
  { name: 'Lithuania', code: 'LT', continent: Continent.Europe, similarFlags: ['CO', 'EC'], colors: ['yellow', 'green', 'red'], familiarity: 0.4 },
  { name: 'Luxembourg', code: 'LU', continent: Continent.Europe, similarFlags: ['NL'], colors: ['red', 'white', 'blue'], familiarity: 0.5 },
  { name: 'Malta', code: 'MT', continent: Continent.Europe, similarFlags: ['VA'], colors: ['white', 'red'], familiarity: 0.5 },
  { name: 'Moldova', code: 'MD', continent: Continent.Europe, similarFlags: ['RO', 'AD'], colors: ['blue', 'yellow', 'red'], familiarity: 0.3 },
  { name: 'Monaco', code: 'MC', continent: Continent.Europe, similarFlags: ['ID', 'PL'], colors: ['red', 'white'], familiarity: 0.5 },
  { name: 'Montenegro', code: 'ME', continent: Continent.Europe, similarFlags: ['BE'], colors: ['red', 'gold', 'yellow'], familiarity: 0.4 },
  { name: 'Netherlands', code: 'NL', continent: Continent.Europe, similarFlags: ['LU', 'FR', 'RU'], colors: ['red', 'white', 'blue'], familiarity: 0.8 },
  { name: 'North Macedonia', code: 'MK', continent: Continent.Europe, similarFlags: ['ES'], colors: ['red', 'yellow'], familiarity: 0.4 },
  { name: 'Norway', code: 'NO', continent: Continent.Europe, similarFlags: ['IS', 'DK', 'SE', 'FI'], colors: ['red', 'white', 'blue'], familiarity: 0.7 },
  { name: 'Poland', code: 'PL', continent: Continent.Europe, similarFlags: ['ID', 'MC'], colors: ['white', 'red'], familiarity: 0.7 },
  { name: 'Portugal', code: 'PT', continent: Continent.Europe, similarFlags: ['CG', 'BO'], colors: ['green', 'red', 'yellow'], familiarity: 0.7 },
  { name: 'Romania', code: 'RO', continent: Continent.Europe, similarFlags: ['TD', 'MD'], colors: ['blue', 'yellow', 'red'], familiarity: 0.5 },
  { name: 'Russia', code: 'RU', continent: Continent.Europe, similarFlags: ['NL', 'FR', 'SI', 'SK'], colors: ['white', 'blue', 'red'], familiarity: 0.9 },
  { name: 'San Marino', code: 'SM', continent: Continent.Europe, similarFlags: ['PA', 'TW'], colors: ['white', 'blue'], familiarity: 0.4 },
  { name: 'Serbia', code: 'RS', continent: Continent.Europe, similarFlags: ['SK', 'SI', 'RU'], colors: ['red', 'blue', 'white'], familiarity: 0.5 },
  { name: 'Slovakia', code: 'SK', continent: Continent.Europe, similarFlags: ['SI', 'RS', 'RU'], colors: ['white', 'blue', 'red'], familiarity: 0.5 },
  { name: 'Slovenia', code: 'SI', continent: Continent.Europe, similarFlags: ['SK', 'RS', 'RU'], colors: ['white', 'blue', 'red'], familiarity: 0.6 },
  { name: 'Spain', code: 'ES', continent: Continent.Europe, similarFlags: ['AL'], colors: ['red', 'yellow'], familiarity: 0.9 },
  { name: 'Sweden', code: 'SE', continent: Continent.Europe, similarFlags: ['DK', 'NO', 'FI', 'IS'], colors: ['blue', 'yellow'], familiarity: 0.8 },
  { name: 'Switzerland', code: 'CH', continent: Continent.Europe, similarFlags: ['DK', 'NO'], colors: ['red', 'white'], familiarity: 0.8 },
  { name: 'Ukraine', code: 'UA', continent: Continent.Europe, similarFlags: ['SE', 'CO'], colors: ['blue', 'yellow'], familiarity: 0.6 },
  { name: 'United Kingdom', code: 'GB', continent: Continent.Europe, similarFlags: ['AU', 'NZ', 'FJ'], colors: ['red', 'white', 'blue'], familiarity: 1.0 },
  { name: 'Vatican City', code: 'VA', continent: Continent.Europe, similarFlags: ['BA', 'MT'], colors: ['yellow', 'white'], familiarity: 0.5 },
  
  // North America
  { name: 'Antigua and Barbuda', code: 'AG', continent: Continent.NorthAmerica, similarFlags: ['MK'], colors: ['black', 'blue', 'white', 'yellow', 'red'], familiarity: 0.3 },
  { name: 'Bahamas', code: 'BS', continent: Continent.NorthAmerica, similarFlags: ['KI'], colors: ['blue', 'yellow', 'black'], familiarity: 0.4 },
  { name: 'Barbados', code: 'BB', continent: Continent.NorthAmerica, similarFlags: ['BT'], colors: ['blue', 'yellow', 'black'], familiarity: 0.4 },
  { name: 'Belize', code: 'BZ', continent: Continent.NorthAmerica, similarFlags: ['UY'], colors: ['blue', 'red', 'white'], familiarity: 0.3 },
  { name: 'Canada', code: 'CA', continent: Continent.NorthAmerica, similarFlags: ['PE'], colors: ['red', 'white'], familiarity: 1.0 },
  { name: 'Costa Rica', code: 'CR', continent: Continent.NorthAmerica, similarFlags: ['TH', 'KR'], colors: ['blue', 'white', 'red'], familiarity: 0.6 },
  { name: 'Cuba', code: 'CU', continent: Continent.NorthAmerica, similarFlags: ['KP', 'TL'], colors: ['blue', 'white', 'red'], familiarity: 0.6 },
  { name: 'Dominica', code: 'DM', continent: Continent.NorthAmerica, similarFlags: ['BR'], colors: ['green', 'yellow', 'black', 'white', 'red'], familiarity: 0.3 },
  { name: 'Dominican Republic', code: 'DO', continent: Continent.NorthAmerica, similarFlags: ['CZ', 'PH'], colors: ['blue', 'red', 'white'], familiarity: 0.5 },
  { name: 'El Salvador', code: 'SV', continent: Continent.NorthAmerica, similarFlags: ['NI', 'HN'], colors: ['blue', 'white'], familiarity: 0.4 },
  { name: 'Grenada', code: 'GD', continent: Continent.NorthAmerica, similarFlags: ['BD'], colors: ['red', 'yellow', 'green'], familiarity: 0.3 },
  { name: 'Guatemala', code: 'GT', continent: Continent.NorthAmerica, similarFlags: ['NI', 'HN'], colors: ['blue', 'white'], familiarity: 0.4 },
  { name: 'Haiti', code: 'HT', continent: Continent.NorthAmerica, similarFlags: ['LI'], colors: ['blue', 'red'], familiarity: 0.4 },
  { name: 'Honduras', code: 'HN', continent: Continent.NorthAmerica, similarFlags: ['NI', 'SV'], colors: ['blue', 'white'], familiarity: 0.4 },
  { name: 'Jamaica', code: 'JM', continent: Continent.NorthAmerica, similarFlags: ['SB'], colors: ['black', 'yellow', 'green'], familiarity: 0.5 },
  { name: 'Mexico', code: 'MX', continent: Continent.NorthAmerica, similarFlags: ['IT'], colors: ['green', 'white', 'red'], familiarity: 0.9 },
  { name: 'Nicaragua', code: 'NI', continent: Continent.NorthAmerica, similarFlags: ['HN', 'SV'], colors: ['blue', 'white'], familiarity: 0.4 },
  { name: 'Panama', code: 'PA', continent: Continent.NorthAmerica, similarFlags: ['CU', 'SM'], colors: ['blue', 'white', 'red'], familiarity: 0.5 },
  { name: 'Saint Kitts and Nevis', code: 'KN', continent: Continent.NorthAmerica, similarFlags: ['JM'], colors: ['green', 'yellow', 'black', 'red', 'white'], familiarity: 0.3 },
  { name: 'Saint Lucia', code: 'LC', continent: Continent.NorthAmerica, similarFlags: ['PH'], colors: ['blue', 'yellow', 'black', 'white'], familiarity: 0.3 },
  { name: 'Saint Vincent and the Grenadines', code: 'VC', continent: Continent.NorthAmerica, similarFlags: ['MX'], colors: ['blue', 'yellow', 'green'], familiarity: 0.3 },
  { name: 'Trinidad and Tobago', code: 'TT', continent: Continent.NorthAmerica, similarFlags: ['TO'], colors: ['red', 'white', 'black'], familiarity: 0.5 },
  { name: 'United States', code: 'US', continent: Continent.NorthAmerica, similarFlags: ['LR', 'MY'], colors: ['red', 'white', 'blue'], familiarity: 1.0 },
  
  // South America
  { name: 'Argentina', code: 'AR', continent: Continent.SouthAmerica, similarFlags: ['UY', 'GR'], colors: ['blue', 'white', 'yellow'], familiarity: 0.7 },
  { name: 'Bolivia', code: 'BO', continent: Continent.SouthAmerica, similarFlags: ['GH', 'ET'], familiarity: 0.4 },
  { name: 'Brazil', code: 'BR', continent: Continent.SouthAmerica, similarFlags: ['DM'], colors: ['green', 'yellow', 'blue', 'white'], familiarity: 0.9 },
  { name: 'Chile', code: 'CL', continent: Continent.SouthAmerica, similarFlags: ['CZ', 'PH'], familiarity: 0.6 },
  { name: 'Colombia', code: 'CO', continent: Continent.SouthAmerica, similarFlags: ['EC', 'VE'], colors: ['yellow', 'blue', 'red'], familiarity: 0.6 },
  { name: 'Ecuador', code: 'EC', continent: Continent.SouthAmerica, similarFlags: ['CO', 'VE'], colors: ['yellow', 'blue', 'red'], familiarity: 0.5 },
  { name: 'Guyana', code: 'GY', continent: Continent.SouthAmerica, similarFlags: ['ZW'], colors: ['green', 'white', 'yellow', 'black', 'red'], familiarity: 0.3 },
  { name: 'Paraguay', code: 'PY', continent: Continent.SouthAmerica, similarFlags: ['NL'], colors: ['red', 'white', 'blue'], familiarity: 0.4 },
  { name: 'Peru', code: 'PE', continent: Continent.SouthAmerica, similarFlags: ['CA'], colors: ['red', 'white'], familiarity: 0.6 },
  { name: 'Suriname', code: 'SR', continent: Continent.SouthAmerica, similarFlags: ['GH'], colors: ['green', 'white', 'red', 'yellow'], familiarity: 0.3 },
  { name: 'Uruguay', code: 'UY', continent: Continent.SouthAmerica, similarFlags: ['AR', 'GR'], colors: ['blue', 'white', 'yellow'], familiarity: 0.6 },
  { name: 'Venezuela', code: 'VE', continent: Continent.SouthAmerica, similarFlags: ['CO', 'EC'], colors: ['yellow', 'blue', 'red'], familiarity: 0.6 },
  
  // Oceania
  { name: 'Australia', code: 'AU', continent: Continent.Oceania, similarFlags: ['NZ', 'GB', 'FJ'], colors: ['blue', 'white', 'red'], familiarity: 0.95 },
  { name: 'Fiji', code: 'FJ', continent: Continent.Oceania, similarFlags: ['AU', 'GB', 'NZ'], colors: ['blue', 'white', 'red'], familiarity: 0.5 },
  { name: 'Kiribati', code: 'KI', continent: Continent.Oceania, similarFlags: ['FM'], colors: ['red', 'blue', 'white', 'yellow'], familiarity: 0.2 },
  { name: 'Marshall Islands', code: 'MH', continent: Continent.Oceania, similarFlags: ['US'], colors: ['blue', 'white', 'orange'], familiarity: 0.2 },
  { name: 'Micronesia', code: 'FM', continent: Continent.Oceania, similarFlags: ['KI'], colors: ['blue', 'white'], familiarity: 0.2 },
  { name: 'Nauru', code: 'NR', continent: Continent.Oceania, similarFlags: ['SO'], colors: ['blue', 'yellow', 'white'], familiarity: 0.2 },
  { name: 'New Zealand', code: 'NZ', continent: Continent.Oceania, similarFlags: ['AU', 'GB', 'FJ'], colors: ['blue', 'red', 'white'], familiarity: 0.8 },
  { name: 'Palau', code: 'PW', continent: Continent.Oceania, similarFlags: ['BD'], colors: ['blue', 'yellow'], familiarity: 0.2 },
  { name: 'Papua New Guinea', code: 'PG', continent: Continent.Oceania, similarFlags: ['DE'], colors: ['red', 'black', 'yellow', 'white'], familiarity: 0.4 },
  { name: 'Samoa', code: 'WS', continent: Continent.Oceania, similarFlags: ['VN'], colors: ['red', 'blue', 'white'], familiarity: 0.3 },
  { name: 'Solomon Islands', code: 'SB', continent: Continent.Oceania, similarFlags: ['JM'], colors: ['green', 'blue', 'yellow', 'white'], familiarity: 0.3 },
  { name: 'Tonga', code: 'TO', continent: Continent.Oceania, similarFlags: ['TT'], colors: ['red', 'white'], familiarity: 0.3 },
  { name: 'Tuvalu', code: 'TV', continent: Continent.Oceania, similarFlags: ['AU', 'NZ'], colors: ['blue', 'white', 'red', 'yellow'], familiarity: 0.2 },
  { name: 'Vanuatu', code: 'VU', continent: Continent.Oceania, similarFlags: ['ZA'], colors: ['red', 'green', 'black', 'yellow'], familiarity: 0.3 },
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

// Helper function to filter countries based on familiarity and difficulty level
export const filterCountriesByFamiliarity = (
  countries: Country[], 
  difficulty: 'easy' | 'medium' | 'hard' | 'impossible'
): Country[] => {
  // Set familiarity thresholds based on difficulty
  const familiarityThresholds = {
    easy: { min: 0.7, max: 1.0 },      // Easy: Only well-known countries
    medium: { min: 0.5, max: 1.0 },    // Medium: Moderately known to well-known countries
    hard: { min: 0.3, max: 0.9 },      // Hard: Less familiar to moderately known countries
    impossible: { min: 0.0, max: 0.7 } // Impossible: All countries, but prioritize less familiar ones
  };
  
  // Get the appropriate threshold based on difficulty
  const threshold = familiarityThresholds[difficulty];
  
  // Filter countries based on familiarity threshold
  // If familiarity is not defined, use a default value of 0.5 (medium familiarity)
  return countries.filter(country => {
    const familiarity = country.familiarity ?? 0.5;
    return familiarity >= threshold.min && familiarity <= threshold.max;
  });
};

// Helper function to get random countries
export const getRandomCountries = (count: number, availableCountries: Country[], difficulty?: 'easy' | 'medium' | 'hard' | 'impossible'): Country[] => {
  // If difficulty is specified, filter countries by familiarity first
  let filteredCountries = availableCountries;
  if (difficulty) {
    filteredCountries = filterCountriesByFamiliarity(availableCountries, difficulty);
    
    // If filtering results in too few countries, add some from the original list
    if (filteredCountries.length < count) {
      const remainingCountries = availableCountries.filter(
        country => !filteredCountries.some(c => c.code === country.code)
      );
      
      // Add countries until we have enough, prioritizing those closest to our familiarity threshold
      const threshold = difficulty === 'impossible' || difficulty === 'hard' ? 'min' : 'max';
      const additionalCountries = remainingCountries
        .sort((a, b) => {
          const famA = a.familiarity ?? 0.5;
          const famB = b.familiarity ?? 0.5;
          return threshold === 'min' ? famA - famB : famB - famA;
        })
        .slice(0, count - filteredCountries.length);
      
      filteredCountries = [...filteredCountries, ...additionalCountries];
    }
  }
  
  if (count >= filteredCountries.length) {
    return [...filteredCountries];
  }
  
  return filteredCountries
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
};

// Helper function to get countries for multiple continents
export const getCountriesForContinents = (
  continents: Continent[], 
  count: number, 
  difficulty?: 'easy' | 'medium' | 'hard' | 'impossible'
): Country[] => {
  const continentCountries = countries.filter(country => continents.includes(country.continent));
  return getRandomCountries(count, continentCountries, difficulty);
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

// Helper function to get countries with similar colors to a given country
export const getCountriesWithSimilarColors = (countryCode: string, availableCountries: Country[]): Country[] => {
  // Find the country with the given code
  const country = countries.find(c => c.code === countryCode);
  
  if (!country || !country.colors || country.colors.length === 0) {
    return [];
  }
  
  // Get countries with at least one matching color
  return availableCountries.filter(c => 
    c.code !== countryCode && 
    c.colors && 
    c.colors.some(color => country.colors?.includes(color))
  );
};

// Helper function to include similar flags in quiz options to make it harder
export const getSimilarFlagOptions = (
  correctAnswer: Country, 
  availableCountries: Country[], 
  count: number, 
  difficulty: 'easy' | 'medium' | 'hard' | 'impossible'
): Country[] => {
  // Filter available countries by familiarity based on difficulty
  const familiarityFilteredCountries = filterCountriesByFamiliarity(availableCountries, difficulty);
  
  // If filtering results in too few countries, add some more
  let countriesPool = familiarityFilteredCountries;
  if (familiarityFilteredCountries.length < count + 1) { // +1 to account for correct answer
    const additionalCountries = availableCountries.filter(
      c => !familiarityFilteredCountries.some(fc => fc.code === c.code)
    );
    countriesPool = [...familiarityFilteredCountries, ...additionalCountries];
  }
  
  // Special handling for impossible difficulty
  if (difficulty === 'impossible') {
    // Get countries with similar flags
    const similarFlagCountries = getCountriesWithSimilarFlags(correctAnswer.code, countriesPool);
    
    // Get countries with similar colors
    const similarColorCountries = getCountriesWithSimilarColors(correctAnswer.code, countriesPool);
    
    // Find countries that have both similar flags AND similar colors - these are the most challenging
    const extremelyDifficultOptions = similarFlagCountries.filter(flagCountry => 
      similarColorCountries.some(colorCountry => colorCountry.code === flagCountry.code)
    );
    
    // If we have enough extremely difficult options, use those
    if (extremelyDifficultOptions.length >= count) {
      return extremelyDifficultOptions
        .sort(() => 0.5 - Math.random())
        .slice(0, count);
    }
    
    // Otherwise, prioritize countries with similar flags, then similar colors
    const combinedOptions = [...extremelyDifficultOptions, ...similarFlagCountries, ...similarColorCountries]
      .filter((country, index, self) => 
        // Remove duplicates
        index === self.findIndex(c => c.code === country.code) && 
        // Remove the correct answer
        country.code !== correctAnswer.code
      );
    
    // If we still don't have enough options, add some random countries
    if (combinedOptions.length < count) {
      const remainingCount = count - combinedOptions.length;
      const otherCountries = countriesPool
        .filter(c => 
          c.code !== correctAnswer.code && 
          !combinedOptions.some(sc => sc.code === c.code)
        )
        // Sort by familiarity (lower is better for impossible difficulty)
        .sort((a, b) => (a.familiarity ?? 0.5) - (b.familiarity ?? 0.5))
        .slice(0, remainingCount);
      
      return [...combinedOptions, ...otherCountries];
    }
    
    // Return the most challenging options
    return combinedOptions
      .sort(() => 0.5 - Math.random())
      .slice(0, count);
  }
  
  // Regular difficulty handling
  // Chance of including similar flags based on difficulty
  const similarFlagChance = {
    easy: 0.2,   // 20% chance on easy
    medium: 0.5, // 50% chance on medium
    hard: 0.8    // 80% chance on hard
  };
  
  // Determine if we should include similar flags based on difficulty
  const shouldIncludeSimilarFlags = Math.random() < similarFlagChance[difficulty] || difficulty === 'hard';
  
  // If not using similar flags or colors, just return random countries
  if (!shouldIncludeSimilarFlags) {
    return countriesPool
      .filter(c => c.code !== correctAnswer.code)
      .sort(() => 0.5 - Math.random())
      .slice(0, count);
  }
  
  // Get countries with similar flags
  const similarFlagCountries = getCountriesWithSimilarFlags(correctAnswer.code, countriesPool);
  
  // Get countries with similar colors
  const similarColorCountries = getCountriesWithSimilarColors(correctAnswer.code, countriesPool)
    .filter(c => !similarFlagCountries.some(sc => sc.code === c.code));
  
  // Combine similar flag and color countries, prioritizing similar flags
  const similarCountries = [...similarFlagCountries, ...similarColorCountries];
  
  // If we don't have enough similar countries, add some random countries
  if (similarCountries.length < count) {
    const remainingCount = count - similarCountries.length;
    
    // Sort by familiarity based on difficulty
    const sortByFamiliarity = (a: Country, b: Country) => {
      const famA = a.familiarity ?? 0.5;
      const famB = b.familiarity ?? 0.5;
      // For easier difficulties, prefer more familiar countries
      // For harder difficulties, prefer less familiar countries
      return difficulty === 'easy' ? famB - famA : famA - famB;
    };
    
    const otherCountries = countriesPool
      .filter(c => 
        c.code !== correctAnswer.code && 
        !similarCountries.some(sc => sc.code === c.code)
      )
      .sort(sortByFamiliarity)
      .slice(0, remainingCount);
    
    return [...similarCountries, ...otherCountries];
  }
  
  // If we have more similar countries than needed, take a subset prioritized by familiarity
  return similarCountries
    .sort((a, b) => {
      // Random factor to avoid always picking the same countries
      const randomFactor = Math.random() * 0.3 - 0.15; // ±0.15 random adjustment
      
      const famA = (a.familiarity ?? 0.5) + randomFactor;
      const famB = (b.familiarity ?? 0.5) + randomFactor;
      
      // For easier difficulties, prefer more familiar countries
      // For harder difficulties, prefer less familiar countries
      return difficulty === 'easy' ? famB - famA : famA - famB;
    })
    .slice(0, count);
};
