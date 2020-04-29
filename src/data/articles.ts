import moment from 'moment';
import { Article } from '../types';

const articles: Article[] = [
  {
    id: 'foeinwfe',
    title: 'Lorem Ipsum Header',
    author: 'CNN',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis felis, malesuada non maximus egestas, porta vitae nibh. Duis aliquam laoreet magna, sed iaculis massa interdum eu. Fusce a dignissim tortor. Curabitur bibendum fermentum sollicitudin. Morbi porta turpis eu tempus placerat. Nullam fringilla at sapien sit amet posuere. Vivamus at posuere justo, in porta magna. Suspendisse in dui augue. Etiam eu feugiat sem. Proin ante libero, venenatis eget neque sed, congue vestibulum dui.\n\nDuis porta, mauris sed dignissim euismod, quam nisi tempor enim, id placerat diam sapien vel turpis. Cras tincidunt nisi id lacus blandit, in finibus dui hendrerit. Curabitur hendrerit feugiat massa sed tincidunt. Vestibulum ut lacus sit amet urna tristique mattis id ut diam. Nam tempus ante vel lacinia dapibus. Donec gravida sem vitae neque bibendum ultrices. Vestibulum tincidunt vestibulum magna in faucibus. Etiam in quam sodales, interdum eros a, fringilla nisl.',
    category: 'science',
    createdAt: moment().subtract(10, 'days').toDate(),
  },
  {
    id: 'foeinfewfwfe',
    title: 'Lorem Ipsum Header Looooooooooooong',
    author: 'New York Times',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis felis, malesuada non maximus egestas, porta vitae nibh. Duis aliquam laoreet magna, sed iaculis massa interdum eu. Fusce a dignissim tortor. Curabitur bibendum fermentum sollicitudin. Morbi porta turpis eu tempus placerat. Nullam fringilla at sapien sit amet posuere. Vivamus at posuere justo, in porta magna. Suspendisse in dui augue. Etiam eu feugiat sem. Proin ante libero, venenatis eget neque sed, congue vestibulum dui.\n\nDuis porta, mauris sed dignissim euismod, quam nisi tempor enim, id placerat diam sapien vel turpis. Cras tincidunt nisi id lacus blandit, in finibus dui hendrerit. Curabitur hendrerit feugiat massa sed tincidunt. Vestibulum ut lacus sit amet urna tristique mattis id ut diam. Nam tempus ante vel lacinia dapibus. Donec gravida sem vitae neque bibendum ultrices. Vestibulum tincidunt vestibulum magna in faucibus. Etiam in quam sodales, interdum eros a, fringilla nisl.',
    category: 'science',
    createdAt: moment().subtract(12, 'days').toDate(),
  },
  {
    id: 'ewf',
    title: 'Lorem Ipsum Header',
    author: 'Car World',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis felis, malesuada non maximus egestas, porta vitae nibh. Duis aliquam laoreet magna, sed iaculis massa interdum eu. Fusce a dignissim tortor. Curabitur bibendum fermentum sollicitudin. Morbi porta turpis eu tempus placerat. Nullam fringilla at sapien sit amet posuere. Vivamus at posuere justo, in porta magna. Suspendisse in dui augue. Etiam eu feugiat sem. Proin ante libero, venenatis eget neque sed, congue vestibulum dui.\n\nDuis porta, mauris sed dignissim euismod, quam nisi tempor enim, id placerat diam sapien vel turpis. Cras tincidunt nisi id lacus blandit, in finibus dui hendrerit. Curabitur hendrerit feugiat massa sed tincidunt. Vestibulum ut lacus sit amet urna tristique mattis id ut diam. Nam tempus ante vel lacinia dapibus. Donec gravida sem vitae neque bibendum ultrices. Vestibulum tincidunt vestibulum magna in faucibus. Etiam in quam sodales, interdum eros a, fringilla nisl.',
    category: 'auto',
    createdAt: moment().subtract(1, 'days').toDate(),
  },
  {
    id: 'few',
    title: 'Lorem Ipsum Header',
    author: 'MTV3',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis felis, malesuada non maximus egestas, porta vitae nibh. Duis aliquam laoreet magna, sed iaculis massa interdum eu. Fusce a dignissim tortor. Curabitur bibendum fermentum sollicitudin. Morbi porta turpis eu tempus placerat. Nullam fringilla at sapien sit amet posuere. Vivamus at posuere justo, in porta magna. Suspendisse in dui augue. Etiam eu feugiat sem. Proin ante libero, venenatis eget neque sed, congue vestibulum dui.\n\nDuis porta, mauris sed dignissim euismod, quam nisi tempor enim, id placerat diam sapien vel turpis. Cras tincidunt nisi id lacus blandit, in finibus dui hendrerit. Curabitur hendrerit feugiat massa sed tincidunt. Vestibulum ut lacus sit amet urna tristique mattis id ut diam. Nam tempus ante vel lacinia dapibus. Donec gravida sem vitae neque bibendum ultrices. Vestibulum tincidunt vestibulum magna in faucibus. Etiam in quam sodales, interdum eros a, fringilla nisl.',
    category: 'auto',
    createdAt: moment().subtract(34, 'days').toDate(),
  },
  {
    id: 'foeigregernwfe',
    title: 'Lorem Ipsum Header',
    author: 'CNN',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis felis, malesuada non maximus egestas, porta vitae nibh. Duis aliquam laoreet magna, sed iaculis massa interdum eu. Fusce a dignissim tortor. Curabitur bibendum fermentum sollicitudin. Morbi porta turpis eu tempus placerat. Nullam fringilla at sapien sit amet posuere. Vivamus at posuere justo, in porta magna. Suspendisse in dui augue. Etiam eu feugiat sem. Proin ante libero, venenatis eget neque sed, congue vestibulum dui.\n\nDuis porta, mauris sed dignissim euismod, quam nisi tempor enim, id placerat diam sapien vel turpis. Cras tincidunt nisi id lacus blandit, in finibus dui hendrerit. Curabitur hendrerit feugiat massa sed tincidunt. Vestibulum ut lacus sit amet urna tristique mattis id ut diam. Nam tempus ante vel lacinia dapibus. Donec gravida sem vitae neque bibendum ultrices. Vestibulum tincidunt vestibulum magna in faucibus. Etiam in quam sodales, interdum eros a, fringilla nisl.',
    category: 'entertainment',
    createdAt: moment().subtract(10, 'days').toDate(),
  },
  {
    id: 'foeirggr32nwfe',
    title: 'Lorem Ipsum Header',
    author: 'CNN',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis felis, malesuada non maximus egestas, porta vitae nibh. Duis aliquam laoreet magna, sed iaculis massa interdum eu. Fusce a dignissim tortor. Curabitur bibendum fermentum sollicitudin. Morbi porta turpis eu tempus placerat. Nullam fringilla at sapien sit amet posuere. Vivamus at posuere justo, in porta magna. Suspendisse in dui augue. Etiam eu feugiat sem. Proin ante libero, venenatis eget neque sed, congue vestibulum dui.\n\nDuis porta, mauris sed dignissim euismod, quam nisi tempor enim, id placerat diam sapien vel turpis. Cras tincidunt nisi id lacus blandit, in finibus dui hendrerit. Curabitur hendrerit feugiat massa sed tincidunt. Vestibulum ut lacus sit amet urna tristique mattis id ut diam. Nam tempus ante vel lacinia dapibus. Donec gravida sem vitae neque bibendum ultrices. Vestibulum tincidunt vestibulum magna in faucibus. Etiam in quam sodales, interdum eros a, fringilla nisl.',
    category: 'environment',
    createdAt: moment().subtract(12, 'days').toDate(),
  },
  {
    id: 'fo4343einwfe',
    title: 'Lorem Ipsum Header',
    author: 'CNN',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis felis, malesuada non maximus egestas, porta vitae nibh. Duis aliquam laoreet magna, sed iaculis massa interdum eu. Fusce a dignissim tortor. Curabitur bibendum fermentum sollicitudin. Morbi porta turpis eu tempus placerat. Nullam fringilla at sapien sit amet posuere. Vivamus at posuere justo, in porta magna. Suspendisse in dui augue. Etiam eu feugiat sem. Proin ante libero, venenatis eget neque sed, congue vestibulum dui.\n\nDuis porta, mauris sed dignissim euismod, quam nisi tempor enim, id placerat diam sapien vel turpis. Cras tincidunt nisi id lacus blandit, in finibus dui hendrerit. Curabitur hendrerit feugiat massa sed tincidunt. Vestibulum ut lacus sit amet urna tristique mattis id ut diam. Nam tempus ante vel lacinia dapibus. Donec gravida sem vitae neque bibendum ultrices. Vestibulum tincidunt vestibulum magna in faucibus. Etiam in quam sodales, interdum eros a, fringilla nisl.',
    category: 'technology',
    createdAt: moment().subtract(60, 'days').toDate(),
  },
];

export default articles;
