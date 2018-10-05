import React from 'react';
import Tab from './tab.jsx';
import styled from 'styled-components';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabNames: [
        'NEW',
        'BRANDS',
        'GIFTS',
        'COMMUNITY',
        'HOW-TOS',
        'STORES & SERVICES'
      ],
      toggleDropDown: false,
      dropDownName: ''
    };
    this.showDropDown = this.showDropDown.bind(this);
  }
  showDropDown() {
    this.setState({
      toggleDropDown: !this.state.toggleDropDown
    });
  }
  render() {
    return (
      <div>
        <div className="StyledFlex">
          {this.state.tabNames.map((name, index) => {
            return (
              <Tab
                key={index}
                name={name}
                showDropDown={this.props.showDrop}
                hideDropDown={this.props.hideDrop}
                selected={this.props.selected}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default Tabs;
