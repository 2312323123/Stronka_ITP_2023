import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Layout from '../components/Layout'
// import global styles
import '../styles/global.scss'
import TitlePage from '../components/TitlePage'

const MainPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <TitlePage />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam
      dignissimos, dolor eaque eius et eveniet in inventore iste nobis, odit
      possimus quaerat qui ratione recusandae rem vitae! At, blanditiis deserunt
      ea eaque earum eligendi eum eveniet inventore ipsa iusto maxime neque
      nobis nulla omnis quaerat repudiandae voluptas voluptatem voluptates.
    </Layout>
  )
}

export default MainPage

export const Head: HeadFC = () => <title>Home Page</title>
