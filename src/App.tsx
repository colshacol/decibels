import * as React from 'react'
import './styles.css'
import { PresetBlock } from './comps/PresetBlock'
import { TopBar } from './comps/TopBar/TopBar'
import { Block } from './comps/Block/Block'
import { Button } from './comps/Button/Button'
import { Table } from './comps/Table/Table'
import { Spacer } from './comps/Spacer/Spacer'
import { Select } from './comps/Select/Select'
import { Section } from './comps/Block/Section'
import { css } from './styles'
import './styles/global'

export default function App(props) {
  return (
    <>
      <TopBar></TopBar>

      <Section style={{ paddingTop: '48px', paddingBottom: '48px' }}>
        <Block direction="row" gap={6} width="3">
          <Button intent="main">Main</Button>
          <Button intent="danger">Danger</Button>
          <Button intent="default">Default</Button>
        </Block>
        <Spacer size="md" />
        <Block direction="row" gap={6} width="3">
          <Button size="big" intent="main">
            Main
          </Button>
          <Button size="big" intent="danger">
            Danger
          </Button>
          <Button size="big" intent="default">
            Default
          </Button>
        </Block>

        <Spacer size="xxl" />

        <Table initialSortColumn="id" initialSortDirection="ASC" />

        <Spacer size="xxl" />

        <Block direction="column" gap={6} width="3">
          <Select width="0" options={selectOptions} />
          <Select width="1" options={selectOptions} />
          <Select width="2" options={selectOptions} />
          <Select width="3" options={selectOptions} />
        </Block>

        <Spacer size="xxl" />

        <Block direction="column" gap={6} width="3">
          <Select
            onChange={(...args) => console.log(args)}
            size="big"
            width="0"
            options={selectOptions}
          />
          <Select size="big" width="1" options={selectOptions} />
          <Select size="big" width="2" options={selectOptions} />
          <Select size="big" width="3" options={selectOptions} />
        </Block>
        {/* </Section> */}

        <Spacer size="xxl" />

        <Block css={rowCss}>
          <PresetBlock
            presetblock="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f9963aaccbac992d5698570/img/presetblock@2x.png"
            userIdCard="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f996358484bc2d415af6146/img/user---id-card@2x.png"
            showMoreIcon="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f9963aaccbac992d5698570/img/show-more-icon@2x.png"
            playIcon="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f9963aaccbac992d5698570/img/play-icon@2x.png"
            title="this sounds like sonny moore aka skrillex"
          />
          <PresetBlock
            presetblock="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f9963aaccbac992d5698570/img/presetblock@2x.png"
            userIdCard="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f996358484bc2d415af6146/img/user---id-card@2x.png"
            showMoreIcon="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f9963aaccbac992d5698570/img/show-more-icon@2x.png"
            playIcon="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f9963aaccbac992d5698570/img/play-icon@2x.png"
            title="this sounds like sonny moore aka skrillex"
          />
          <PresetBlock
            presetblock="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f9963aaccbac992d5698570/img/presetblock@2x.png"
            userIdCard="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f996358484bc2d415af6146/img/user---id-card@2x.png"
            showMoreIcon="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f9963aaccbac992d5698570/img/show-more-icon@2x.png"
            playIcon="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f9963aaccbac992d5698570/img/play-icon@2x.png"
            title="this sounds like sonny moore aka skrillex"
          />
          <PresetBlock
            presetblock="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f9963aaccbac992d5698570/img/presetblock@2x.png"
            userIdCard="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f996358484bc2d415af6146/img/user---id-card@2x.png"
            showMoreIcon="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f9963aaccbac992d5698570/img/show-more-icon@2x.png"
            playIcon="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f9963aaccbac992d5698570/img/play-icon@2x.png"
            title="this sounds like sonny moore aka skrillex"
          />
          <PresetBlock
            presetblock="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f9963aaccbac992d5698570/img/presetblock@2x.png"
            userIdCard="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f996358484bc2d415af6146/img/user---id-card@2x.png"
            showMoreIcon="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f9963aaccbac992d5698570/img/show-more-icon@2x.png"
            playIcon="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f9963aaccbac992d5698570/img/play-icon@2x.png"
            title="this sounds like sonny moore aka skrillex"
          />
          <PresetBlock
            presetblock="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f9963aaccbac992d5698570/img/presetblock@2x.png"
            userIdCard="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f996358484bc2d415af6146/img/user---id-card@2x.png"
            showMoreIcon="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f9963aaccbac992d5698570/img/show-more-icon@2x.png"
            playIcon="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f9963aaccbac992d5698570/img/play-icon@2x.png"
            title="this sounds like sonny moore aka skrillex"
          />
          <PresetBlock
            presetblock="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f9963aaccbac992d5698570/img/presetblock@2x.png"
            userIdCard="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f996358484bc2d415af6146/img/user---id-card@2x.png"
            showMoreIcon="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f9963aaccbac992d5698570/img/show-more-icon@2x.png"
            playIcon="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f9963aaccbac992d5698570/img/play-icon@2x.png"
            title="this sounds like sonny moore aka skrillex"
          />
          <PresetBlock
            presetblock="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f9963aaccbac992d5698570/img/presetblock@2x.png"
            userIdCard="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f996358484bc2d415af6146/img/user---id-card@2x.png"
            showMoreIcon="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f9963aaccbac992d5698570/img/show-more-icon@2x.png"
            playIcon="https://anima-uploads.s3.amazonaws.com/projects/5f9961fbeab32a435f11273a/releases/5f9963aaccbac992d5698570/img/play-icon@2x.png"
            title="this sounds like sonny moore aka skrillex"
          />
        </Block>
      </Section>
    </>
  )
}

const selectOptions = [
  { label: 'Absynth', value: 'absynth' },
  { label: 'Colors', value: 'colors' },
  { label: 'Kontakt', value: 'kontakt' },
  { label: 'Massive', value: 'massive' },
  { label: 'Minimoog', value: 'minimoog' },
  { label: 'Output Arcade', value: 'arcade' },
  { label: 'Serum', value: 'serum' },
  { label: 'Spire', value: 'spire' },
  { label: 'Sylenth', value: 'sylenth' },
  // { label: 'Massive', value: 'massive' },
]

const rowCss = css({
  padding: '$5 0px',
  gap: '$6',
})
