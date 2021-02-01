type Props = {
  slug: string
  createdAt: string
}
export function createNewsPagePath({ slug, createdAt }: Props): string {
  const date = new Date(createdAt)
  return `/our-business/news-and-media/news/${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getHours()}/${date.getMinutes()}/${slug}`
}
