import Text from '../Text'
import React from 'react'
import renderer from 'react-test-renderer'
import { StyleRoot } from 'radium'

describe('Text', () => {
  xit('renders all typography variants correctly', () => {
    const allVariants = [
      () => <Text variant="title1">title 1</Text>,
      () => <Text variant="title2">title 2</Text>,
      () => <Text variant="title3">title 3</Text>,
      () => <Text variant="sectionTitle">section title</Text>,
      () => <Text variant="subtitleText">subtitle text</Text>,
      () => <Text variant="bodyTitle1">body title 1</Text>,
      () => <Text variant="bodyTitle2">body title 2</Text>,
      () => <Text variant="body1">body 1</Text>,
      () => <Text variant="body2">body 2</Text>,
      () => <Text variant="subtext">subtext</Text>,
      () => <Text variant="mobileTitle">mobile title</Text>
    ]

    allVariants.forEach(renderVariant => {
      const tree = renderer
        .create(<StyleRoot>{renderVariant()}</StyleRoot>)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  it('allows users to pass a custom html element type', () => {
    const tree = renderer
      .create(<StyleRoot><Text elementType="span" variant="body1">text</Text></StyleRoot>)
      .toJSON()

    // Using `children` since the Radium wrapper will be the root node.
    expect(tree.children[0].type).toEqual('span')
  })
})
