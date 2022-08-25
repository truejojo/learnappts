import { useState, useEffect, useContext } from "react";
import { IDataItems, IThemeContent } from "../interfaces/interface";
import ListElement from "../assets/ListElement";
import { ThemeContent } from "../provider/ThemeContent";

enum CURREN_CONTENT {
  POSTS = "posts",
  TODOS = "todos",
  PHOTOS = "photos",
}

function MainThemeContent() {
  const [currentContent, setCurrentContent] = useState(CURREN_CONTENT.POSTS);
  const [data, setData] = useState([]);

  const { theme } = useContext<IThemeContent>(ThemeContent);
  console.log(`Theme: ${theme}`)
  const styles = {
    background: theme,
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${currentContent}`
      );
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, [currentContent]);

  const dataTemplate = () => {
    return data
      .slice(0, 10)
      .map((item: IDataItems) => (
        <ListElement key={item.id} title={item.title} />
      ));
  };

  return (
    <main style={styles}>
      <div className="links">
        <button
          className="btn"
          onClick={() => setCurrentContent(CURREN_CONTENT.POSTS)}
        >
          Posts
        </button>
        <button
          className="btn"
          onClick={() => setCurrentContent(CURREN_CONTENT.TODOS)}
        >
          Todos
        </button>
        <button
          className="btn"
          onClick={() => setCurrentContent(CURREN_CONTENT.PHOTOS)}
        >
          Photos
        </button>
      </div>
      <h2>{currentContent}</h2>
      <ul className="data">{dataTemplate()}</ul>
    </main>
  );
}

export default MainThemeContent;
