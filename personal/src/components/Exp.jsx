import React, { Component } from 'react'
import { Grid, Menu } from 'semantic-ui-react'
import ExpBody from './ExpBody'

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
]
const paypalBody = [
  {
    point:
      'Lifted the collocation of GraphQL  loading states from separate components to the Context level in order to remove multiple loading states per component. This renders a single loading spinner while UI updates/ data is fetched. ',
  },
  {
    point:
      'Supported a11y efforts to 20% of 400 million Paypal users by applying CSS unit best practices across shared UI components.',
  },
  {
    point:
      'Contributed to bespoke component library by configuring Button component API to cycle through multiple colors without repeats if the developer so chooses, else just applies a single color. ',
  },
  {
    point:
      'Documented, tested, and shipped changes to PayPal Component Explorer for other developers to discover, and use new component API features. ',
  },
  {
    point:
      'Refactored unit tests from plain JavaScript to TypeScript to support efforts in migrating the entire testing library over to TypeScript',
  },
  {
    point:
      'Collaborated with PayPal-React SDK community to read, listen, and implement community changes with the SDK team. Upon approval, implemented new props to Component API per community suggestion.',
  },
]

const bitwiseBody = [
  {
    point:
      'Completed client project 1 month before deadline allowing for app optimization, and client edits.',
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
]

export default class Exp extends Component {
  state = { activeItem: 'Rantir AI', isVertical: false }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    if (window.innerWidth < 850) {
      this.setState({ isVertical: false })
    } else {
      this.setState({ isVertical: true })
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem, isVertical } = this.state

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
                  name='Rantir AI'
                  active={activeItem === 'Rantir AI'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='PayPal'
                  active={activeItem === 'PayPal'}
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
              {this.state.activeItem === 'Rantir AI' ? (
                <ExpBody
                  title={'Frontend Engineer'}
                  link={'Rantir AI'}
                  href={'https://www.rantir.com/'}
                  date={'Jan - Jun 2023'}
                  body={hexigonBody}
                />
              ) : this.state.activeItem === 'PayPal' ? (
                <ExpBody
                  title={'Frontend Engineer'}
                  link={'PayPal'}
                  href={'https://www.paypal.com//'}
                  date={'Dec 2021 - Dec 2022'}
                  body={paypalBody}
                />
              ) : (
                <ExpBody
                  title={'Web Developer'}
                  link={'Bitwise Industries'}
                  // href={'https://bitwiseindustries.com/'}
                  date={'Feb 2020 - Nov 2021'}
                  body={bitwiseBody}
                />
              )}
            </div>
          </div>
        </div>
      </>
    )
  }
}
