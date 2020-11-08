import './PresetBlock.css'
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
            <Icon css={userCardIconCss} src={props.userIdCard} />
            <Text look="fatLink" css={userLinkCss}>
              kensiebliss
            </Text>
          </Block>
          <Icon
            className="PlayIcon"
            css={moreIconCss}
            src={props.showMoreIcon}
          />
        </Block>
        <Block css={titleWrapperCss}>
          <Icon className="PlayIcon" css={playIconCss} src={props.playIcon} />
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
          <Button look="bold" size="big">
            save
          </Button>
        </Block>
      </Block>
    </Block>
  )
}

const moreIconCss = css({
  position: 'relative',
  top: -2,
  right: 4,
  height: 8,
  width: 29,
})

const playIconCss = css({
  position: 'absolute',
  left: 0,
  top: 7,
  height: 18,
  width: 16,
})

const titleWrapperCss = css({
  flexbox: 'row',
  width: '100%',
  position: 'relative',
  marginTop: 16,
  marginLeft: -0.1,
  paddingRight: 24,

  [`& > ${Text}`]: {
    textIndent: 28,
  },
})

const containerCss = css({
  border: '1px solid $black',
  background: '$white',
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
  height: 20,
})

const userLinkCss = css({
  marginLeft: 8,
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
