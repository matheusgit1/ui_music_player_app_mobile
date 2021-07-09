/**
 * Define and export the dummy data.
 */
export const sampleObject1 = {
  id: '001',
  title: 'this is a title',
  desc: 'Do elit pariatur aliqua laborum dolore qui.',
};
export const sampleObject2 = {
  firstName: 'John',
  lastName: 'Doe',
};

export const Playlist = [
  {
    id: '001',
    name: 'Startgroves_1',
    songs: 20,
    thumbnail: require('Assets/images/thb1.jpg')
  },
  {
    id: '002',
    name: 'Startgroves_2',
    songs: 20,
    thumbnail: require('Assets/images/thb2.jpg')
  },
  {
    id: '003',
    name: 'Startgroves_5',
    songs: 20,
    thumbnail : require('Assets/images/thb3.jpg')
  },
  {
    id: '004',
    name: 'Startgroves_4',
    songs: 20,
    thumbnail : require('Assets/images/thb4.jpg')
  },
]

export const Favorites = [
  {
    id: '001',
    url: '',
    title: 'Starboy',
    album: 'Startboy',
    artist: 'the weeckend',
    thumbnail: require('Assets/images/thb1.jpg')
  },
  {
    id: '002',
    url: '',
    title: 'Rapture',
    album: 'Powerfull heroic',
    artist: 'Rapture',
    thumbnail: require('Assets/images/thb2.jpg')
  },
  {
    id: '003',
    url: '',
    title: 'Demons',
    album: 'Continued silence',
    artist: 'Imagine dragons',
    thumbnail: require('Assets/images/thb3.jpg')
  },
  {
    id: '004',
    url: '',
    title: 'Welcom to the jungle',
    album: 'Appetite for destruction',
    artist: 'Guns N Roses',
    thumbnail: require('Assets/images/thb4.jpg')
  },
  {
    id: '005',
    url: '',
    title: 'Starboy',
    album: 'Startboy',
    artist: 'the weeckend',
    thumbnail: require('Assets/images/thb1.jpg')
  },
  {
    id: '006',
    url: '',
    title: 'Rapture',
    album: 'Powerfull heroic',
    artist: 'Rapture',
    thumbnail: require('Assets/images/thb2.jpg')
  },
  {
    id: '007',
    url: '',
    title: 'Demons',
    album: 'Continued silence',
    artist: 'Imagine dragons',
    thumbnail: require('Assets/images/thb3.jpg')
  },
  {
    id: '008',
    url: '',
    title: 'Welcom to the jungle',
    album: 'Appetite for destruction',
    artist: 'Guns N Roses',
    thumbnail: require('Assets/images/thb4.jpg')
  },
]

const dummyData = { sampleObject1, sampleObject2, Playlist, Favorites };

export default dummyData;
