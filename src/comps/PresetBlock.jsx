import React from 'react'
import { TimeAgo } from './TimeAgo/TimeAgo'
import { Button } from './Button/Button'
import { Text } from './Text/Text'
import { Icon } from './Icon/Icon'
import { Tag } from './Tag/Tag'
import { Block } from './Block/Block'
import { TagList } from './Tag/TagList'
import { css } from '../styles'

export function PresetBlock(props) {
  return (
    <Block direction="column" css={containerCss}>
      <Block css={innerContainerCss} direction="column">
        <Block css={topRowCss}>
          <Block css={userAttributeCss}>
            <Icon className={userCardIconCss} iconName="userCard" />
            <Text look="fatLink" css={userLinkCss}>
              kensiebliss
            </Text>
          </Block>
          <Icon iconName="menu" look="subtle" className={moreOptionsIconCss} />
        </Block>
        <Block className={titleWrapperCss}>
          <Icon iconName="play" className={playIconCss} />
          <Text look="blockTitle">{props.title}</Text>
        </Block>
        <TagList className="tags">
          <Tag look="bold">serum v0.1.12</Tag>
          <Tag>dubstep</Tag>
          <Tag>bass</Tag>
          <Tag>dirty</Tag>
          <Tag>stab</Tag>
          <Tag>wobble</Tag>
          <Tag>reverb</Tag>
        </TagList>
        <Block css={bottomRowCss}>
          <PublishedTimeAgo dateTime={props.dateTime || undefined} />
          <Button intent="main" size="big">
            save
          </Button>
        </Block>
      </Block>
    </Block>
  )
}

const moreOptionsIconCss = css({
  position: 'relative',
  top: -2,
  right: 4,
  height: 'auto',
  width: 24,
})

const playIconCss = css({
  position: 'absolute',
  left: 2,
  top: 5,
  height: 'auto',
  width: 14,
})

const titleWrapperCss = css({
  flexbox: 'row',
  width: '100%',
  position: 'relative',
  marginTop: 12,
  marginLeft: -0.1,
  paddingRight: 24,

  [`& > ${Text}`]: {
    textIndent: 26,
  },
})

const containerCss = css({
  border: '1px solid $contrast10',
  background: '#fff',
  maxWidth: 345,
  padding: 24,
})

const innerContainerCss = css({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

const topRowCss = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
})

const userAttributeCss = css({
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
})

const userCardIconCss = css({
  width: 24,
  height: 'auto',
})

const userLinkCss = css({
  marginLeft: 12,
})

const bottomRowCss = css({
  width: '100%',
  marginTop: 16,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

function PublishedTimeAgo(props) {
  console.log({ props })
  return (
    <div className="PublishedTimeAgo">
      <Text look="support">published</Text>
      <Text look="support">
        <TimeAgo dateTime={props.dateTime} />
      </Text>
    </div>
  )
}

PublishedTimeAgo.defaultProps = {
  dateTime: Date.now() - 60000 * 13,
}
