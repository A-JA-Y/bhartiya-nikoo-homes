export const siteNavLinks = [
  { label: "Home", href: "/" },
  { label: "About Nikoo Homes 8", href: "/about-nikoo-homes-8" },
  { label: "Configurations", href: "/configurations" },
  { label: "Price", href: "/price" },
  { label: "Floor Plans", href: "/floor-plan" },
  { label: "Master Plan", href: "/master-plan" },
  { label: "Location", href: "/location" },
  { label: "Amenities", href: "/amenities" },
  { label: "Bhartiya City", href: "/bhartiya-city" },
  { label: "About Bhartiya Urban", href: "/about-bhartiya-urban" },
  { label: "Blogs", href: "/blog" },
  { label: "News", href: "/news" },
  { label: "Contact Us", href: "/contact-us" },
];

// Guide pages that are not about Nikoo Homes 8 itself: linked sitewide from the
// footer and from the Explore band, but kept out of the header's project nav.
export const guideNavLinks = [
  { label: "Best Projects in Bangalore", href: "/best-residential-projects-in-bangalore-2026" },
];

export const footerNavLinks = [...siteNavLinks, ...guideNavLinks];
