import { createContext, useState, React, useEffect } from "react";

export const MyContext = createContext("");

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState();
  const [men, setMen] = useState();
  const [women, setWomen] = useState();
  const [electronics, setElectronics] = useState();
  const [jewelery, setJewelery] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProducts(json);
      })
      .catch((error) =>
        console.log("Error occured during the fetch : ", error)
      );

    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((json) => {
        setJewelery(json);
        console.log(json);
      })
      .catch((error) =>
        console.log(
          "Error ocuured during fetch the jewelery products : ",
          error
        )
      );
    fetch('https://fakestoreapi.com/products/category/men\'s%20clothing')
      .then((res) => res.json())
      .then((json) => {
        setMen(json);
        console.log(json);
      })
      .catch((error) =>
        console.log("Error ocuured during fetch the men products : ", error)
      );
    fetch('https://fakestoreapi.com/products/category/women\'s%20clothing')
      .then((res) => res.json())
      .then((json) => {
        setWomen(json);
        console.log(json);
      })
      .catch((error) =>
        console.log("Error ocuured during fetch the women products : ", error)
      );
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((json) => {
        setElectronics(json);
        console.log(json);
      })
      .catch((error) =>
        console.log(
          "Error ocuured during fetch the electronics products : ",
          error
        )
      );
  }, []);

  console.log(products);

  return (
    <MyContext.Provider value={{ products, men, women, jewelery, electronics }}>
      {children}
    </MyContext.Provider>
  );
};
