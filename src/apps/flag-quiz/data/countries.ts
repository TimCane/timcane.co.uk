export interface Country {
  name: string;
  code: string;
  continent: Continent;
  similarFlags?: string[]; // Array of country codes with similar flags
  colors?: string[]; // Array of dominant colors in the flag
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
  { name: 'Algeria', code: 'DZ', continent: Continent.Africa, similarFlags: ['PS', 'SD'], colors: ['green', 'white', 'red'] },
  { name: 'Angola', code: 'AO', continent: Continent.Africa, similarFlags: ['DE', 'BE'], colors: ['red', 'black', 'yellow'] },
  { name: 'Benin', code: 'BJ', continent: Continent.Africa, similarFlags: ['ML'], colors: ['green', 'yellow', 'red'] },
  { name: 'Botswana', code: 'BW', continent: Continent.Africa, similarFlags: ['EE'], colors: ['blue', 'white', 'black'] },
  { name: 'Burkina Faso', code: 'BF', continent: Continent.Africa, similarFlags: ['SN'], colors: ['red', 'green', 'yellow'] },
  { name: 'Burundi', code: 'BI', continent: Continent.Africa, similarFlags: ['MW'], colors: ['red', 'white', 'green'] },
  { name: 'Cabo Verde', code: 'CV', continent: Continent.Africa, similarFlags: ['EU'], colors: ['blue', 'white', 'red'] },
  { name: 'Cameroon', code: 'CM', continent: Continent.Africa, similarFlags: ['SN', 'ML'], colors: ['green', 'red', 'yellow'] },
  { name: 'Central African Republic', code: 'CF', continent: Continent.Africa, colors: ['blue', 'white', 'green', 'yellow', 'red'] },
  { name: 'Chad', code: 'TD', continent: Continent.Africa, similarFlags: ['RO', 'MD'], colors: ['blue', 'yellow', 'red'] },
  { name: 'Comoros', code: 'KM', continent: Continent.Africa, similarFlags: ['BR'], colors: ['green', 'white', 'red', 'blue', 'yellow'] },
  { name: 'Congo', code: 'CG', continent: Continent.Africa, similarFlags: ['PT'], colors: ['green', 'yellow', 'red'] },
  { name: 'Côte d\'Ivoire', code: 'CI', continent: Continent.Africa, similarFlags: ['IE'], colors: ['orange', 'white', 'green'] },
  { name: 'Democratic Republic of the Congo', code: 'CD', continent: Continent.Africa, similarFlags: ['ZM'], colors: ['blue', 'yellow', 'red'] },
  { name: 'Djibouti', code: 'DJ', continent: Continent.Africa, similarFlags: ['ET'], colors: ['blue', 'white', 'green'] },
  { name: 'Egypt', code: 'EG', continent: Continent.Africa, similarFlags: ['YE', 'SY', 'IQ'], colors: ['red', 'white', 'black'] },
  { name: 'Equatorial Guinea', code: 'GQ', continent: Continent.Africa, similarFlags: ['TZ'], colors: ['green', 'white', 'red', 'blue'] },
  { name: 'Eritrea', code: 'ER', continent: Continent.Africa, similarFlags: ['ET'], colors: ['green', 'blue', 'red'] },
  { name: 'Eswatini', code: 'SZ', continent: Continent.Africa, similarFlags: ['TH'], colors: ['blue', 'yellow', 'red', 'black'] },
  { name: 'Ethiopia', code: 'ET', continent: Continent.Africa, similarFlags: ['BO', 'GH'], colors: ['green', 'yellow', 'red', 'blue'] },
  { name: 'Gabon', code: 'GA', continent: Continent.Africa, similarFlags: ['SL'], colors: ['green', 'yellow', 'blue'] },
  { name: 'Gambia', code: 'GM', continent: Continent.Africa, similarFlags: ['SN'], colors: ['red', 'blue', 'green', 'white'] },
  { name: 'Ghana', code: 'GH', continent: Continent.Africa, similarFlags: ['ET', 'BO'], colors: ['red', 'yellow', 'green', 'black'] },
  { name: 'Guinea', code: 'GN', continent: Continent.Africa, similarFlags: ['ML', 'SN'], colors: ['red', 'yellow', 'green'] },
  { name: 'Guinea-Bissau', code: 'GW', continent: Continent.Africa, similarFlags: ['GN'], colors: ['red', 'yellow', 'green', 'black'] },
  { name: 'Kenya', code: 'KE', continent: Continent.Africa, similarFlags: ['SS'], colors: ['black', 'red', 'green', 'white'] },
  { name: 'Lesotho', code: 'LS', continent: Continent.Africa, similarFlags: ['ZA'], colors: ['blue', 'white', 'green', 'black'] },
  { name: 'Liberia', code: 'LR', continent: Continent.Africa, similarFlags: ['US', 'MY'], colors: ['red', 'white', 'blue'] },
  { name: 'Libya', code: 'LY', continent: Continent.Africa, similarFlags: ['BD'], colors: ['red', 'black', 'green'] },
  { name: 'Madagascar', code: 'MG', continent: Continent.Africa, similarFlags: ['ID', 'PL'], colors: ['white', 'red', 'green'] },
  { name: 'Malawi', code: 'MW', continent: Continent.Africa, similarFlags: ['BI'], colors: ['black', 'red', 'green'] },
  { name: 'Mali', code: 'ML', continent: Continent.Africa, similarFlags: ['GN', 'SN'], colors: ['green', 'yellow', 'red'] },
  { name: 'Mauritania', code: 'MR', continent: Continent.Africa, similarFlags: ['BN'], colors: ['green', 'yellow'] },
  { name: 'Mauritius', code: 'MU', continent: Continent.Africa, similarFlags: ['RW'], colors: ['red', 'blue', 'yellow', 'green'] },
  { name: 'Morocco', code: 'MA', continent: Continent.Africa, similarFlags: ['VN'], colors: ['red', 'green'] },
  { name: 'Mozambique', code: 'MZ', continent: Continent.Africa, similarFlags: ['ZW'], colors: ['green', 'black', 'yellow', 'white', 'red'] },
  { name: 'Namibia', code: 'NA', continent: Continent.Africa, similarFlags: ['BW'], colors: ['blue', 'red', 'green', 'white', 'yellow'] },
  { name: 'Niger', code: 'NE', continent: Continent.Africa, similarFlags: ['IN', 'CI'], colors: ['orange', 'white', 'green'] },
  { name: 'Nigeria', code: 'NG', continent: Continent.Africa, similarFlags: ['IE', 'CI'], colors: ['green', 'white', 'green'] },
  { name: 'Rwanda', code: 'RW', continent: Continent.Africa, similarFlags: ['MU'], colors: ['blue', 'yellow', 'green'] },
  { name: 'Sao Tome and Principe', code: 'ST', continent: Continent.Africa, similarFlags: ['CV'], colors: ['green', 'yellow', 'red', 'black'] },
  { name: 'Senegal', code: 'SN', continent: Continent.Africa, similarFlags: ['ML', 'GN'], colors: ['green', 'yellow', 'red'] },
  { name: 'Seychelles', code: 'SC', continent: Continent.Africa, similarFlags: ['NA'], colors: ['blue', 'yellow', 'red', 'white', 'green'] },
  { name: 'Sierra Leone', code: 'SL', continent: Continent.Africa, similarFlags: ['GA'], colors: ['green', 'white', 'blue'] },
  { name: 'Somalia', code: 'SO', continent: Continent.Africa, similarFlags: ['VN'], colors: ['blue', 'white'] },
  { name: 'South Africa', code: 'ZA', continent: Continent.Africa, similarFlags: ['LS', 'NL'], colors: ['green', 'yellow', 'black', 'white', 'red', 'blue'] },
  { name: 'South Sudan', code: 'SS', continent: Continent.Africa, similarFlags: ['KE', 'PS'], colors: ['black', 'red', 'green', 'white', 'blue'] },
  { name: 'Sudan', code: 'SD', continent: Continent.Africa, similarFlags: ['PS', 'DZ'], colors: ['red', 'white', 'black', 'green'] },
  { name: 'Tanzania', code: 'TZ', continent: Continent.Africa, similarFlags: ['GQ'], colors: ['green', 'black', 'blue', 'yellow'] },
  { name: 'Togo', code: 'TG', continent: Continent.Africa, similarFlags: ['GH'], colors: ['green', 'yellow', 'red', 'white'] },
  { name: 'Tunisia', code: 'TN', continent: Continent.Africa, similarFlags: ['TR'], colors: ['red', 'white'] },
  { name: 'Uganda', code: 'UG', continent: Continent.Africa, similarFlags: ['ZW'], colors: ['black', 'yellow', 'red'] },
  { name: 'Zambia', code: 'ZM', continent: Continent.Africa, similarFlags: ['CD'], colors: ['green', 'red', 'black', 'orange'] },
  { name: 'Zimbabwe', code: 'ZW', continent: Continent.Africa, similarFlags: ['MZ', 'UG'], colors: ['green', 'yellow', 'red', 'black', 'white'] },
  
  // Asia
  { name: 'Afghanistan', code: 'AF', continent: Continent.Asia, similarFlags: ['IR', 'PK'], colors: ['black', 'red', 'white', 'green'] },
  { name: 'Bahrain', code: 'BH', continent: Continent.Asia, similarFlags: ['QA'], colors: ['red', 'white'] },
  { name: 'Bangladesh', code: 'BD', continent: Continent.Asia, similarFlags: ['JP', 'LY'], colors: ['green', 'red'] },
  { name: 'Bhutan', code: 'BT', continent: Continent.Asia, similarFlags: ['NP'], colors: ['yellow', 'orange', 'white'] },
  { name: 'Brunei', code: 'BN', continent: Continent.Asia, similarFlags: ['MR'], colors: ['yellow', 'white', 'black'] },
  { name: 'Cambodia', code: 'KH', continent: Continent.Asia, similarFlags: ['TH'], colors: ['blue', 'red'] },
  { name: 'China', code: 'CN', continent: Continent.Asia, similarFlags: ['VN'], colors: ['red', 'yellow'] },
  { name: 'Cyprus', code: 'CY', continent: Continent.Asia, similarFlags: ['TR'], colors: ['white', 'yellow'] },
  { name: 'India', code: 'IN', continent: Continent.Asia, similarFlags: ['NE', 'IE'], colors: ['orange', 'white', 'green'] },
  { name: 'Indonesia', code: 'ID', continent: Continent.Asia, similarFlags: ['PL', 'MC'], colors: ['red', 'white'] },
  { name: 'Iran', code: 'IR', continent: Continent.Asia, similarFlags: ['AF', 'TJ'], colors: ['green', 'white', 'red'] },
  { name: 'Iraq', code: 'IQ', continent: Continent.Asia, similarFlags: ['EG', 'SY', 'YE'], colors: ['red', 'white', 'black', 'green'] },
  { name: 'Israel', code: 'IL', continent: Continent.Asia, similarFlags: ['AR', 'UY'], colors: ['blue', 'white'] },
  { name: 'Japan', code: 'JP', continent: Continent.Asia, similarFlags: ['BD'], colors: ['white', 'red'] },
  { name: 'Jordan', code: 'JO', continent: Continent.Asia, similarFlags: ['PS', 'SD'], colors: ['black', 'white', 'green', 'red'] },
  { name: 'Kazakhstan', code: 'KZ', continent: Continent.Asia, similarFlags: ['PA'], colors: ['blue', 'yellow'] },
  { name: 'Kuwait', code: 'KW', continent: Continent.Asia, similarFlags: ['JO', 'PS'], colors: ['green', 'white', 'red', 'black'] },
  { name: 'Kyrgyzstan', code: 'KG', continent: Continent.Asia, similarFlags: ['UZ'], colors: ['red', 'yellow'] },
  { name: 'Laos', code: 'LA', continent: Continent.Asia, similarFlags: ['TH'], colors: ['blue', 'red', 'white'] },
  { name: 'Lebanon', code: 'LB', continent: Continent.Asia, similarFlags: ['AT', 'LV'], colors: ['red', 'white', 'green'] },
  { name: 'Malaysia', code: 'MY', continent: Continent.Asia, similarFlags: ['US', 'LR'], colors: ['blue', 'red', 'white', 'yellow'] },
  { name: 'Maldives', code: 'MV', continent: Continent.Asia, similarFlags: ['TR', 'TN'], colors: ['red', 'green', 'white'] },
  { name: 'Mongolia', code: 'MN', continent: Continent.Asia, similarFlags: ['KG'], colors: ['red', 'blue', 'yellow'] },
  { name: 'Myanmar', code: 'MM', continent: Continent.Asia, similarFlags: ['LT'], colors: ['yellow', 'green', 'red', 'white'] },
  { name: 'Nepal', code: 'NP', continent: Continent.Asia, similarFlags: ['BT'], colors: ['blue', 'red', 'white'] },
  { name: 'North Korea', code: 'KP', continent: Continent.Asia, similarFlags: ['CU'], colors: ['blue', 'red', 'white'] },
  { name: 'Oman', code: 'OM', continent: Continent.Asia, similarFlags: ['AE'], colors: ['red', 'white', 'green'] },
  { name: 'Pakistan', code: 'PK', continent: Continent.Asia, similarFlags: ['TM', 'SA'], colors: ['green', 'white'] },
  { name: 'Palestine', code: 'PS', continent: Continent.Asia, similarFlags: ['JO', 'SD'], colors: ['black', 'white', 'green', 'red'] },
  { name: 'Philippines', code: 'PH', continent: Continent.Asia, similarFlags: ['CZ', 'CL'], colors: ['blue', 'red', 'white', 'yellow'] },
  { name: 'Qatar', code: 'QA', continent: Continent.Asia, similarFlags: ['BH'], colors: ['white', 'maroon'] },
  { name: 'Saudi Arabia', code: 'SA', continent: Continent.Asia, similarFlags: ['PK'], colors: ['green', 'white'] },
  { name: 'Singapore', code: 'SG', continent: Continent.Asia, similarFlags: ['ID', 'PL'], colors: ['red', 'white'] },
  { name: 'South Korea', code: 'KR', continent: Continent.Asia, similarFlags: ['CR'], colors: ['white', 'red', 'blue', 'black'] },
  { name: 'Sri Lanka', code: 'LK', continent: Continent.Asia, similarFlags: ['BD'], colors: ['yellow', 'green', 'orange', 'maroon'] },
  { name: 'Syria', code: 'SY', continent: Continent.Asia, similarFlags: ['EG', 'IQ', 'YE'], colors: ['red', 'white', 'black', 'green'] },
  { name: 'Taiwan', code: 'TW', continent: Continent.Asia, similarFlags: ['SM'], colors: ['red', 'blue', 'white'] },
  { name: 'Tajikistan', code: 'TJ', continent: Continent.Asia, similarFlags: ['IR'], colors: ['red', 'white', 'green'] },
  { name: 'Thailand', code: 'TH', continent: Continent.Asia, similarFlags: ['CR', 'SZ'], colors: ['red', 'white', 'blue'] },
  { name: 'Timor-Leste', code: 'TL', continent: Continent.Asia, similarFlags: ['CU'], colors: ['red', 'yellow', 'black', 'white'] },
  { name: 'Turkey', code: 'TR', continent: Continent.Asia, similarFlags: ['TN', 'MV'], colors: ['red', 'white'] },
  { name: 'Turkmenistan', code: 'TM', continent: Continent.Asia, similarFlags: ['PK'], colors: ['green', 'red'] },
  { name: 'United Arab Emirates', code: 'AE', continent: Continent.Asia, similarFlags: ['OM'], colors: ['red', 'green', 'white', 'black'] },
  { name: 'Uzbekistan', code: 'UZ', continent: Continent.Asia, similarFlags: ['KG'], colors: ['blue', 'white', 'green', 'red'] },
  { name: 'Vietnam', code: 'VN', continent: Continent.Asia, similarFlags: ['CN', 'MA'], colors: ['red', 'yellow'] },
  { name: 'Yemen', code: 'YE', continent: Continent.Asia, similarFlags: ['EG', 'SY', 'IQ'], colors: ['red', 'white', 'black'] },
  
  // Europe
  { name: 'Albania', code: 'AL', continent: Continent.Europe, similarFlags: ['ES'], colors: ['red', 'black'] },
  { name: 'Andorra', code: 'AD', continent: Continent.Europe, similarFlags: ['MD', 'RO'], colors: ['blue', 'yellow', 'red'] },
  { name: 'Armenia', code: 'AM', continent: Continent.Europe, similarFlags: ['CO', 'VE'], colors: ['red', 'blue', 'orange'] },
  { name: 'Austria', code: 'AT', continent: Continent.Europe, similarFlags: ['LV', 'LB'], colors: ['red', 'white'] },
  { name: 'Azerbaijan', code: 'AZ', continent: Continent.Europe, similarFlags: ['TR'], colors: ['blue', 'red', 'green'] },
  { name: 'Belarus', code: 'BY', continent: Continent.Europe, similarFlags: ['BG'], colors: ['red', 'green', 'white'] },
  { name: 'Belgium', code: 'BE', continent: Continent.Europe, similarFlags: ['DE', 'AO'], colors: ['black', 'yellow', 'red'] },
  { name: 'Bosnia and Herzegovina', code: 'BA', continent: Continent.Europe, similarFlags: ['VA'], colors: ['blue', 'yellow', 'white'] },
  { name: 'Bulgaria', code: 'BG', continent: Continent.Europe, similarFlags: ['BY', 'HU'], colors: ['white', 'green', 'red'] },
  { name: 'Croatia', code: 'HR', continent: Continent.Europe, similarFlags: ['NL', 'SI'], colors: ['red', 'white', 'blue'] },
  { name: 'Czech Republic', code: 'CZ', continent: Continent.Europe, similarFlags: ['PH', 'CL'], colors: ['white', 'red', 'blue'] },
  { name: 'Denmark', code: 'DK', continent: Continent.Europe, similarFlags: ['NO', 'SE', 'FI', 'IS'], colors: ['red', 'white'] },
  { name: 'Estonia', code: 'EE', continent: Continent.Europe, similarFlags: ['BW'], colors: ['blue', 'black', 'white'] },
  { name: 'Finland', code: 'FI', continent: Continent.Europe, similarFlags: ['DK', 'SE', 'NO', 'IS'], colors: ['white', 'blue'] },
  { name: 'France', code: 'FR', continent: Continent.Europe, similarFlags: ['NL', 'RU'], colors: ['blue', 'white', 'red'] },
  { name: 'Georgia', code: 'GE', continent: Continent.Europe, similarFlags: ['CH', 'DK'], colors: ['white', 'red'] },
  { name: 'Germany', code: 'DE', continent: Continent.Europe, similarFlags: ['BE', 'AO'], colors: ['black', 'red', 'yellow'] },
  { name: 'Greece', code: 'GR', continent: Continent.Europe, similarFlags: ['AR', 'UY'], colors: ['blue', 'white'] },
  { name: 'Hungary', code: 'HU', continent: Continent.Europe, similarFlags: ['BG', 'IT'], colors: ['red', 'white', 'green'] },
  { name: 'Iceland', code: 'IS', continent: Continent.Europe, similarFlags: ['NO', 'DK', 'FI'], colors: ['blue', 'white', 'red'] },
  { name: 'Ireland', code: 'IE', continent: Continent.Europe, similarFlags: ['IT', 'CI', 'NG'], colors: ['green', 'white', 'orange'] },
  { name: 'Italy', code: 'IT', continent: Continent.Europe, similarFlags: ['HU', 'BG'], colors: ['green', 'white', 'red'] },
  { name: 'Latvia', code: 'LV', continent: Continent.Europe, similarFlags: ['AT', 'LB'], colors: ['red', 'white'] },
  { name: 'Liechtenstein', code: 'LI', continent: Continent.Europe, similarFlags: ['HT'], colors: ['blue', 'red'] },
  { name: 'Lithuania', code: 'LT', continent: Continent.Europe, similarFlags: ['CO', 'EC'], colors: ['yellow', 'green', 'red'] },
  { name: 'Luxembourg', code: 'LU', continent: Continent.Europe, similarFlags: ['NL'], colors: ['red', 'white', 'blue'] },
  { name: 'Malta', code: 'MT', continent: Continent.Europe, similarFlags: ['VA'], colors: ['white', 'red'] },
  { name: 'Moldova', code: 'MD', continent: Continent.Europe, similarFlags: ['RO', 'AD'], colors: ['blue', 'yellow', 'red'] },
  { name: 'Monaco', code: 'MC', continent: Continent.Europe, similarFlags: ['ID', 'PL'], colors: ['red', 'white'] },
  { name: 'Montenegro', code: 'ME', continent: Continent.Europe, similarFlags: ['BE'], colors: ['red', 'gold', 'yellow'] },
  { name: 'Netherlands', code: 'NL', continent: Continent.Europe, similarFlags: ['LU', 'FR', 'RU'], colors: ['red', 'white', 'blue'] },
  { name: 'North Macedonia', code: 'MK', continent: Continent.Europe, similarFlags: ['ES'], colors: ['red', 'yellow'] },
  { name: 'Norway', code: 'NO', continent: Continent.Europe, similarFlags: ['IS', 'DK', 'SE', 'FI'], colors: ['red', 'white', 'blue'] },
  { name: 'Poland', code: 'PL', continent: Continent.Europe, similarFlags: ['ID', 'MC'], colors: ['white', 'red'] },
  { name: 'Portugal', code: 'PT', continent: Continent.Europe, similarFlags: ['CG', 'BO'], colors: ['green', 'red', 'yellow'] },
  { name: 'Romania', code: 'RO', continent: Continent.Europe, similarFlags: ['TD', 'MD'], colors: ['blue', 'yellow', 'red'] },
  { name: 'Russia', code: 'RU', continent: Continent.Europe, similarFlags: ['NL', 'FR', 'SI', 'SK'], colors: ['white', 'blue', 'red'] },
  { name: 'San Marino', code: 'SM', continent: Continent.Europe, similarFlags: ['PA', 'TW'], colors: ['white', 'blue'] },
  { name: 'Serbia', code: 'RS', continent: Continent.Europe, similarFlags: ['SK', 'SI', 'RU'], colors: ['red', 'blue', 'white'] },
  { name: 'Slovakia', code: 'SK', continent: Continent.Europe, similarFlags: ['SI', 'RS', 'RU'], colors: ['white', 'blue', 'red'] },
  { name: 'Slovenia', code: 'SI', continent: Continent.Europe, similarFlags: ['SK', 'RS', 'RU'], colors: ['white', 'blue', 'red'] },
  { name: 'Spain', code: 'ES', continent: Continent.Europe, similarFlags: ['AL'], colors: ['red', 'yellow'] },
  { name: 'Sweden', code: 'SE', continent: Continent.Europe, similarFlags: ['DK', 'NO', 'FI', 'IS'], colors: ['blue', 'yellow'] },
  { name: 'Switzerland', code: 'CH', continent: Continent.Europe, similarFlags: ['DK', 'NO'], colors: ['red', 'white'] },
  { name: 'Ukraine', code: 'UA', continent: Continent.Europe, similarFlags: ['SE', 'CO'], colors: ['blue', 'yellow'] },
  { name: 'United Kingdom', code: 'GB', continent: Continent.Europe, similarFlags: ['AU', 'NZ', 'FJ'], colors: ['red', 'white', 'blue'] },
  { name: 'Vatican City', code: 'VA', continent: Continent.Europe, similarFlags: ['BA', 'MT'], colors: ['yellow', 'white'] },
  
  // North America
  { name: 'Antigua and Barbuda', code: 'AG', continent: Continent.NorthAmerica, similarFlags: ['MK'], colors: ['black', 'blue', 'white', 'yellow', 'red'] },
  { name: 'Bahamas', code: 'BS', continent: Continent.NorthAmerica, similarFlags: ['KI'], colors: ['blue', 'yellow', 'black'] },
  { name: 'Barbados', code: 'BB', continent: Continent.NorthAmerica, similarFlags: ['BT'], colors: ['blue', 'yellow', 'black'] },
  { name: 'Belize', code: 'BZ', continent: Continent.NorthAmerica, similarFlags: ['UY'], colors: ['blue', 'red', 'white'] },
  { name: 'Canada', code: 'CA', continent: Continent.NorthAmerica, similarFlags: ['PE'], colors: ['red', 'white'] },
  { name: 'Costa Rica', code: 'CR', continent: Continent.NorthAmerica, similarFlags: ['TH', 'KR'], colors: ['blue', 'white', 'red'] },
  { name: 'Cuba', code: 'CU', continent: Continent.NorthAmerica, similarFlags: ['KP', 'TL'], colors: ['blue', 'white', 'red'] },
  { name: 'Dominica', code: 'DM', continent: Continent.NorthAmerica, similarFlags: ['BR'], colors: ['green', 'yellow', 'black', 'white', 'red'] },
  { name: 'Dominican Republic', code: 'DO', continent: Continent.NorthAmerica, similarFlags: ['CZ', 'PH'], colors: ['blue', 'red', 'white'] },
  { name: 'El Salvador', code: 'SV', continent: Continent.NorthAmerica, similarFlags: ['NI', 'HN'], colors: ['blue', 'white'] },
  { name: 'Grenada', code: 'GD', continent: Continent.NorthAmerica, similarFlags: ['BD'], colors: ['red', 'yellow', 'green'] },
  { name: 'Guatemala', code: 'GT', continent: Continent.NorthAmerica, similarFlags: ['NI', 'HN'], colors: ['blue', 'white'] },
  { name: 'Haiti', code: 'HT', continent: Continent.NorthAmerica, similarFlags: ['LI'], colors: ['blue', 'red'] },
  { name: 'Honduras', code: 'HN', continent: Continent.NorthAmerica, similarFlags: ['NI', 'SV'], colors: ['blue', 'white'] },
  { name: 'Jamaica', code: 'JM', continent: Continent.NorthAmerica, similarFlags: ['SB'], colors: ['black', 'yellow', 'green'] },
  { name: 'Mexico', code: 'MX', continent: Continent.NorthAmerica, similarFlags: ['IT'], colors: ['green', 'white', 'red'] },
  { name: 'Nicaragua', code: 'NI', continent: Continent.NorthAmerica, similarFlags: ['HN', 'SV'], colors: ['blue', 'white'] },
  { name: 'Panama', code: 'PA', continent: Continent.NorthAmerica, similarFlags: ['CU', 'SM'], colors: ['blue', 'white', 'red'] },
  { name: 'Saint Kitts and Nevis', code: 'KN', continent: Continent.NorthAmerica, similarFlags: ['JM'], colors: ['green', 'yellow', 'black', 'red', 'white'] },
  { name: 'Saint Lucia', code: 'LC', continent: Continent.NorthAmerica, similarFlags: ['PH'], colors: ['blue', 'yellow', 'black', 'white'] },
  { name: 'Saint Vincent and the Grenadines', code: 'VC', continent: Continent.NorthAmerica, similarFlags: ['MX'], colors: ['blue', 'yellow', 'green'] },
  { name: 'Trinidad and Tobago', code: 'TT', continent: Continent.NorthAmerica, similarFlags: ['TO'], colors: ['red', 'white', 'black'] },
  { name: 'United States', code: 'US', continent: Continent.NorthAmerica, similarFlags: ['LR', 'MY'], colors: ['red', 'white', 'blue'] },
  
  // South America
  { name: 'Argentina', code: 'AR', continent: Continent.SouthAmerica, similarFlags: ['UY', 'GR'], colors: ['blue', 'white', 'yellow'] },
  { name: 'Bolivia', code: 'BO', continent: Continent.SouthAmerica, similarFlags: ['GH', 'ET'] },
  { name: 'Brazil', code: 'BR', continent: Continent.SouthAmerica, similarFlags: ['DM'], colors: ['green', 'yellow', 'blue', 'white'] },
  { name: 'Chile', code: 'CL', continent: Continent.SouthAmerica, similarFlags: ['CZ', 'PH'] },
  { name: 'Colombia', code: 'CO', continent: Continent.SouthAmerica, similarFlags: ['EC', 'VE'], colors: ['yellow', 'blue', 'red'] },
  { name: 'Ecuador', code: 'EC', continent: Continent.SouthAmerica, similarFlags: ['CO', 'VE'], colors: ['yellow', 'blue', 'red'] },
  { name: 'Guyana', code: 'GY', continent: Continent.SouthAmerica, similarFlags: ['ZW'], colors: ['green', 'white', 'yellow', 'black', 'red'] },
  { name: 'Paraguay', code: 'PY', continent: Continent.SouthAmerica, similarFlags: ['NL'], colors: ['red', 'white', 'blue'] },
  { name: 'Peru', code: 'PE', continent: Continent.SouthAmerica, similarFlags: ['CA'], colors: ['red', 'white'] },
  { name: 'Suriname', code: 'SR', continent: Continent.SouthAmerica, similarFlags: ['GH'], colors: ['green', 'white', 'red', 'yellow'] },
  { name: 'Uruguay', code: 'UY', continent: Continent.SouthAmerica, similarFlags: ['AR', 'GR'], colors: ['blue', 'white', 'yellow'] },
  { name: 'Venezuela', code: 'VE', continent: Continent.SouthAmerica, similarFlags: ['CO', 'EC'], colors: ['yellow', 'blue', 'red'] },
  
  // Oceania
  { name: 'Australia', code: 'AU', continent: Continent.Oceania, similarFlags: ['NZ', 'GB', 'FJ'], colors: ['blue', 'white', 'red'] },
  { name: 'Fiji', code: 'FJ', continent: Continent.Oceania, similarFlags: ['AU', 'NZ', 'GB'], colors: ['blue', 'white', 'red'] },
  { name: 'Kiribati', code: 'KI', continent: Continent.Oceania, similarFlags: ['BS'], colors: ['red', 'blue', 'white', 'yellow'] },
  { name: 'Marshall Islands', code: 'MH', continent: Continent.Oceania, similarFlags: ['US'], colors: ['blue', 'white', 'orange'] },
  { name: 'Micronesia', code: 'FM', continent: Continent.Oceania, similarFlags: ['KI'], colors: ['blue', 'white'] },
  { name: 'Nauru', code: 'NR', continent: Continent.Oceania, similarFlags: ['SO'], colors: ['blue', 'yellow', 'white'] },
  { name: 'New Zealand', code: 'NZ', continent: Continent.Oceania, similarFlags: ['AU', 'GB', 'FJ'], colors: ['blue', 'red', 'white'] },
  { name: 'Palau', code: 'PW', continent: Continent.Oceania, similarFlags: ['BD'], colors: ['blue', 'yellow'] },
  { name: 'Papua New Guinea', code: 'PG', continent: Continent.Oceania, similarFlags: ['DE'], colors: ['red', 'black', 'yellow', 'white'] },
  { name: 'Samoa', code: 'WS', continent: Continent.Oceania, similarFlags: ['VN'], colors: ['red', 'blue', 'white'] },
  { name: 'Solomon Islands', code: 'SB', continent: Continent.Oceania, similarFlags: ['JM'], colors: ['green', 'blue', 'yellow', 'white'] },
  { name: 'Tonga', code: 'TO', continent: Continent.Oceania, similarFlags: ['TT'], colors: ['red', 'white'] },
  { name: 'Tuvalu', code: 'TV', continent: Continent.Oceania, similarFlags: ['AU', 'NZ'], colors: ['blue', 'white', 'red', 'yellow'] },
  { name: 'Vanuatu', code: 'VU', continent: Continent.Oceania, similarFlags: ['ZA'], colors: ['red', 'green', 'black', 'yellow'] },
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
  
  // If not using similar flags or colors, just return random countries
  if (!shouldIncludeSimilarFlags) {
    return availableCountries
      .filter(c => c.code !== correctAnswer.code)
      .sort(() => 0.5 - Math.random())
      .slice(0, count);
  }
  
  // Get countries with similar flags
  const similarFlagCountries = getCountriesWithSimilarFlags(correctAnswer.code, availableCountries);
  
  // Get countries with similar colors
  const similarColorCountries = getCountriesWithSimilarColors(correctAnswer.code, availableCountries)
    .filter(c => !similarFlagCountries.some(sc => sc.code === c.code));
  
  // Combine similar flag and color countries, prioritizing similar flags
  const similarCountries = [...similarFlagCountries, ...similarColorCountries];
  
  // If we don't have enough similar countries, add some random countries
  if (similarCountries.length < count) {
    const remainingCount = count - similarCountries.length;
    const otherCountries = availableCountries
      .filter(c => 
        c.code !== correctAnswer.code && 
        !similarCountries.some(sc => sc.code === c.code)
      )
      .sort(() => 0.5 - Math.random())
      .slice(0, remainingCount);
    
    return [...similarCountries, ...otherCountries];
  }
  
  // If we have more similar countries than needed, take a random subset
  return similarCountries
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
};
