# Gracious Test
This is a test applied by Gracious to measure my developer skills.

Here is the link for app in production: https://bit.ly/3lpI4xD

## The Case
Using the API: https://rickandmortyapi.com/

Do the following:
- Show all characters that exist (or are last seen) in a given dimension
- Show all characters that exist (or are last seen) at a given location
- Show all characters that partake in a given episode
- Showing all information of a character (Name, species, gender, last location, dimension, etc)

## Technology Stack
![NextJS](https://i.imgur.com/fCe3kYN.png)
![React](https://i.imgur.com/sU0LMGm.png)
![GraphQL](https://i.imgur.com/GxE6sAR.png)
![ApolloClient](https://i.imgur.com/Ik5r7Uq.png)
![Yarn](https://i.imgur.com/7QlLaz2.png)
![ESLint](https://i.imgur.com/e6jnYzZ.png)
![AirbnbStyleguide](https://i.imgur.com/7vkl6Op.png)

## Steps to execute
1. Clone the repository
2. Run `yarn install`
3. Run `yarn dev`
4. Access the page logged on your terminal

## TO-DO

- When a page is loaded, check if there is data to be shown.  If not, show modal with error message.
- Get all data. Currentrly, the query only gets the first page of data that come from the API. For that, use the fetchMore property from useQuery hook.
- Add jsdoc comments
- Add breadcumbs
- Include SASS
- Dockerize
- Apply atomic component design
