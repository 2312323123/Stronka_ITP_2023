import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Layout from '../components/Layout'
// import global styles
import '../styles/global.scss'
import TitlePage from '../components/TitlePage'
import Map from '../components/Map'
import Sponsors from '../components/Sponsors'
import Organizers from '../components/Organizers'
import TextPage from '../components/TextPage'

const MainPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <TitlePage />
      <TextPage />
      <Map />
      <Sponsors />
      <Organizers />
    </Layout>
  )
}

export default MainPage

export const Head: HeadFC = () => <title>Home Page</title>
