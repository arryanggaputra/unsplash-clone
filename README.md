#  Unsplash Clone

This project aims to clone an Unsplash site with basic features, such as

- Display photos by collection
- Display search results by keyword
- Displays a preview photo in the modal.
- Filter image by color, orientation, relevancies, etc.
- etc


Some of the techniques that I applied in this project include

- SWR (Stale While Revalidate)
- [Blurhash](https://blurha.sh/) compact representation of a placeholder for an image
- Image lazy load
- Zustand for global state manager

## Demo
https://unsplash-clone-three.vercel.app/

 
## How to run the web apps
In the project directory, you can run:
`yarn start`

## How to run tailwindcss script
In the project directory, you can run:
`yarn tailwind-dev`


## Likes Image Page
- [] Add toggle like button to the image
- [] Add another state in global state
- [] Add middleware to the zustand global state ( local storage middleware)


- [] Create Likes page
- [] call the global store
- [] add reusable thumbnail component

## refactor liked image logic
- [] add isLiked as a props to ImageThumbnail
- [] addImageLikes logic inside global state, do in one row
- [] add useCallback in each button on search bar
- [] add reusable grid thumbnail