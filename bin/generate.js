const fs = require('fs')
const matter = require('gray-matter')

const json = {
  data: []
}

const postList = fs.readdirSync('./posts').reverse()

postList.forEach((el) => {
  const fileContents = fs.readFileSync('./posts/' + el, 'utf8')
  const contentObj = matter(fileContents)
  contentObj.data.slug = el.slice(0, -3)
  json.data.push(contentObj)
})

fs.writeFile('postlist.json', JSON.stringify(json), () => {})
