import type { Amenity, Destination, Testimonial } from '../types';

export const resort = {
  name: 'Gem by the Sea',
  rating: 4.5,
  reviewCount: 27,
  address: '4Q6V+4JH, Aundanao, Samal, Davao del Norte',
  phoneDisplay: '0922 882 1234',
  phoneHref: 'tel:09228821234',
};

export const destinations: Destination[] = [
  {
    title: 'Your own edge of Samal',
    description: 'Slip away from the crowd and settle into a coast that feels entirely yours.',
    image: '/images/gem-beach.jpg',
    alt: 'Seaside gazebos at Gem by the Sea overlooking the Davao Gulf',
    tone: 'aqua',
    detail: 'Private shoreline',
  },
  {
    title: 'Blue on blue',
    description: 'Drift between an infinity pool and the horizon with no hard line between them.',
    image: '/images/gem-pool.jpg',
    alt: 'The illuminated infinity pool and lounge deck at Gem by the Sea',
    tone: 'violet',
    detail: 'Infinity pool',
  },
  {
    title: 'Room for your whole circle',
    description: 'Gather the people you love in a spacious setting made for slow meals and long stories.',
    image: '/images/gem-family.jpg',
    alt: 'Spacious dining room and kitchen inside Gem by the Sea',
    tone: 'coral',
    detail: 'Group escapes',
  },
  {
    title: 'Follow the island light',
    description: 'Make the property your base for a bright day of sea air and Samal discovery.',
    image: '/images/gem-island.jpg',
    alt: 'Rocky private shoreline shaded by tropical trees at Gem by the Sea',
    tone: 'sunset',
    detail: 'Island days',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Louise Anica Miranda',
    meta: 'Local Guide · visited 6 months ago',
    quote: 'A hidden paradise with the beach all to yourself. The spacious property made everyone comfortable, and the infinity pool felt unreal.',
    initials: 'LM',
  },
  {
    name: 'Ann Secret',
    meta: 'Traveler · visited 10 months ago',
    quote: 'A true gem by the sea—breathtaking ocean views, peaceful energy, and a team that made the welcome feel warm from the start.',
    initials: 'AS',
  },
  {
    name: 'DenShin',
    meta: 'Family traveler · visited 10 months ago',
    quote: 'Our family reunion felt easy from arrival to departure. The staff were always ready to help, and the whole stay felt genuinely cared for.',
    initials: 'DS',
  },
];

export const amenities: Amenity[] = [
  { title: 'Quiet shoreline', description: 'A private-feeling coast for unhurried mornings.', icon: 'waves' },
  { title: 'Horizon pool', description: 'The signature infinity-pool view guests remember.', icon: 'pool' },
  { title: 'Gather together', description: 'Generous space for families and close friends.', icon: 'users' },
  { title: 'Warm welcome', description: 'Thoughtful hospitality noted by returning travelers.', icon: 'sparkles' },
];
