import React, { Component } from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import ExpBody from './ExpBody';

const hexigonBody = [
  {
    point:
      'Wrote and organized the front end system design by requirements, component architecture, data entities, and schemas for the social network feature.',
  },
  {
    point:
      'Refactored client side data fetching to server side rendering using Next.js which increased fetching speed by up to 20%. Removed lag time from rendering UI to the user interface.',
  },
  {
    point:
      'Created company MVP end-to-end by building components for admin dashboard, custom web builder, and a customizable code editor using React, GPT-3, and GrapesJs.',
  },
  {
    point:
      'Organized and led communication to founders about project updates, challenges, channels of communication, and future road mapping for key features and projects like:',
  },
];

const bitwiseBody = [
  {
    point: 'Completed client project 1 month before deadline allowing for app optimization, and client edits.',
  },
  {
    point:
      'Built custom web app survey end-to-end using client wireframe that boosted their client work by 50% since implementing the online survey. ',
  },
  {
    point:
      'Wrote and planned  system design and component architecture for a recipe collaboration app for auth, recipe reading, and “published” reading features',
  },
  {
    point:
      'Abstracted rerendering logic to increase readability, and maintainability. This  also removed the need for comments explaining the code.',
  },
];

export default class Exp extends Component {
  state = { activeItem: 'HexigonAI', isVertical: false };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    if (window.innerWidth < 850) {
      this.setState({ isVertical: false });
    } else {
      this.setState({ isVertical: true });
    }
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem, isVertical } = this.state;

    return (
      <>
      <div className='exp-container'>
        <div className='exp-wrapper'>
          <div className='exp-menu'>
            <Menu
              pointing
              secondary
              {...(isVertical ? { vertical: true } : {})}
            >
              <Menu.Item
                name='HexigonAI'
                active={activeItem === 'HexigonAI'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='Bitwise Industries'
                active={activeItem === 'Bitwise Industries'}
                onClick={this.handleItemClick}
              />
            </Menu>
          </div>
          <div className='exp-text'>
            {this.state.activeItem === 'HexigonAI' ? (
              <ExpBody
                title={'Frontend Engineer'}
                link={'Hexigon AI'}
                href={'https://www.hexigon.ai/'}
                date={'Jan - Jun 2023'}
                body={hexigonBody}
              />
            ) : this.state.activeItem === 'Bitwise Industries' ? (
              <ExpBody
                title={'Web Developer'}
                link={'Bitwise Industries'}
                href={'https://bitwiseindustries.com/'}
                date={'Jan 2022 - Jan 2023'}
                body={bitwiseBody}
              />
            ) : (
              <div>Invalid company name</div>
            )}
          </div>
        </div>
      </div>
      </>
    );
  }
}
