// StoreMySammaan - Constants File
// Edit these values to customize the website

export const COMPANY = {
  name: "StoreMySammaan",
  tagline: "Massive Self-owned Storage Space in Greater Noida (Delhi NCR). Maximum Security.",
  description: "Secure storage solutions with 24/7 CCTV monitoring and massive self-owned storage space for all your storage needs.",
};

export const CONTACT = {
  phone: "+91 93542 97030",
  whatsapp: "919810013028", // WhatsApp number without + or spaces
  whatsappDisplay: "+91 98100 13028", // Formatted for display
  email: "storemysammaan@gmail.com",
  address: "G-25, Site B, UPSIDC Industrial Area, Surajpur, Greater Noida, Uttar Pradesh 201306",
  city: "Greater Noida",
  // Google Maps embed URL for the storage location
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1753.048019691701!2d77.4969752!3d28.5067581!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cebf65c13c603%3A0x9fdc8cd4a70ad008!2sAarya%20International!5e0!3m2!1sen!2sin!4v1770524245679!5m2!1sen!2sin",
  googleMapsLink: "https://www.google.com/maps/place/Aarya+International/@28.506485,77.498033,16z/data=!4m6!3m5!1s0x390cebf65c13c603:0x9fdc8cd4a70ad008!8m2!3d28.5064846!4d77.4980332!16s%2Fg%2F11j3sdq484?hl=en&entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D",
};

export const SERVICES = [
  {
    id: "household",
    icon: "Home",
    title: "Household Storage",
    description: "Secure space for furniture, appliances, and personal belongings during relocation or renovation.",
  },
  {
    id: "commercial",
    icon: "Building2",
    title: "Commercial Storage",
    description: "Flexible storage solutions for business inventory, equipment, and seasonal stock.",
  },
  {
    id: "vehicle",
    icon: "Car",
    title: "Vehicle Storage",
    description: "Protected parking for cars, motorcycles, and recreational vehicles with 24/7 access.",
  },
  {
    id: "bulk",
    icon: "Package",
    title: "Bulk Industrial Storage",
    description: "Large-scale storage for raw materials, manufacturing goods, and industrial equipment.",
  },
];

export const SECURITY_FEATURES = [
  {
    id: "cctv",
    icon: "Cctv",
    title: "CCTV Surveillance",
    description: "HD cameras covering every corner and real-time monitoring.",
  },
  {
    id: "monitoring",
    icon: "Eye",
    title: "24/7 Monitoring",
    description: "Surveillance by trained professionals. Never a moment unguarded.",
  },
  {
    id: "fire-safety",
    icon: "Flame",
    title: "Fire Safety Systems",
    description: "Advanced fire suppression systems to protect your valuable assets.",
  },
];

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Security", href: "#security" },
  { label: "Contact", href: "#contact" },
];

export const SEO = {
  title: "StoreMySammaan | Reliable Storage Space in Greater Noida",
  description: "Looking for a safe storage space in Greater Noida (Delhi NCR)? StoreMySamaan offers massive, secure storage solutions for personal and business use. Our facility in Surajpur (UPSIDC Site B) is equipped for 1) Household Storage (furniture, luggage during moves), 2) Commercial Storage (inventory, documents), 3) Vehicle Storage (cars, bikes, etc), and 4) Bulk Industrial Storage. We are a self-owned facility, meaning better accountability and strictly controlled access. Features include 24/7 camera surveillance, pest control, and dedicated key account managers. We provide flexible short-term and long-term storage rental plans. Contact us today for your requirements. Call +91 93542 97030.",
  keywords: "storage space greater noida, commercial storage greater noida, household storage solutions greater noida, industrial storage solutions greater noida, storage solutions greater noida, storage units greater noida, bike storage space greater noida, self storage facility greater noida",
  ogImage: "/og-image.jpg",
};

// JSON-LD Structured Data for SelfStorage LocalBusiness
export const JSONLD_DATA = {
  "@context": "https://schema.org",
  "@type": "SelfStorage",
  "name": "StoreMySammaan",
  "image": "/og-image.jpg",
  "url": "https://storemysammaan.in",
  "telephone": "+91-9354297030",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "G-25, Site B, UPSIDC Industrial Area",
    "addressLocality": "Surajpur, Greater Noida",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "201306",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "28.506485",
    "longitude": "77.498033"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "09:00",
    "closes": "19:00"
  },
  "sameAs": [
    "https://wa.me/919810013028"
  ]
};
