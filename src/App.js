import React, { useState, useEffect } from "react";
import NewsCards from "./components/NewsCards/NewsCards";

import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey =
  "b58607a343c1b2aa59b29cb6dd60d7e52e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "testCommand") {
          setNewsArticles(articles);
        }
      },
    });
  }, []);

  return (
    <div>
      <h1>Alan AI react application</h1>
      <NewsCards articles={newsArticles} />
    </div>
  );
};

export default App;
