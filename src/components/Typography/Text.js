import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { colors } from '../../styles'

const resetStyles = {
  padding: 0,
  margin: 0
}

const variantStyles = {
  title1: {
    fontSize: '60px',
    fontWeight: 600,
    lineHeight: '82px',
    letterSpacing: '0',
    color: colors.GRAY_20
  },

  title2: {
    fontSize: '48px',
    fontWeight: 'normal',
    letterSpacing: '0',
    lineHeight: '65px'
  },

  title3: {
    fontSize: '32px',
    fontWeight: 'bold',
    letterSpacing: '0.03em',
    lineHeight: '42px'
  },

  sectionTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    letterSpacing: '0.05em',
    lineHeight: '32px'
  },

  subtitleText: {
    fontSize: '20px',
    lineHeight: '28px'
  },

  bodyTitle1: {
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: '22px'
  },

  bodyTitle2: {
    fontSize: '14px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.03em',
    lineHeight: '20px'
  },

  body2: {
    fontSize: '16px',
    letterSpacing: '0.03em',
    lineHeight: '22px'
  },

  body1: {
    fontSize: '14px',
    letterSpacing: '0.03em',
    lineHeight: '20px'
  },

  subtext: {
    fontSize: '12px',
    letterSpacing: '0.05em',
    lineHeight: '16px'
  },

  mobileTitle: {
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '0.05em',
    lineHeight: '16px'
  }
}

const htmlTagMapping = {
  title1: 'h1',
  title2: 'h1',
  title3: 'h1',
  sectionTitle: 'h1',
  bodyTitle1: 'h1',
  bodyTitle2: 'h2',
  subtitleText: 'p',
  body2: 'p',
  body1: 'p',
  subtext: 'p',
  mobileTitle: 'p'
}

function Text(props) {
  const { variant, styles, children } = props
  const ElementType = props.elementType || htmlTagMapping[variant]
  const finalStyles = {
    ...resetStyles,
    ...variantStyles[variant],
    ...styles
  }

  return <ElementType style={finalStyles}>{children}</ElementType>
}

const variantNames = [
  'title1',
  'title2',
  'title3',
  'sectionTitle',
  'bodyTitle1',
  'bodyTitle2',
  'subtitleText',
  'body1',
  'body2',
  'subtext',
  'mobileTitle'
]

Text.propTypes = {
  variant: PropTypes.oneOf(variantNames).isRequired,
  children: PropTypes.node,
  elementType: PropTypes.string,
  styles: PropTypes.shape({})
}

export default Radium(Text)
