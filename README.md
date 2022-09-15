# Remix-proxy-app-migration-example

This tiny app is inspired by the video [Migrating a Rails & React SPA to Remix by Diogo Biazus
](https://www.youtube.com/watch?v=AWbTrrn6Bx4)

<a href="https://www.youtube.com/watch?v=AWbTrrn6Bx4" target="_blank">
    <img src="https://i3.ytimg.com/vi/AWbTrrn6Bx4/maxresdefault.jpg" />
</a>

## Running the App

Run both web servers at the same time:

```
# inside of `my-remix-app` directory
npm install
npm start
```

In a another terminal tab:

```
# inside of `my-express-app` directory
npm install
npm start
```

Click a link rendered on the homepage of the Remix App.

## Summary

This example app shows 2 apps

- 1 Remix App (think of this as your new app you want to use at your company)
- 1 Express App (think of this as an existing web app at your company)

## Flow

Our Remix app has a `$.tsx` file located at `app/routes/$.tsx`. This is a wild card (catch all) route. Example: if I make a request to for `/about` in my remix app and I don't have that route in my `routes` folder, it will go to the `$.tsx` route.

Inside of the `$.tsx` route, I attempt to `fetch` the request page on my other server (Express app), I get the contents of the entire webpage and then render it in my remix app.
