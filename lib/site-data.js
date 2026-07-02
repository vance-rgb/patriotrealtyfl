export const site = {
  name: "Patriot Realty FL",
  domain: "Patriotrealtyfl.com",
  email: "hello@patriotrealtyfl.com",
  phone: "(555) 014-1776",
  tagline: "Florida real estate guidance with local clarity and steady follow-through.",
  nav: [
    { href: "/", label: "Home" },
    { href: "/buy", label: "Buy" },
    { href: "/sell", label: "Sell" },
    { href: "/relocate", label: "Relocate" },
    { href: "/areas", label: "Areas" }
  ]
};

export const stats = [
  { value: "24 hr", label: "response goal" },
  { value: "FL", label: "market focus" },
  { value: "1:1", label: "client guidance" }
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
    title: "Buy With Confidence",
    eyebrow: "For buyers",
    intro: "A focused path from wish list to closing table, built around Florida market realities.",
    sections: [
      {
        heading: "Start With The Fit",
        body: "Define location, payment range, lifestyle needs, insurance considerations, and inspection priorities before the search gets noisy."
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
    title: "Sell With A Strong Launch",
    eyebrow: "For sellers",
    intro: "Position your Florida property with pricing, presentation, and timing that support a cleaner sale.",
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
        body: "Compare offers beyond price, including financing strength, contingencies, inspection risk, and closing certainty."
      }
    ]
  },
  relocate: {
    title: "Relocate To Florida",
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
    title: "Florida Areas",
    eyebrow: "Local focus",
    intro: "Explore Florida markets with practical notes on lifestyle, pricing patterns, and buyer fit.",
    sections: areas.map((area) => ({
      heading: area,
      body: `${area} offers distinct neighborhood choices, property styles, and pace of life. Add custom copy here for the communities you serve most.`
    }))
  }
};

export function getPage(slug) {
  return pages[slug] ?? null;
}

export function getPageSlugs() {
  return Object.keys(pages);
}
