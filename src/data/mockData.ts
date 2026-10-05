export interface Device {
  id: string;
  name: string;
  category: 'laptop' | 'smartphone' | 'printer' | 'components' | 'tablet';
  condition: string;
  repairScore: number;
  carbonOffsetKg: number;
  marketValue: number;
  salvageValue: number;
  status: 'triage' | 'diagnosing' | 'quote_pending' | 'repairing' | 'completed' | 'recycled';
  image: string;
  serialNumber: string;
  batteryStatus: 'good' | 'degraded' | 'swollen_hazard';
  recommendedAction: 'repair' | 'reuse' | 'donate' | 'recover' | 'recycle';
  intakeDate: string;
  materials: {
    goldGrams: number;
    copperGrams: number;
    aluminumGrams: number;
    rareEarthsGrams: number;
  };
}

export const SAMPLE_DEVICES: Device[] = [
  {
    id: 'ECL-2026-8812',
    name: 'Dell Inspiron 15 5000 Series',
    category: 'laptop',
    condition: 'Minor chassis scuffs, DC jack loose, display operational',
    repairScore: 88,
    carbonOffsetKg: 52.4,
    marketValue: 240,
    salvageValue: 85,
    status: 'repairing',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1WXLJstGLmokurvfPWe_XtURT6juwSP5t80UvvsAak5fDFtj3IuZvxgHJ1OTLca5MdT4zMQixdT029J7rmOq4QRlGyvoa3FO3dBd6Ama3l552PAe4RfxZ8NhWJVpYy50pcHbhJ95aoVId0B37T2YFIsNnqPunszkvJwl65UbSTUb4IHHEbLW3FAKez66zjY2UfMTVLKxtgPtaa-r9hw6rj3IqFBMh5KcoXnhCS1oEQN8Ao5JCcZ_BG53Aol',
    serialNumber: 'DL-INSP-99214X',
    batteryStatus: 'good',
    recommendedAction: 'repair',
    intakeDate: 'Oct 3, 2026',
    materials: {
      goldGrams: 0.045,
      copperGrams: 210,
      aluminumGrams: 980,
      rareEarthsGrams: 1.8,
    },
  },
  {
    id: 'ECL-2026-7391',
    name: 'Samsung Galaxy S21 5G 128GB',
    category: 'smartphone',
    condition: 'Hairline front glass crack, digitizer responsive, battery at 79%',
    repairScore: 82,
    carbonOffsetKg: 34.2,
    marketValue: 195,
    salvageValue: 60,
    status: 'quote_pending',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1UNH9Umz9RVJa7YnoJj4bdCUMbH-CPjXWQptxcieGxZznD3YRJjm1eMXQwvpyeDouuVJtmNVaotr_AfeXE0w28p0vDOA1jcrdhbUNixJwDJsx4Gx49cowQQkk8LAHOwIrQI5jlxLt1mjSDq0xeHZRhF-iOboBLWO6SjeYTnfLE8s4vXQuZREhpewZ8x5YHZnoSBg4UZOfF_0Cncs0cTorAamsG1G8EXZh-TZQn1KE2gq7ubFMaqNlCcvQQE',
    serialNumber: 'SM-G991B-7729',
    batteryStatus: 'degraded',
    recommendedAction: 'repair',
    intakeDate: 'Oct 4, 2026',
    materials: {
      goldGrams: 0.024,
      copperGrams: 42,
      aluminumGrams: 110,
      rareEarthsGrams: 0.65,
    },
  },
  {
    id: 'ECL-2026-6104',
    name: 'Canon PIXMA Inkjet Wireless',
    category: 'printer',
    condition: 'Dried print head, paper feed roller intact, power supply good',
    repairScore: 64,
    carbonOffsetKg: 28.6,
    marketValue: 75,
    salvageValue: 35,
    status: 'triage',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1XWUAQ_MxRHoP2k3hKtW-SF_S6cE91alHUxrI4gtzpScVrk31YG0RMu9sCl5cE4ZEaOXmlmjTIeC70qAgxRH8KIPRYjWt95AKS6aGaz7jfYTa3tZ9aRaFI4oWreQP7yczLSz3dLybltPtYPaBUybaNsZWbhmgeZsIq9kwW_cBMqpeMnSvIvCM-YLtSURiOfMTZVLa-RJrH1WC209Y3nwPUIfQ0m-oQLWO4_vn3F-2B37Oarp5RRNX82MfTJ',
    serialNumber: 'CN-PX490-2810',
    batteryStatus: 'good',
    recommendedAction: 'reuse',
    intakeDate: 'Oct 2, 2026',
    materials: {
      goldGrams: 0.012,
      copperGrams: 140,
      aluminumGrams: 320,
      rareEarthsGrams: 0.22,
    },
  },
  {
    id: 'ECL-2026-9051',
    name: 'DDR4 RAM Modules & ATX Motherboard Core',
    category: 'components',
    condition: 'Obsolete chipset, high concentration of gold pins and copper traces',
    repairScore: 31,
    carbonOffsetKg: 19.8,
    marketValue: 45,
    salvageValue: 55,
    status: 'completed',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1VXyha_eCuoat0NGxoi7cd6IQHGQ01L0qGyRw2honDpparx-f9sgspvwRPe-2afdDtKArqZ7sQjiHnn9zhovpTo6L1TE9U8D0xn2wV_0RzpC-ADZvJ8n1TaFxO-UJSNjkW1mwEl-nbQmRZmfKzoL271IePzrSzSVEFHowLU1f5avvSWwF60K_y_qfEQdW4UIO-zyPUfpoT9TlIx3LwzSeG_f8fz7XJbHpnm1po4lOQ8fr0FnQrQa7WoX4tk',
    serialNumber: 'HW-MB-SALVAGE-09',
    batteryStatus: 'good',
    recommendedAction: 'recover',
    intakeDate: 'Sep 29, 2026',
    materials: {
      goldGrams: 0.082,
      copperGrams: 480,
      aluminumGrams: 260,
      rareEarthsGrams: 2.1,
    },
  },
];

export interface CommunityHub {
  id: string;
  name: string;
  type: 'Repair Cafe' | 'Certified Drop-off Locker' | 'Industrial Recycler' | 'Refurbish Center';
  address: string;
  distanceKm: number;
  openNow: boolean;
  hours: string;
  rating: number;
  reviewsCount: number;
  acceptedItems: string[];
  capacityPercentage: number;
  latitude: number;
  longitude: number;
}

export const COMMUNITY_HUBS: CommunityHub[] = [
  {
    id: 'hub-1',
    name: 'Eclader Smart Hub - Colombo Central',
    type: 'Certified Drop-off Locker',
    address: '42 Galle Road, Kollupitiya, Colombo 03',
    distanceKm: 1.4,
    openNow: true,
    hours: '24/7 Smart Locker Access',
    rating: 4.9,
    reviewsCount: 328,
    acceptedItems: ['Smartphones', 'Laptops', 'Tablets', 'Chargers', 'Batteries'],
    capacityPercentage: 42,
    latitude: 6.9068,
    longitude: 79.8516,
  },
  {
    id: 'hub-2',
    name: 'GreenTech Community Repair Cafe',
    type: 'Repair Cafe',
    address: '18 Horton Place, Cinnamon Gardens, Colombo 07',
    distanceKm: 2.8,
    openNow: true,
    hours: 'Open 9:00 AM - 6:00 PM',
    rating: 4.8,
    reviewsCount: 194,
    acceptedItems: ['Laptops', 'Audio gear', 'Small kitchen appliances', 'Monitors'],
    capacityPercentage: 68,
    latitude: 6.9147,
    longitude: 79.8732,
  },
  {
    id: 'hub-3',
    name: 'Apex Circular Metals & E-Waste Smelter',
    type: 'Industrial Recycler',
    address: 'Industrial Zone B, Biyagama',
    distanceKm: 14.5,
    openNow: true,
    hours: 'Mon-Sat 8:00 AM - 5:00 PM',
    rating: 4.7,
    reviewsCount: 88,
    acceptedItems: ['Server racks', 'Industrial PCBs', 'Lithium packs', 'Bulk e-waste'],
    capacityPercentage: 35,
    latitude: 6.9422,
    longitude: 79.9921,
  },
  {
    id: 'hub-4',
    name: 'Youth In Tech Refurbish Collective',
    type: 'Refurbish Center',
    address: '88 High Level Road, Nugegoda',
    distanceKm: 5.2,
    openNow: false,
    hours: 'Opens tomorrow 9:30 AM',
    rating: 4.9,
    reviewsCount: 142,
    acceptedItems: ['Laptops for students', 'Educational tablets', 'Keyboards', 'Mice'],
    capacityPercentage: 55,
    latitude: 6.8722,
    longitude: 79.8912,
  },
];

export interface Technician {
  id: string;
  name: string;
  title: string;
  specialty: string;
  rating: number;
  completedRepairs: number;
  hourlyRate: number;
  availableSlot: string;
  verifiedBadge: boolean;
  avatar: string;
}

export const CERTIFIED_TECHNICIANS: Technician[] = [
  {
    id: 'tech-1',
    name: 'Kavinda Perera',
    title: 'Senior Micro-Soldering Specialist',
    specialty: 'Motherboard level repair, Dell/MacBook board diagnostics',
    rating: 4.95,
    completedRepairs: 642,
    hourlyRate: 35,
    availableSlot: 'Today, 2:30 PM',
    verifiedBadge: true,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
  },
  {
    id: 'tech-2',
    name: 'Dilini Senanayake',
    title: 'Display & Battery Calibration Tech',
    specialty: 'AMOLED restoration, zero-waste lithium disposal certification',
    rating: 4.92,
    completedRepairs: 489,
    hourlyRate: 28,
    availableSlot: 'Tomorrow, 10:00 AM',
    verifiedBadge: true,
    avatar: 'https://lh3.googleusercontent.com/aida/AEtjO1UrbfprBtuADsR3vtnBKYqL-9F9s_lDl-kuZK2wF-JaeUdO8eOQn3Fv6WBllDDBswWN3tKybUc3PsyLGyuPtBj9gGCG95rlOCov_Gp4qolF6efFTuBSMpM-Ny_vhC7p3hNrPTwjx9XBp-EaRndT26diWqXsLLn_QmMPxiRaEUCvRa21qabKBBZb5FmOluZmE2d34VMxPxXQG4d7hkluhKEFYyvlLX7Tn3Ob78t1cjf3Fl-ZlG7YvorUSuTK',
  },
  {
    id: 'tech-3',
    name: 'Arun Nadarajah',
    title: 'Peripheral & Firmware Engineer',
    specialty: 'Inkjet piezoelectric recovery, robotic pick-and-place rework',
    rating: 4.88,
    completedRepairs: 310,
    hourlyRate: 30,
    availableSlot: 'Today, 4:00 PM',
    verifiedBadge: true,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80',
  },
];
