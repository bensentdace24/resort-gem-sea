export type Destination = {
  title: string;
  description: string;
  image: string;
  alt: string;
  tone: 'aqua' | 'coral' | 'violet' | 'sunset';
  detail: string;
};

export type Testimonial = {
  name: string;
  meta: string;
  quote: string;
  initials: string;
};

export type Amenity = {
  title: string;
  description: string;
  icon: 'waves' | 'pool' | 'users' | 'sparkles';
};
