# Practice Task - NFTs Explorer

NFT Explorer is a React-based application that allows users to explore and search for NFTs using an infinite scroll mechanism, bolstered with a reactive search feature and enhanced by a debouncing mechanism for efficient querying.

## Table of Contents
- [Practice Task - NFTs Explorer](#practice-task---nfts-explorer)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the App](#running-the-app)
    - [Running the Tests](#running-the-tests)
  - [App Structure](#app-structure)
    - [Components](#components)
    - [Hooks](#hooks)
    - [File Structure](#file-structure)
  - [Features](#features)
  - [Testing](#testing)
  - [Tools, Technologies, and Code Practices](#tools-technologies-and-code-practices)
  - [Considerations and Trade-offs](#considerations-and-trade-offs)
    - [Pros:](#pros)
    - [Cons:](#cons)

## Getting Started

### Prerequisites

To run this project locally, you'll need to have Node.js and npm installed.

### Installation

1. Unzip and go to the repo path:
```bash
cd practice-challenge-nft-explorer
```

2. Install project dependencies:
```bash
npm install
```

### Running the App

To run the app in development mode:

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the app in your browser.

### Running the Tests

To run the unit tests:

```bash
npm test
```

## App Structure

The application is structured around key components and hooks, focusing on performance, readability, and reusability.

### Components
- `SearchBar`: Provides an interface for users to search through NFTs, incorporating a debouncing mechanism.
- `NFTGrid`: Displays NFTs in a grid format, providing infinite scrolling and displaying the searched results.

### Hooks
- `useInfiniteNFTLoader`: Handles the infinite loading of NFTs, filters the data based on search terms, and manages the intersection observer for infinite scrolling.

### File Structure

```
src/
|-- api/
|-- assets/
    |-- icons/
|-- components/
|   |-- SearchBar/
        |-- __tests__/
|   |-- NFTGrid/
        |-- __tests__/
|-- hooks/
|   |-- useInfiniteNFTLoader/
|-- types/
|-- utils/
```

## Features

- **Infinite Scrolling**: As users scroll down the page, more NFTs are loaded seamlessly, with caching of already fetched data using React Query.
- **Search with Debouncing**: Users can search for specific NFTs using the search bar. Debouncing ensures that the app doesn't over-query the backend, waiting for a slight delay in input before making the search request.
- **Responsive Design**: Leveraging Chakra UI, the UI adapts to various device sizes.

## Testing

Tests focus on ensuring that components render correctly, and infinite loading works as expected. Jest, combined with @testing-library/react, provides a solid testing foundation.

## Tools, Technologies, and Code Practices

- **React**: Chosen for its component-based architecture, state management, and wide community support.
- **React Query**: Used for caching and state synchronization between the server and client.
- **Chakra UI**: Provides a set of accessible, reusable, and composable React components.
- **Debouncing**: Implemented to delay the search query, improving the application's performance by reducing the number of API calls.
- **Virtualized Lists**: Allows rendering large lists of data efficiently.
- **TypeScript**: Provides static typing and improves code quality and predictability.
- **Jest and @testing-library/react**: For testing components and application functionality.

## Considerations and Trade-offs

### Pros:
1. **Modular Design**: Components and hooks ensure a DRY (Don't Repeat Yourself) codebase and reusability.
2. **Performance**: By combining infinite scroll, debouncing, caching with React Query, and virtualized lists, the app ensures high performance and low memory usage.
3. **Adaptive Search**: The search feature adapts results in real-time, enhancing user experience.

### Cons:
1. **Potential Over-fetching**: The infinite scroll mechanism might lead to over-fetching of data, especially if users scroll rapidly.
2. **Search Efficiency**: Even with debouncing and caching, filtering NFTs on the client side might become a bottleneck with large datasets. A server-side search might be more scalable.