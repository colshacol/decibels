import * as React from 'react'
import { If, Then, Else } from 'react-if'
import * as timeago from 'timeago.js'

type PropsT = {
  dateTime: number
}

export function TimeAgo(props: PropsT) {
  return timeago.format(props.dateTime)
}
