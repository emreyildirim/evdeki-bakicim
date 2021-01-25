import React, { createContext, useState, useEffect } from "react";
import getCity from "../helper/getCity";
import getCategory from "../helper/getCategory";
import getData from "../helper/getData";

export const DataContext = createContext();

const Context = ({ children }) => {
  const [data, setData] = useState();

  const [cities, setCities] = useState();
  const [selectedCity, setSelectedCity] = useState(" ");

  const [categories, setCategories] = useState();
  const [selectedCategory, setSelectedCategory] = useState(" ");

  const [pages, setPages] = useState();
  const [selectedPage, setSelectedPage] = useState("0");

  useEffect(() => {
    const fetchData = async () => {
      const Cities = await getCity();
      const Categories = await getCategory();
      const Datas = await getData(selectedCity, selectedCategory, selectedPage);

      setCategories(Categories);
      setCities(Cities);
      setData(Datas);
    };
    fetchData();
  }, [selectedCity, selectedCategory, selectedPage]);

  return (
    <DataContext.Provider
      value={{
        data,
        setSelectedCity,
        setSelectedCategory,
        setSelectedPage,
        cities,
        categories,
        pages,
        setPages,
        selectedPage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default Context;
