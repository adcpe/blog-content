const fs = require('fs')
const matter = require('gray-matter')

const json = { posts: [] }

const postList = fs.readdirSync('./posts')

postList.forEach((el, i) => {
  const fileContents = fs.readFileSync('./posts/' + el, 'utf8')
  const contentObj = matter(fileContents)

  contentObj.content = contentObj.content.slice(0, -1) // remove ending '\n'
  contentObj.data.slug = el.slice(0, -3) // remove '.md' from the slug
  contentObj.data.wordcount = contentObj.content.split(' ').length
  contentObj.id = i

  json.posts.push(contentObj)
})

fs.writeFile('postlist.json', JSON.stringify(json), () => {})
