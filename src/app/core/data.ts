export interface Namespace {
  id: string;
  name: string;
  services: ServiceQuery[];
}

export interface ServiceQuery {
  id: string;
  name: string;
  description: string;
  url: string;
  method: string;
  status: number;
}

export interface ServiceData {
  id: string;
  ping: PingData[];
  incidents: IncidentData[];
}

export interface PingData {
  date: string;
  lastPing?: number;
  ping?: number[];
  pingAvg?: number;
  operational: boolean;
  location: string;
}

export interface IncidentData {
  startTime: string;
  endTime?: string;
}

export interface ApiResponse {
  namespace: Namespace;
  services: ServiceData[];
}

export interface Status {
  date: number;
  locations: StatusLocation[];
  state?: 'incident' | 'operational' | 'no-data';
}

export interface StatusLocation {
  location: string;
  ping: number;
}

export const LOCATIONS: { [location: string]: string } = {
  CBR: 'Canberra, Australia',
  LAD: 'Luanda, Angola',
  EZE: 'Buenos Aires, Argentina',
  EVN: 'Yerevan, Armenia',
  ADL: 'Adelaide, Australia',
  BNE: 'Brisbane, Australia',
  MEL: 'Melbourne, Australia',
  SYD: 'Sydney, Australia',
  VIE: 'Vienna, Austria',
  BAH: 'Manama, Bahrain',
  CGP: 'Chittagong, Bangladesh',
  DAC: 'Dhaka, Bangladesh',
  JSR: 'Jashore, Bangladesh',
  BRU: 'Brussels, Belgium',
  VCP: 'Campinas, Brazil',
  FOR: 'Fortaleza, Brazil',
  POA: 'Porto Alegre, Brazil',
  GIG: 'Rio de Janeiro, Brazil',
  SSA: 'Salvador, Brazil',
  GRU: 'São Paulo, Brazil',
  BWN: 'Bandar Seri Begawan, Brunei',
  SOF: 'Sofia, Bulgaria',
  PNH: 'Phnom Penh, Cambodia',
  YYC: 'Calgary, AB, Canada',
  YUL: 'Montréal, QC, Canada',
  YXE: 'Saskatoon, SK, Canada',
  YYZ: 'Toronto, ON, Canada',
  YVR: 'Vancouver, BC, Canada',
  YWG: 'Winnipeg, MB, Canada',
  ARI: 'Arica, Chile',
  SCL: 'Santiago, Chile',
  HKG: 'Hong Kong, China',
  MFM: 'Macau, China',
  TPE: 'Taipei, TW, China',
  BOG: 'Bogotá, Colombia',
  ZAG: 'Zagreb, Croatia',
  LCA: 'Nicosia, Cyprus',
  PRG: 'Prague, Czech Republic',
  CPH: 'Copenhagen, Denmark',
  JIB: 'Djibouti City, Djibouti',
  UIO: 'Quito, Ecuador',
  TLL: 'Tallinn, Estonia',
  HEL: 'Helsinki, Finland',
  MRS: 'Marseille, France',
  CDG: 'Paris, France',
  RUN: 'Réunion, France',
  TBS: 'Tbilisi, Georgia',
  TXL: 'Berlin, Germany',
  DUS: 'Düsseldorf, Germany',
  FRA: 'Frankfurt, Germany',
  HAM: 'Hamburg, Germany',
  MUC: 'Munich, Germany',
  ATH: 'Athens, Greece',
  SKG: 'Thessaloniki, Greece',
  GUA: 'Guatemala City, Guatemala',
  TGU: 'Tegucigalpa, Honduras',
  BUD: 'Budapest, Hungary',
  KEF: 'Reykjavík, Iceland',
  BLR: 'Bangalore, India',
  HYD: 'Hyderabad, India',
  CCU: 'Kolkata, India',
  BOM: 'Mumbai, India',
  NAG: 'Nagpur, India',
  DEL: 'New Delhi, India',
  CGK: 'Jakarta, Indonesia',
  BGW: 'Baghdad, Iraq',
  ORK: 'Cork, Ireland',
  DUB: 'Dublin, Ireland',
  TLV: 'Tel Aviv, Israel',
  MXP: 'Milan, Italy',
  FCO: 'Rome, Italy',
  KIX: 'Osaka, Japan',
  NRT: 'Tokyo, Japan',
  AMM: 'Amman, Jordan',
  MBA: 'Mombasa, Kenya',
  NBO: 'Nairobi, Kenya',
  KWI: 'Kuwait City, Kuwait',
  VTE: 'Vientiane, Laos',
  RIX: 'Riga, Latvia',
  VNO: 'Vilnius, Lithuania',
  LUX: 'Luxembourg City, Luxembourg',
  TNR: 'Antananarivo, Madagascar',
  JHB: 'Johor Bahru, Malaysia',
  KUL: 'Kuala Lumpur, Malaysia',
  MLE: 'Malé, Maldives',
  MRU: 'Port Louis, Mauritius',
  MEX: 'Mexico City, Mexico',
  QRO: 'Querétaro, Mexico',
  KIV: 'Chișinău, Moldova',
  ULN: 'Ulaanbaatar, Mongolia',
  CMN: 'Casablanca, Morocco',
  MPM: 'Maputo, Mozambique',
  RGN: 'Yangon, Myanmar',
  KTM: 'Kathmandu, Nepal',
  NOU: 'Noumea, New Caledonia',
  AKL: 'Auckland, New Zealand',
  LOS: 'Lagos, Nigeria',
  OSL: 'Oslo, Norway',
  MCT: 'Muscat, Oman',
  ISB: 'Islamabad, Pakistan',
  KHI: 'Karachi, Pakistan',
  LHE: 'Lahore, Pakistan',
  ZDM: 'Ramallah, Palestine',
  PTY: 'Panama City, Panama',
  ASU: 'Asunción, Paraguay',
  LIM: 'Lima, Peru',
  CEB: 'Cebu, Philippines',
  MNL: 'Manila, Philippines',
  WAW: 'Warsaw, Poland',
  LIS: 'Lisbon, Portugal',
  DOH: 'Doha, Qatar',
  OTP: 'Bucharest, Romania',
  DME: 'Moscow, Russia',
  LED: 'Saint Petersburg, Russia',
  KGL: 'Kigali, Rwanda',
  RUH: 'Riyadh, Saudi Arabia',
  DKR: 'Dakar, Senegal',
  SIN: 'Singapore, Singapore',
  CPT: 'Cape Town, South Africa',
  DUR: 'Durban, South Africa',
  JNB: 'Johannesburg, South Africa',
  ICN: 'Seoul, South Korea',
  BCN: 'Barcelona, Spain',
  MAD: 'Madrid, Spain',
  CMB: 'Colombo, Sri Lanka',
  PBM: 'Paramaribo, Suriname',
  GOT: 'Göteborg, Sweden',
  ARN: 'Stockholm, Sweden',
  GVA: 'Geneva, Switzerland',
  ZRH: 'Zürich, Switzerland',
  DAR: 'Dar Es Salaam, Tanzania',
  BKK: 'Bangkok, Thailand',
  AMS: 'Amsterdam, The Netherlands',
  IST: 'Istanbul, Turkey',
  KBP: 'Kyiv, Ukraine',
  DXB: 'Dubai, United Arab Emirates',
  EDI: 'Edinburgh, United Kingdom',
  LHR: 'London, United Kingdom',
  MAN: 'Manchester, United Kingdom',
  IAD: 'Ashburn, VA, United States',
  ATL: 'Atlanta, GA, United States',
  BOS: 'Boston, MA, United States',
  BUF: 'Buffalo, NY, United States',
  CLT: 'Charlotte, NC, United States',
  ORD: 'Chicago, IL, United States',
  CMH: 'Columbus, OH, United States',
  DFW: 'Dallas/Fort Worth, TX, United States',
  DEN: 'Denver, CO, United States',
  DTW: 'Detroit, MI, United States',
  HNL: 'Honolulu, HI, United States',
  IAH: 'Houston, TX, United States',
  JAX: 'Jacksonville, FL, United States',
  MCI: 'Kansas City, MO, United States',
  LAS: 'Las Vegas, NV, United States',
  LAX: 'Los Angeles, CA, United States',
  MFE: 'McAllen, TX, United States',
  MEM: 'Memphis, TN, United States',
  MIA: 'Miami, FL, United States',
  MSP: 'Minneapolis, MN, United States',
  BNA: 'Nashville, TN, United States',
  EWR: 'Newark, NJ, United States',
  OMA: 'Omaha, NE, United States',
  PHL: 'Philadelphia, PA, United States',
  PHX: 'Phoenix, AZ, United States',
  PIT: 'Pittsburgh, PA, United States',
  PDX: 'Portland, OR, United States',
  RIC: 'Richmond, VA, United States',
  SMF: 'Sacramento, CA, United States',
  SLC: 'Salt Lake City, UT, United States',
  SJC: 'San Jose, CA, United States',
  SEA: 'Seattle, WA, United States',
  IND: 'South Bend, IN, United States',
  STL: 'St. Louis, MO, United States',
  TLH: 'Tallahassee, FL, United States',
  TPA: 'Tampa, FL, United States',
  HAN: 'Hanoi, Vietnam',
}
