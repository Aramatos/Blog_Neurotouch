---
title: This title is in the frontmatter
date: 2024-07-01
draft: true
---

Link to [markdown-it](https://markdown-it.github.io/)

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules

___

---

***


## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

_**This is bold and italic text**_

~~Strikethrough~~

~~*__bold, italic and stiked__*~~


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

> **This is a long quote.** Cillum ut eu adipisicing duis ipsum in dolore dolor ex
> non. Excepteur mollit adipisicing id aliquip consectetur incididunt ipsum anim
> dolor culpa elit. Veniam cillum duis id nostrud pariatur. Magna mollit cillum
> velit irure velit nostrud tempor et cillum ex non officia.
>
> _Eiusmod dolore tempor ut cillum sit excepteur quis dolore deserunt dolore quis anim magna. Lorem laborum dolor consectetur velit. Irure amet consectetur dolore et et sunt velit cupidatat laboris. Excepteur nulla consectetur officia id aute mollit qui laboris sunt do laboris ipsum Lorem. Duis qui nostrud cillum aliqua consequat dolore exercitation enim amet._
> ```
> // Wow this really does work
> ```
> - listing stuff
> - listing stuff
> - listing stuff

## Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar


## Code

Inline `code`

Block code "fences"

```
Sample text here...
```

Syntax highlighting

``` js
// some comment
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")


## Images

<style>img[alt=Minion]{width: 300px;}</style>
<style>img[alt=Stormtroopocat]{width: 300px;}</style>
<style>img[alt="Alt text"]{width: 300px;}</style>

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


## Plugins

The killer feature of `markdown-it` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).


Esse ea officia laborum nulla. Commodo aliqua enim nisi voluptate in. Nulla excepteur aliquip ad reprehenderit mollit eiusmod mollit exercitation pariatur dolor ex eiusmod. Est ad sint deserunt sunt aliquip eiusmod ipsum do dolor occaecat duis qui laboris cillum.

## Image caveats

Image urls dont work with spaces in them, you need to change the space 
character for `%20` or avoid them altogether

`/assets/Screenshot from 2024-06-29 13-15-52.png`

to

`/assets/Screenshot%20from%202024-06-29%2013-15-52.png`

If you want to make changes to an image eg. change size, center it, add a border
you should do it with a style block

```html
<style>
  /* use the [alt] selector to specify your image */
  img[alt=screenshot-1],
  img[alt=screenshot-2] {
    display: block;
    margin: 0 auto;
  }
</style>
```
<style>
  /* use the [alt] selector to specify your image */
  img[alt=screenshot-1],
  img[alt=screenshot-2] {
    /* display: block;
    margin: 0 auto; */
    text-align: center;
    vertical-align: middle;
    float: right;
  }
</style>


![screenshot-1](/assets/Screenshot%20from%202024-06-29%2013-15-52.png)
![screenshot-2](/assets/Screenshot%20from%202024-06-29%2013-16-45.png)

<p style="text-align: center">
  ![screenshot-1](/assets/Screenshot%20from%202024-06-29%2013-15-52.png)
  ![screenshot-2](/assets/Screenshot%20from%202024-06-29%2013-16-45.png)
</p>
-----