# Farell aTask
Website is live on https://farell-atask.vercel.app/

## Getting Started

### Run Development Server
1. Create .env.local with env value like below:
```
NEXT_PUBLIC_GITHUB_TOKEN=my-sample-token
```
2. Run the command `yarn install` to install all the library dependencies
3. Run the command `yarn dev` to start the development server on http://localhost:3000


## Quick Feature Summaries
- Once accordion is opened & fetched, it won't refetch the data (saving some API request costs)
- All components using `memo` and `useCallback` to optimize rendering performances
- There is a simple loading handler when fetching data from the API
