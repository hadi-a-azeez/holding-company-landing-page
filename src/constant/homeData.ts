export interface tabItemInterface {
  id: any;
  title: string;
  icon?: string;
}

export const tabs: tabItemInterface[] = [
  {
    id: 1,
    title: 'Web Development',
  },
  {
    id: 2,
    title: 'Digital Marketing',
  },
  {
    id: 3,
    title: 'SEO',
  },
];

export interface serviceItemInterface {
  id: any;
  title: string;
  isExpand?: boolean;
  description: string;
  blogLink?: string;
  action?: string;
}

export interface servicesDataInterface {
  webDevelopment: serviceItemInterface[];
  digitalMarketing: serviceItemInterface[];
  seo: serviceItemInterface[];
}

export const servicesData: servicesDataInterface = {
  webDevelopment: [
    {
      id: 1,
      title: 'Web Development',
      isExpand: true,
      description:
        'Our team of experts specialize in both front-end and back-end development, and are able to deliver high-quality, responsive websites that meet the needs of your business.',
    },
    {
      id: 1,
      title: 'Ecommerce Development',
      description:
        'Our team of experts specialize in both front-end and back-end development, and are able to deliver high-quality, responsive websites that meet the needs of your business.',
    },
    {
      id: 1,
      title: 'Mobile app development',
      description:
        'Our team of experts specialize in both front-end and back-end development, and are able to deliver high-quality, responsive websites that meet the needs of your business.',
    },
    {
      id: 1,
      title: 'Custom software development',
      description:
        'Our team of experts specialize in both front-end and back-end development, and are able to deliver high-quality, responsive websites that meet the needs of your business.',
    },
  ],
  digitalMarketing: [
    {
      id: 1,
      title: 'Social Media Handling',
      isExpand: true,
      description:
        'Our team of experts specialize in both front-end and back-end development, and are able to deliver high-quality, responsive websites that meet the needs of your business.',
    },
    {
      id: 1,
      title: 'Content Creation',
      description:
        'Our team of experts specialize in both front-end and back-end development, and are able to deliver high-quality, responsive websites that meet the needs of your business.',
    },
  ],
  seo: [
    {
      id: 1,
      title: 'SEO Ranking',
      description:
        'Our team of experts specialize in both front-end and back-end development, and are able to deliver high-quality, responsive websites that meet the needs of your business.',
    },
    {
      id: 1,
      title: 'Blog',
      description:
        'Our team of experts specialize in both front-end and back-end development, and are able to deliver high-quality, responsive websites that meet the needs of your business.',
    },
    {
      id: 1,
      title: 'Content Marketing',
      description:
        'Our team of experts specialize in both front-end and back-end development, and are able to deliver high-quality, responsive websites that meet the needs of your business.',
    },
  ],
};
