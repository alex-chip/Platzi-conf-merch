import React from 'react'
import { Helmet } from 'react-helmet'
import Products from '../../components/Products'
import initialState from '../../InitialState'

const Home = () => (
  <>
    <Helmet>
      <title>Platzi Conf Merch</title>
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@alex_chip42' />
      <meta name='twitter:creator' content='@alex_chip42' />
      <meta name='twitter:title' content='Platzi Conf Store' />
      <meta
        name='twitter:description'
        content='Platzi Conf Store'
      />
      <meta
        name='twitter:image'
        content='https://scontent.fgua3-2.fna.fbcdn.net/v/t1.0-1/p160x160/89005804_2424579450975058_7862017182417289216_o.jpg?_nc_cat=108&ccb=2&_nc_sid=7206a8&_nc_ohc=EnZlgsnNlS4AX-5OIf0&_nc_ht=scontent.fgua3-2.fna&tp=6&oh=94aa8dc2404e3f7f0097dab4c116f4a0&oe=603BA765'
      />
      <meta property='og:title' content='Platzi Conf Store' />
      <meta property='og:description' content='Platzi Conf Store' />
      <meta
        property='og:image'
        content='https://scontent.fgua3-2.fna.fbcdn.net/v/t1.0-1/p160x160/89005804_2424579450975058_7862017182417289216_o.jpg?_nc_cat=108&ccb=2&_nc_sid=7206a8&_nc_ohc=EnZlgsnNlS4AX-5OIf0&_nc_ht=scontent.fgua3-2.fna&tp=6&oh=94aa8dc2404e3f7f0097dab4c116f4a0&oe=603BA765'
      />
      <meta property='og:url' content='https://platzi-conf-merch-303223.web.app/' />
      <meta property='og:site_name' content='Platzi Conf Store' />
      <meta property='og:locale' content='es_ES' />
      <meta property='og:type' content='article' />
      <meta property='fb:app_id' content='alex.chip2' />
    </Helmet>
    <Products products={initialState.products} />
  </>
  )

export default Home
