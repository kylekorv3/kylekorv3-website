import { useRef, createContext } from "react";

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const mainRef = useRef(null);
  const portfolioRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <BlogContext.Provider value={{ mainRef, portfolioRef, projectsRef, contactRef }}>
      {children}
    </BlogContext.Provider>
  );
};

export { BlogContext, BlogProvider };
