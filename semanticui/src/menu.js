import React, { Component } from 'react'
import { Menu, Input, Segment } from 'semantic-ui-react'

export default class MenuExampleStackable extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
     
      <Menu.Item>
          <img src='https://www.google.com/search?q=daher+software+logo&client=safari&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjBxMzl5YnjAhWFy4UKHSrpDM8Q_AUIECgB&biw=1440&bih=837#imgrc=gsYKRapvRWhmhM:'/>
        </Menu.Item>



        <Menu.Item as="a" name="Dashboard">
          Dashboard
        </Menu.Item>

        <Menu.Item as="a" name="Activitiés">
        Activitiés
        </Menu.Item>

        <Menu.Item as="a" name="Collaborateurs">
        Collaborateurs
        </Menu.Item>
        <Menu.Item as="a" name="Qualifications">
        Qualifications
        </Menu.Item>
        <Menu.Item as="a" name="Formations">
        Formations
        </Menu.Item>
        <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
          <Menu.Item>
          <img src='https://www.google.com/search?q=daher+software+logo&client=safari&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjBxMzl5YnjAhWFy4UKHSrpDM8Q_AUIECgB&biw=1440&bih=837#imgrc=gsYKRapvRWhmhM:'/>
        </Menu.Item>
       

      </Menu>
      
    )
  }
}


