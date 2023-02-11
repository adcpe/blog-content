---
title: Introducing - Twin Themes
date: 2023-02-09
tags: vscode
excerpt: 'I made themes for VSCode. This is how.'
---

As I have mentioned before, I was working on a Twin Themes, a pair of themes for [VSCode](https://code.visualstudio.com/) & [VSCodium](https://vscodium.com/) that focus on readability and comfort for all-day use.

I finally did it. I finished them and they are now available from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=twin-themes.twin-vsc) and the [Open-VSX Registry](https://open-vsx.org/extension/twin-themes/twin-vsc).

The process took me a little over two months because I was working on and off on them. Work also stopped during the holidays and I didn't start again until mid-January.

They were not supposed to be aimed for VSCode in the first place. And that is where it all begins.

## The idea

I use the terminal a lot. If I had to guess, I divide my time between teminal applications and GUI applications in a 30-70 split, maybe even closer. Firefox must be #1, but my terminal, [Kitty](https://sw.kovidgoyal.net/kitty/), must be #2.

I've always been a fan of changing up the theming of code editor and my terminal. I change colors and fonts every couple of weeks from a selection of favorites just to make things fresh again.

I have had the theming bug for a long time, specially with VSCode. The thing about it is that for a first time themer, VSCode seems very complicated and time-consuming (I can only imagine this is the case with most IDEs and text editors.) This time I decided not to start theming VSCode, but instead theme Kitty. I didn't even think about VSCode when I started.

This was to my advantage. Terminals are simpler to theme. Basic theming can be done with only sixteen colors. Eight normal colors and eight _bright_ colors that are usually derived from the normal colors. Normally this are black, red, green, yellow, blue, magenta, cyan and white. Add one more for a background color and another for a foreground color and you're done

## Vanity hex-colors came in handy

The first step for me, was finding a suitable background color and this was always a point where I suffered analysis-paralysis. My thought process was always something like this. In circles.

> Is `#171717` better or worse than `#202020`? How will it look with `blue` letters? Oh hey, I found the absolute best background color! No wait, this one is better...

The answer was in using something that was meaningful for me and then all the other colors would have to adapt to it. I've always been _enthusiatic_ about hex-colors words. Hex-colors that can be read as words like `#d00d1e` or `#b0771e`. Vanity hex-colors would be a variation of this. They have some significance to the person using them. For example, `#ADC` (also read as `#AADDCC`), my initials, is a [very relaxing pastel green](https://www.color-hex.com/color/aaddcc) and would be a vanity hex-color.

But I didn't want to use `#ADC` cause I didn't like it for what I was doing. So my next best thing was to try out what I get from three number I like: **11**, **22** and **39**. [`#112239`](https://www.color-hex.com/color/112239) is actually very good for a dark background color. Its darker than navy blue and it feels like its in the right spot between light and dark for what I was looking for.

After this discovery, I started to throw shit around and seeing what I get. [`#223911`](https://www.color-hex.com/color/223911) its green. Not interested. [`#392211`](https://www.color-hex.com/color/392211) is brown-ish. Pass.

What about my initials with some numbers? [`#ADC111`](https://www.color-hex.com/color/ADC111), [`#ADC222`](https://www.color-hex.com/color/ADC222), [`#111ADC`](https://www.color-hex.com/color/111ADC), [`#222ADC`](https://www.color-hex.com/color/222ADC) are a no-go. After a few tries I came upon [`#2A2D2C`](https://www.color-hex.com/color/2A2D2C) and I liked it. I would say its a black, but not completely dark. More like a dark-grey. I liked it on the spot and I had to use it.

## One became two

I ended up having two background colors I liked. Now I had to complete the palette.

My initial idea was to take colors from minerals like jade, ruby, sapphire and the like to fill the palette. I did that initially but after testing contrast between them I wasn't pleased. I started tweaking them, changing the hex values ever so slightly. Some colors were easy to get like red and green. Others like yellow and orange (which I use in place of cyan) were harder. And I also had to do this twice since I had decided I was going to make two themes.

Turns out hex-colors were not enough. There's also [proof](https://chriscoyier.net/2023/02/01/hex-colors-arent-great-at-anything-except-being-popular/) about this (the article was written after I had decided to move on from hex-colors.) So I started to play with HSL: hue, saturation, lightness. I started matching hues for colors on both themes and only changing the levels of saturation and lightness, then match those differences accross all colors so that the palette looks consistent. This was game changing. It helped me speed up a lot of decisions and it helped with contrast betwen colors.

At this point I had already finished Kitty theming and and was already theming VSCode.
