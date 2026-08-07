export const site = {
  name: "Approved Patriot Realty",
  domain: "patriotrealtyfl.com",
  url: "https://www.patriotrealtyfl.com",
  email: "vance@patriotrealtyfl.com",
  phone: "386-456-8000",
  tagline: "Florida real estate guidance for buyers, sellers, Veterans, and families relocating to the Sunshine State.",
  nav: [
    { href: "/", label: "Home" },
    { href: "/buy", label: "Buy" },
    { href: "/sell", label: "Sell" },
    { href: "/relocate", label: "Relocate" },
    { href: "/areas", label: "Areas" },
    { href: "/get-approved", label: "Get Approved" },
    { href: "/va-home-loan-authority", label: "VA Authority" },
    { href: "/mortgage-calculator", label: "Mortgage Calculator" },
    { href: "/va-home-loan-authority-youtube", label: "YouTube" },
    { href: "/cathy-heighter", label: "Meet Cathy" },
    { href: "/join-our-team", label: "Join Our Team" },
    { href: "/va-home-buying-florida", label: "VA Buyers" },
    { href: "/trusted-partners", label: "Partners" }
  ]
};

export const partners = [
  {
    name: "Approved Mortgage Source",
    role: "Mortgage lending",
    href: "https://www.approvedfl.com/",
    text: "Explore VA, FHA, conventional, USDA, purchase, and refinance options with a separately licensed mortgage company serving Florida and Georgia.",
    disclosure: "Approved Mortgage Source, LLC — NMLS #836792"
  },
  {
    name: "Veterans Approved Title",
    role: "Title and settlement services",
    href: "https://approvedclosings.com/",
    portalHref: "https://connect.qualia.com/",
    text: "Learn about title, escrow, and real estate settlement support for Florida buyers, sellers, agents, and lenders. Use the Qualia portal to request a quote, place a title order, or access an existing closing.",
    disclosure: "Veterans Approved Title, LLC"
  }
];

export const services = [
  {
    title: "Buyer Strategy",
    text: "Compare neighborhoods, price ranges, inspection priorities, and offer options before you tour."
  },
  {
    title: "Listing Prep",
    text: "Plan pricing, presentation, photography, launch timing, and negotiation posture from day one."
  },
  {
    title: "Relocation Support",
    text: "Get a practical Florida move plan with area shortlists, commute notes, and purchase timelines."
  }
];

export const areas = [
  "Tampa Bay",
  "Sarasota",
  "Orlando",
  "Jacksonville",
  "Fort Myers",
  "Palm Coast"
];

export const pages = {
  buy: {
    title: "Buy a Home in Florida With Confidence",
    metaTitle: "Buy a Home in Florida",
    eyebrow: "For buyers",
    intro: "Search for a Florida home with a practical plan for neighborhoods, financing, inspections, offers, and closing.",
    sections: [
      {
        heading: "Start With The Fit",
        body: "Define location, payment range, lifestyle needs, insurance considerations, and inspection priorities before the search gets noisy. If you need financing, compare options with a licensed lender before touring seriously.",
        links: [
          { href: "/get-approved", label: "Get approved for a home loan" },
          { href: "/va-home-buying-florida", label: "Explore the Florida VA home-buying path" },
          { href: "/trusted-partners", label: "Meet our lending and title partners" }
        ]
      },
      {
        heading: "Tour With A Plan",
        body: "Use a clear property scorecard for condition, neighborhood fit, resale strength, and negotiation leverage."
      },
      {
        heading: "Offer With Context",
        body: "Review comparable sales, seller signals, contingencies, and closing timelines so your offer is serious without being careless."
      }
    ]
  },
  sell: {
    title: "Sell Your Florida Home With a Strong Launch",
    metaTitle: "Sell Your Florida Home",
    eyebrow: "For sellers",
    intro: "Prepare, price, market, and negotiate your Florida home sale with a clear strategy from listing through closing.",
    videoEmbed: {
      src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F919886410691756%2F&show_text=false&width=476&t=0",
      title: "Selling your home with Approved Patriot Realty"
    },
    sections: [
      {
        heading: "Pricing Review",
        body: "Evaluate recent sales, active competition, condition, upgrades, and local buyer demand before listing."
      },
      {
        heading: "Presentation Plan",
        body: "Prioritize high-impact prep, photography, listing copy, and showing flow so the home is easy to understand."
      },
      {
        heading: "Negotiation Support",
        body: "Compare offers beyond price, including financing strength, contingencies, inspection risk, and closing certainty.",
        links: [{ href: "/trusted-partners", label: "Learn about title and closing support" }]
      }
    ]
  },
  relocate: {
    title: "Relocate to Florida With a Local Plan",
    metaTitle: "Relocate to Florida",
    eyebrow: "For movers",
    intro: "A calmer way to compare Florida communities, timelines, and homes from out of town.",
    sections: [
      {
        heading: "Area Shortlist",
        body: "Narrow the search by commute, school preferences, beach access, lifestyle pace, budget, and insurance needs."
      },
      {
        heading: "Remote Search",
        body: "Use virtual previews, neighborhood notes, and clear property comparisons before traveling for final tours."
      },
      {
        heading: "Move Timeline",
        body: "Coordinate financing, travel, inspections, closing, utilities, and move-in milestones with fewer surprises."
      }
    ]
  },
  areas: {
    title: "Explore Florida Real Estate Markets",
    metaTitle: "Florida Real Estate Areas",
    eyebrow: "Local focus",
    intro: "Explore Florida markets with practical notes on lifestyle, pricing patterns, and buyer fit.",
    sections: areas.map((area) => ({
      heading: area,
      body: `${area} offers distinct neighborhood choices, property styles, price points, and pace of life. We help buyers compare the local fit before narrowing the home search.`,
      links: area === "Palm Coast" ? [{ href: "/palm-coast-real-estate", label: "Explore Palm Coast real estate" }] : []
    }))
  },
  "va-home-buying-florida": {
    title: "Work With VA Home-Buying Experts in Florida",
    metaTitle: "VA Home-Buying Experts in Florida",
    eyebrow: "For Veterans and military families",
    intro: "Partner with VA-experienced Approved Patriot Realty professionals who understand the property search, contract, appraisal, and closing considerations common to VA-backed purchases.",
    featuredVideo: {
      src: "https://app.heygen.com/embeds/a9c22cb2bb464b958bbcfc9aa03f60f7",
      title: "Why Veterans should work with a VA-experienced real estate professional",
      eyebrow: "VA-aware representation",
      heading: "Your Realtor should understand the VA home-buying process.",
      body: "Veterans deserve a real estate professional who understands VA-related property considerations, contract timelines, appraisal coordination, and how to keep the real estate side of the transaction moving with the lender and title team."
    },
    sections: [
      {
        heading: "Work With A VA-Experienced Realtor",
        body: "Approved Patriot Realty professionals help Veterans and military families search, evaluate properties, prepare competitive offers, and coordinate the real estate milestones that support a VA-backed purchase.",
        links: [
          { href: "mailto:vance@patriotrealtyfl.com?subject=I%20want%20to%20work%20with%20a%20VA-experienced%20Realtor", label: "Connect with a VA-experienced Realtor" },
          { href: "/cathy-heighter", label: "Meet Cathy Heighter" }
        ]
      },
      {
        heading: "Build the Team Early",
        body: "Connect with a real estate professional and a VA-experienced, licensed mortgage originator early so your search, payment target, and offer strategy stay aligned.",
        links: [
          { href: "/va-home-loan-authority", label: "Explore the Patriot Advantage VA guide" },
          { href: "/mortgage-calculator", label: "Estimate a monthly mortgage payment" },
          { href: "https://www.approvedfl.com/", label: "Visit Approved Mortgage Source", external: true }
        ]
      },
      {
        heading: "Search With VA Property Standards in Mind",
        body: "Evaluate condition, insurance, association rules, appraisal considerations, and potential repairs before committing to a property and contract timeline. Your real estate professional coordinates property and contract strategy; a licensed mortgage professional determines VA-loan eligibility and underwriting."
      },
      {
        heading: "Coordinate Contract to Closing",
        body: "Keep the real estate, lending, inspection, appraisal, title, and settlement steps moving together with clear milestones and communication.",
        links: [
          { href: "https://approvedclosings.com/", label: "Visit Veterans Approved Title", external: true },
          { href: "https://connect.qualia.com/", label: "Get a title quote, order title, or access your closing", external: true }
        ]
      }
    ]
  },
  "palm-coast-real-estate": {
    title: "Palm Coast, Florida Real Estate",
    metaTitle: "Palm Coast FL Real Estate",
    eyebrow: "Flagler County local guide",
    intro: "Explore Palm Coast homes, neighborhoods, lifestyle considerations, and purchase planning with practical local guidance.",
    sections: [
      {
        heading: "Compare Palm Coast Neighborhoods",
        body: "Consider proximity to beaches, parks, shopping, medical care, major roads, and the neighborhood pace that fits your daily life."
      },
      {
        heading: "Plan for the Full Cost of Ownership",
        body: "Review property taxes, homeowners insurance, flood considerations, association costs, maintenance, and financing alongside the purchase price."
      },
      {
        heading: "Tour and Offer With Context",
        body: "Compare condition, recent nearby sales, time on market, seller priorities, and resale considerations before writing an offer.",
        links: [
          { href: "/buy", label: "See our Florida buyer process" },
          { href: "/relocate", label: "Plan a move to Florida" }
        ]
      }
    ]
  },
  "trusted-partners": {
    title: "Real Estate, Mortgage, and Title Partners",
    metaTitle: "Trusted Real Estate Partners",
    eyebrow: "A connected home-buying team",
    intro: "Meet independently licensed companies that can support different parts of a Florida real estate transaction.",
    partnerPage: true,
    sections: partners.map((partner) => ({
      heading: partner.name,
      kicker: partner.role,
      body: partner.text,
      note: partner.disclosure,
      links: [
        { href: partner.href, label: `Visit ${partner.name}`, external: true },
        ...(partner.portalHref
          ? [{ href: partner.portalHref, label: "Open the Qualia closing portal", external: true }]
          : [])
      ]
    }))
  }
};

export function getPage(slug) {
  return pages[slug] ?? null;
}

export function getPageSlugs() {
  return Object.keys(pages);
}
