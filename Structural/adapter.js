const posts = [
    {
        title: 'title1',
        text: "text1"
    },
    {
        title: 'title2',
        text: "text2"
    }
];

class Posts {
    constructor(posts) {
        this.posts = posts
    }

    getTitles() {
        return this.posts.map(post => post.title)
    }

    getTexts() {
        return this.posts.map(post => post.text)
    }
}

function createTitlesHtml(data) {
    let result = '<ul>';
    data.getTitles().forEach(title => {
        result += `<li><a href="#">${title}</a></li>`
    });
    result += '</ul>';
    return result;
}

console.log(createTitlesHtml(new Posts(posts)), ' - posts');



const articles = [
    {
        header: 'header1',
        text: "text1"
    },
    {
        header: 'header2',
        text: "text2"
    }
];

class Articles {
    constructor(articles) {
        this.articles = articles;
    }

    getHeaders() {
        return this.articles.map((article) => article.header)
    }


    getTexts() {
        return this.articles.map(article => article.text)
    }
}

class ArticlesAdapter {
    constructor(articles) {
        this.articles = articles;
    }

    getTitles() {
        return this.articles.getHeaders();
    }


    getTexts() {
        return this.articles.getTexts();
    }
}

console.log(createTitlesHtml(new ArticlesAdapter(new Articles(articles))), ' - articles');

