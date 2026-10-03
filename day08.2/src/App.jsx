import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { useState, createContext } from "react";

export const CreateCartContext = createContext();

function App() {
  const [totalItem, setTotalItem] = useState(0);
  const [price, setTotalPrice] = useState(0);

  return (
    <>
      <CreateCartContext.Provider
        value={{ totalItem, setTotalItem, price, setTotalPrice }}
      >
        <Header />
        <Body />
        <Footer />
      </CreateCartContext.Provider>
    </>
  );
}

export default App;