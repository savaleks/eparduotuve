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
          id: 1,
          linkUrl: 'kepures'
        },
        {
          title: 'striukes',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'striukes'
        },
        {
          title: 'batai',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'batai'
        },
        {
          title: 'moteriski',
          imageUrl: 'https://i.ibb.co/0MjBR6k/woman-2593366-1920.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'moteriski'
        },
        {
          title: 'vyriski',
          imageUrl: 'https://i.ibb.co/WGKSYtZ/man-1150058-1920.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'vyriski'
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({id, ...otherProps}) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
