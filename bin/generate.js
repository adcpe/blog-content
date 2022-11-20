const fs = require('fs')
const matter = require('gray-matter')

const json = {
  data: []
}

const postList = fs.readdirSync('./posts')

postList.forEach((el, i) => {
  const fileContents = fs.readFileSync('./posts/' + el, 'utf8')
  const contentObj = matter(fileContents)

  contentObj.content = contentObj.content.slice(1)
  contentObj.data.wordcount = contentObj.content.split(' ').length
  contentObj.id = i
  contentObj.data.slug = el.slice(0, -3)

  json.data.push(contentObj)
})

fs.writeFile('postlist.json', JSON.stringify(json), () => {})
