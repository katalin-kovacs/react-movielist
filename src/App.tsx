import React, { useState } from "react";

import mockMovies from "../src/assets/mockData.json";

import AppHeader from "./components/header/AppHeader";
import AppContent from "./components/content/AppContent";
import AppFooter from "./components/footer/AppFooter";

import ErrorBoundary from "antd/lib/alert/ErrorBoundary";
import { Layout } from "antd";
import {atom} from "jotai";

import "./App.css";

const genreList: string[] = [
  "All",
  ...Array.from(
    new Set(mockMovies.map((movie) => movie.genres).flat())
  ),
];

export const genres = atom(genreList);

function App(): JSX.Element {
  const [movies] = useState(mockMovies);

  return (
    <ErrorBoundary>
      <Layout>
        <AppHeader />
        <AppContent movies={movies} />
        <AppFooter />
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
