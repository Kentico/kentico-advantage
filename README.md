# Kentico Advantage site

[![Build Status](https://api.travis-ci.com/Kentico/kentico-advantage.svg?branch=source)](https://travis-ci.com/Kentico/kentico-advantage)
[![Live](https://img.shields.io/badge/live-brightgreen.svg)](https://advantage.kentico.com)
[![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-ASK%20NOW-FE7A16.svg?logo=stackoverflow&logoColor=white)](https://stackoverflow.com/tags/kentico-cloud)

This site is using [GatsbyJS](https://next.gatsbyjs.org) static site generation.

Data is stored in [Kentico Kontent](https://kontent.ai) and provided by [Gatsby source plugin](https://github.com/Kentico/kontent-gatsby-packages).

Source code for the website is stored in [source branch](https://github.com/Kentico/kentico-advantage/tree/source)

## 🚀 Quick start

1.  **Install the dependencies**

    ```sh
    npm install
    ```

    Including Gatsby CLI installation.


3.  **Start developing.**

    ```sh
    npm run develop  
    ```

4.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!
    
    *Note: You'll also see a second link: `http://localhost:8000___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://next.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).*
    
## Release

All pushes to source branch trigger:

```sh
npm run build
```

A successful Gatsby build triggers GitHub Pages deployment to master branch.
