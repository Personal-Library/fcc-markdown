const initialText = `
# Hey there 👋  
## My name is Anthony 
## Welcome to my Simple Markdown Previewer ❤️

---  
You can type on the left (top on smaller formats) and you will see the preview of your markdown on the other side!  
### Here are some of the features you can implement with markdown:
---

You can use #'s to make headers:
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

---

You can bold text **like this**  

You can italicize *like this*

---

Insert your favorite blockquote!
> Love all, trust a few, do wrong to none - Shakespeare

---

1. Form
2. An
3. Ordered
4. List

- And
  - An
    - Unordered
      - List

---

\`\`\`
// You insert a block of code like so:
const Greeting = () => {
  console.log('Hello, world.');
};
\`\`\`

Or just insert inline code: \` const texanGreeting = "Hey y'all" \`

---

Use a table to hold important information:

| Syntax | Description |
| ------ | ----------- |
| Header | Title |
| Paragraph | Text |

---

Create a task list 📋

[x] Code
[ ] Eat
[ ] Sleep
[ ] Repeat

--- 

Strikethrough ~~some text~~

---

Or even insert your favorite image 📸

![Alt text stating this is a cute cat](https://be.chewy.com/wp-content/uploads/small-cat-breeds-main-300x195.jpg?x49762)

---

And if you want to read more about markdown, click [here](https://www.markdownguide.org/cheat-sheet/)
`

export default initialText;