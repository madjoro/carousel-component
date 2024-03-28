# carousel-component

A simple IMDB-like carousel component which was part of an assignment with the following requirements:

You are tasked with creating a movie carousel component for a movie application, like IMDB.
The carousel displays up to 5 random movies based on a user-selected
genre. The genre can be selected via a dropdown menu, and the chosen
genre will be reflected in the URL path.

You are required to use TypeScript and React for this assignment.
Tasks:

1. Setup Project
2. Create Movie Carousel Component:
   Create a new component called MovieCarousel that will house
   the movie carousel functionality.
3. Genre Dropdown:
   Create a dropdown menu that lists available movie genres
   fetched from the TVMaze API.
   When a user selects a genre from the dropdown, update the URL
   path to include the selected genre.
4. Fetch Movies Based on Genre:
   Use the TVMaze API to fetch a list of shows/movies based on
   the selected genre. Implement a function to select 5 random movies from the
   fetched list.
5. Display Movies:
   Display the recived movies in the carousel. For each movie, show its title, image, and a brief
   description, truncated to 100 characters.
6. Carousel Navigation:
   Add navigation buttons to the carousel to allow users to
   scroll through the displayed movies.
7. (bonus) Responsive Design:

Ensure the carousel is responsive and looks good on various
screen sizes.
Implement appropriate styles to make the carousel visually
appealing.
Suggested Tools and Resources:
React, API Requests: Utilize libraries like axios (Axios) or the built-
in fetch (Fetch_API) for making API requests to TVMaze, React Router, State management

Use:
npm i
npm run dev
