import imageUrlBuilder from '@sanity/image-url'
import client from './client'

export function urlImage (source) {
    return imageUrlBuilder(client).image(source)
  }