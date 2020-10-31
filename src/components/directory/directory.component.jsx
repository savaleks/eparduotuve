import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'kepures',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1
        },
        {
          title: 'striukes',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2
        },
        {
          title: 'batai',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3
        },
        {
          title: 'moteriski',
          imageUrl: 'https://i.ibb.co/0MjBR6k/woman-2593366-1920.jpg',
          size: 'large',
          id: 4
        },
        {
          title: 'vyriski',
          imageUrl: 'https://i.ibb.co/WGKSYtZ/man-1150058-1920.jpg',
          size: 'large',
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
