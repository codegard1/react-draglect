import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SelectionItem2 extends Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  static propTypes = {
    className      : PropTypes.string,
    style          : PropTypes.object,
    styleIfSelected: PropTypes.object
  }

  static defaultProps = {
    className      : '',
    style          : {},
    styleIfSelected: {
      background: 'rgba(0, 162, 255, 0.4)'
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    return this.state.isSelected !== nextState.isSelected
  }

  render () {
    let {className, style, styleIfSelected, children, ...other} = this.props
    if (this.state.isSelected) style = {...style, ...styleIfSelected}
    if (this.state.isSelected) className += ' rds-item--selected'
    return <div className={className} style={style} {...other}>{children}</div>
  }
}

export default SelectionItem2;
