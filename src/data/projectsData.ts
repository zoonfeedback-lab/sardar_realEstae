export interface PaymentPlan {
  totalPrice: string;
  downPayment: string;
  monthlyInstallment: string;
  duration: string;
}

export interface UnitDetails {
  id: string; // e.g. "2-bed"
  title: string;
  subtext: string;
  gallery: string[];
  floorPlanImage: string;
  specs: {
    bedrooms: number;
    bathrooms: string; // e.g. "2-3"
    kitchens: number;
    area: string;
  };
  paymentPlan: PaymentPlan;
  features: string[];
  description: string;
}

export interface CategoryData {
  id: string; // e.g. "high-rise"
  title: string;
  description: string;
  image: string;
  units: UnitDetails[];
}

export const projectsData: Record<string, CategoryData> = {
  "high-rise": {
    id: "high-rise",
    title: "High Rise Apartments",
    description: "Modern vertical living with premium amenities.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    units: [
      {
        id: "1-bed",
        title: "1 Bed Apartment",
        subtext: "Compact luxury living in high-rise development",
        gallery: [
          "https://images.unsplash.com/photo-1502672260266-1c1de2d9d000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        ],
        floorPlanImage: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        specs: { bedrooms: 1, bathrooms: "1", kitchens: 1, area: "650 sq ft" },
        paymentPlan: {
          totalPrice: "PKR 1.2 Crore",
          downPayment: "PKR 30 Lac",
          monthlyInstallment: "PKR 1.5 Lac",
          duration: "3 Years",
        },
        features: ["Gated community", "Parking", "Security", "High-speed elevators"],
        description: "Perfect for young professionals or couples, this 1-bedroom apartment offers a smart layout with modern finishes, ensuring comfort and convenience.",
      },
      {
        id: "2-bed",
        title: "2 Bed Apartment",
        subtext: "Spacious modern layout with balcony",
        gallery: [
          "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        ],
        floorPlanImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        specs: { bedrooms: 2, bathrooms: "2-3", kitchens: 1, area: "1200 sq ft" },
        paymentPlan: {
          totalPrice: "PKR 2.5 Crore",
          downPayment: "PKR 50 Lac",
          monthlyInstallment: "PKR 2.5 Lac",
          duration: "3 Years",
        },
        features: ["Gated community", "Reserved Parking", "24/7 Security", "Gym Access", "Balcony"],
        description: "Experience luxury living in our 2-bedroom apartments. Designed for small families, it features a spacious living area, master suite, and a modern kitchen.",
      },
      {
        id: "3-bed",
        title: "3 Bed Apartment",
        subtext: "Expansive luxury suite with panoramic views",
        gallery: [
          "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        ],
        floorPlanImage: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        specs: { bedrooms: 3, bathrooms: "3-4", kitchens: 1, area: "1800 sq ft" },
        paymentPlan: {
          totalPrice: "PKR 4 Crore",
          downPayment: "PKR 80 Lac",
          monthlyInstallment: "PKR 4 Lac",
          duration: "3 Years",
        },
        features: ["Panoramic views", "Servant quarter", "Premium finishes", "Reserved Parking", "Pool Access"],
        description: "Our 3-bedroom premium apartments offer an expansive layout, ideal for larger families looking for an upscale lifestyle in the heart of the city.",
      }
    ]
  },
  "hotel-apartments": {
    id: "hotel-apartments",
    title: "Hotel Apartments",
    description: "Fully serviced suites offering world-class hospitality and passive income.",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    units: [
      {
        id: "1-kanal",
        title: "1 Kanal Serviced Suite",
        subtext: "Premium serviced living with guaranteed rental yield",
        gallery: [
          "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
          "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        ],
        floorPlanImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        specs: { bedrooms: 1, bathrooms: "1", kitchens: 1, area: "4500 sq ft" },
        paymentPlan: {
          totalPrice: "PKR 6 Crore",
          downPayment: "PKR 1.5 Crore",
          monthlyInstallment: "PKR 6 Lac",
          duration: "4 Years",
        },
        features: ["Room service", "Concierge", "Spa access", "Valet parking", "Guaranteed rental income"],
        description: "Invest in our 1 Kanal Hotel Apartments for a blend of luxury living and lucrative investment returns, managed by a top-tier hospitality brand.",
      },
      {
        id: "2-kanal",
        title: "2 Kanal Executive Suite",
        subtext: "Unmatched luxury with expansive entertainment spaces",
        gallery: [
          "https://images.unsplash.com/photo-1590490359683-658d34c811b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        ],
        floorPlanImage: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        specs: { bedrooms: 2, bathrooms: "2", kitchens: 1, area: "9000 sq ft" },
        paymentPlan: {
          totalPrice: "PKR 12 Crore",
          downPayment: "PKR 3 Crore",
          monthlyInstallment: "PKR 12 Lac",
          duration: "4 Years",
        },
        features: ["Private lounge", "Executive club access", "Dedicated butler", "Premium concierge"],
        description: "The 2 Kanal Executive Suite offers a palatial feel with high-end furnishings, perfect for high-net-worth individuals seeking prestige.",
      }
    ]
  },
  "farm-houses": {
    id: "farm-houses",
    title: "Farm Houses",
    description: "Expansive green estates for weekend retreats and sustainable living.",
    image: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    units: [
      {
        id: "4-kanal",
        title: "4 Kanal Farm House",
        subtext: "Your private green sanctuary away from the city noise",
        gallery: [
          "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        ],
        floorPlanImage: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        specs: { bedrooms: 4, bathrooms: "4", kitchens: 2, area: "18000 sq ft" },
        paymentPlan: {
          totalPrice: "PKR 15 Crore",
          downPayment: "PKR 3 Crore",
          monthlyInstallment: "PKR 15 Lac",
          duration: "3 Years",
        },
        features: ["Organic garden", "Private pool", "Stable", "Boundary wall", "24/7 Security patrol"],
        description: "Escape to nature with our 4 Kanal Farm Houses. These estates offer vast open spaces, custom-built homes, and the tranquility you desire.",
      },
      {
        id: "8-kanal",
        title: "8 Kanal Grand Estate",
        subtext: "The ultimate luxury rural estate",
        gallery: [
          "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        ],
        floorPlanImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        specs: { bedrooms: 6, bathrooms: "7", kitchens: 3, area: "36000 sq ft" },
        paymentPlan: {
          totalPrice: "PKR 28 Crore",
          downPayment: "PKR 7 Crore",
          monthlyInstallment: "PKR 25 Lac",
          duration: "3 Years",
        },
        features: ["Tennis court", "Large private pool", "Guest house", "Expansive lawns", "Helipad area"],
        description: "The pinnacle of our farm house offerings, the 8 Kanal Grand Estate provides an unmatched canvas to build your dream mansion in a secure environment.",
      }
    ]
  }
};
