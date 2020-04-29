import images from '../assets/images';
import { Category } from '../types';

const categories: Category[] = [
  {
    id: 'fashion',
    image: images.thumbnails.fashion,
    label: 'FASHION',
    title: 'FASHION CHANNEL',
    followers: 255315,
  },
  {
    id: 'science',
    image: images.thumbnails.science,
    label: 'SCIENCE',
    title: 'SCIENCE CHANNEL',
    followers: 2100,
  },
  {
    id: 'auto',
    image: images.thumbnails.auto,
    label: 'AUTO',
    title: 'CAR CHANNEL',
    followers: 35325,
  },
  {
    id: 'technology',
    image: images.thumbnails.technology,
    label: 'TECHNOLOGY',
    title: 'TECH CHANNEL',
    followers: 515155,
  },
  {
    id: 'entertainment',
    image: images.thumbnails.entertainment,
    label: 'ENTERTAINMENT',
    title: 'ENTERTAINMENT CHANNEL',
    followers: 124,
  },
  {
    id: 'environment',
    image: images.thumbnails.environment,
    label: 'ENVIRONMENT',
    title: 'ENVIRONMENT CHANNEL',
    followers: 990455,
  },
  {
    id: 'finance',
    image: images.thumbnails.finance,
    label: 'FINANCES',
    title: 'FINANCE CHANNEL',
    followers: 4,
  },
  {
    id: 'travel',
    image: images.thumbnails.travel,
    label: 'TRAVEL',
    title: 'TRAVEL CHANNEL',
    followers: 46466,
  },
];

export default categories;
