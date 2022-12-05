---
title: My Journey to Eleventy
date: 2022-11-29
tags: personal,blogging
excerpt: 'Jekyll: ❎. VueJS: ❎. Nuxt: ❎. Eleventy: ✅'
---

I've had [several](https://v1.adc.pe/) [iterations](https://v2.adc.pe/) [of my website](https://v3.adc.pe/) [over the years](https://v4.adc.pe/). For something so sparse on updates and content it's a bit crazy that I did so many. Seems like I took more time creating them than iterating on them and things that were worth my time and the time of whoever might visit the site.

Initially, my website was intended to be a place for a potential blog and a place where I can show my projects. This time I'm revisiting that idea. What's changing its the commitment I'm putting into it.

So, how did I get here?

## V1

V1 was done quickly on Jekyll. Jekyll was my first choice because it relies on Ruby. I like Ruby because it's mature and developer friendly. It was a natural choice for me.

The main reason I abandoned it was because I didn't want my blog posts to be embedded on the same git repository as my website. Even back then I wanted some portability for my blog posts. And that marked the end for my Jekyll exploration.

## V2 & V3

V2 and V3 are the same site. One is built using [vue-cli](https://cli.vuejs.org/) (discontinued) and the other with what must have been [Nuxt 2](https://nuxtjs.org/) with Vue 2.

If I had to guess V2 was the one with Nuxt and then I re-did because I wanted the pure VueJS experience and maybe because Nuxt was overkill for my purposes. (A quick check tells me I'm right, V2 was made with Nuxt)

This time I used the [previously discussed](/blog/2022-11-20-using-github-as-my-cdn-api) [Sanity](https://www.sanity.io/) to serve my blog posts. As I said, Sanity is great so that's why I was using it at the time. It was also hyped up at the time because it was a new technology so I gave it a try.

At this time I thought I was entering a period of stability with my website which it did, but not in the that way I was expecting.

## The hiatus

After a few blog posts I just lost interest in maintaining a website and a blog so it was left to _rot_. At this time I started to use React more because of work and more Node.js in general.

My lack of interest was in part because I didn't really have the time for it and I didn't have the will either; and you really do need both of those.

Earlier this year I got the itch again and wanted to do a complete re-do, one more time.

## V4

Okay, so first thing: I based my initial idea on [another website I really like](https://brittanychiang.com/).

It is kind of a rip-off honestly. But I liked it nonetheless.

There's not much to say about this one. I was using a pre-release version of [Nuxt 3](https://nuxt.com/). So overkill. But I told myself that this would get me acquainted with the changes of Nuxt 3. It served its purpose because I did learn a bit from it, but the scope of a personal website is not something that requires a framework like Nuxt. To be clear, many people use Nuxt for their website and that's great, but it's not for me and not for this website.

Nuxt takes many decisions for you, like including a router and having many abstractions from Vue. Some of these can be overridden, but at that point I'd rather use pure Vue.

Again, Nuxt is great and I'm sure I would be very happy using it at a professional level but for small-ish project like my site, I wanted something more minimal.

The main point for Nuxt against Vue is that Nuxt can generate static sites. My next choice would expand on this.

## On to Eleventy

I have had my eyes on [Eleventy](https://www.11ty.dev/) for quite a while. Eleventy (11ty) is a static site generator for Node.js. This means that all the pages on a site can be compiled before being being served.

Jekyll is a static site generator as well. Vue, however, can't generates static pages. Vue is better suited for single page applications (SPA) which can be very fast.

The drawback of this approach is that I didn't want to end up relying on too much JS for rendering my pages and I didn't wanted to lose on search engine optimization (SEO).

A feature of 11ty that is very appealing is that you can use a vast array of templating languages, from plain HTML, Nunjucks, Liquid, etc.

My choice for templating was [Pug](https://pugjs.org/). I've always liked Pug because it has a very clean syntax that relies on indentation rather than tags like most other templating languages. 11ty doesn't have the best Pug support of all of them. But the community is very large I haven't ran into an issue that I wasn't able to solve.

For stylesheets I'm using [Sass](https://sass-lang.com/), which I think its a great complement for Pug because it relies on indentation too. I was using [Stylus](https://stylus-lang.com/) initially, which has a similar syntax to Sass. However, I found the extension support for it on VSCode a bit lacking so I switched to Sass instead.

There are great resources for 11ty at [11ty.rocks](https://11ty.rocks/). It has beginner tutorials, project starters and other stuff that helped me get started. Not many for Pug with 11ty but Pug is very simple and well documented.

## The Future

I plan on sticking with 11ty for a long time. It is very flexible and using the Node.js environment is a big plus. The community is huge and I have faith that Pug support and documentation on 11ty's end can only get better.

For the moment, I'm still thinking of little tweaks I can make and things that I can add. I enjoy my time working with this stack. It might not be VueJS but it's a worthy replacement, in my eyes.
