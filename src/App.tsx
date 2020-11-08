import * as React from 'react'
import './styles.css'
import { PresetBlock } from './comps/PresetBlock'
import { TopBar } from './comps/TopBar/TopBar'
import { Block } from './comps/Block/Block'

export default function App(props) {
  return (
    <>
      <TopBar></TopBar>
      <Block style={{ padding: 24 }} justify="start" align="start">
        <PresetBlock
          presetblock="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f9963aaccbac992d5698570/img/presetblock@2x.png"
          userIdCard="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f996358484bc2d415af6146/img/user---id-card@2x.png"
          showMoreIcon="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f9963aaccbac992d5698570/img/show-more-icon@2x.png"
          playIcon="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f9963aaccbac992d5698570/img/play-icon@2x.png"
          title="this sounds like sonny moore aka skrillex"
        />
      </Block>
    </>
  )
}
