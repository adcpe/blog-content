---
title: Using Github/Gitlab as my CDN/API
date: 2022-11-20
tags: blogging experiment
---

Now that I'm more into blogging than any other time in my life, I wanted to start using this space more than ever.

My website is (or will be, because as of writing this post is not yet out) just a static site made with [11ty](https://www.11ty.dev/) and the blog will be a collection of all my posts, naturally. With this idea, I wanted to serve myself markdown files in the cheapest way possible.

Previously I had used [Sanity](https://www.sanity.io/). Sanity is alright. I get the appeal of it for teams that create content, but for me its just overkill. And the other side of it, I don't feel like I have my posts. Sanity could disappear any day and it would be a hassle to get my posts out of there. I wanted something that is future proof and that I have control of.

Immediately I thought about writing an API is NodeJS or Ruby on Rails or maybve even Laravel. That's too much maintenance though. Sure, would make an interesting learning experience and probably another post, but I already had to build the site and other projects. Besides, I just wanted to write and the server costs were unappealing.

So after a while thinking about this problem I realized the solution was in front of me. Serving my posts from a Git repository was my original idea. The repo would be just markdown files with front matter. Very simple.

What if I could just retrieve them with [axios](https://github.com/axios/axios) requests? Then I rememebered that you can view files from `raw.githubusercontent.com`. That's perfect.

## The solution

Great! Now I just need a way to get the filenames on the posts folder. So I created a basic script with NodeJS using `fs` to write the filenames to a file and I'll push that along with the markdown files to Github. Then I would point my request to that file to get the other filenames and then I'd get the contents of my markdown files.

## Extending my idea

Can I get all my files with a single request instead of having to iterate over the file list? That's putting more processing on the initial file list creation.

In my reasearch I came upon [gray-matter](https://github.com/jonschlinkert/gray-matter), a handy npm package that takes markdown and spits out an object with the content and data from front matter.

Awesome!

So, out of this my little script grew a bit more with gray-matter processing the `.md` files. I also couldn't push this data to a simple `.txt` files. The script would create a `.json` files instead and I also added some other metadata to the object. This is way more powerful than my simple file list.

The repository is living now in [Github](https://github.com/adcpe/blog-content) but I will create a mirror on Gitlab just in case.

### Mine

This was a very fun problem to solve and I learned a bit with it. Now my content is truly mine, its portable and hopefully future proof.
