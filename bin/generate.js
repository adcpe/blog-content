import { readdirSync, readFileSync, writeFile } from 'fs'
import matter from 'gray-matter'

const json = { posts: [] }

const postList = readdirSync('./posts')

postList.forEach((el, i) => {
  const fileContents = readFileSync('./posts/' + el, 'utf8')
  const contentObj = matter(fileContents)

  contentObj.content = contentObj.content.slice(0, -1) // remove ending '\n'
  contentObj.data.slug = `${i}-${el.slice(0, -3)}` // remove '.md' from the slug
  contentObj.data.wordcount = contentObj.content.split(' ').length
  contentObj.data.id = i

  json.posts.push(contentObj)
})

writeFile('postlist.json', JSON.stringify(json), () => {})
