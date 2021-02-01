exports.createNewsPagePath = ({ slug, createdAt }) => {
  const date = new Date(createdAt)
  return `/our-business/news-and-media/news/${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getHours()}/${date.getMinutes()}/${slug}`
}
