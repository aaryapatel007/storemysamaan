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
  title: `StoreMySammaan - Storage & Safe Warehouse Space in ${CONTACT.city}`,
  description: `Secure storage solutions in ${CONTACT.city}. 24/7 CCTV monitoring, advanced fire safety systems, and massive self-owned storage space for household, commercial, vehicle, and bulk storage.`,
  keywords: "industrial storage, household storage, commercial storage, vehicle storage, bulk storage, warehouse space, safe storage, CCTV security, 24/7 monitoring, storage solutions",
};
