import React, { useState, useEffect, useContext } from "react";
import "./App.scss";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Dropdown from "./components/Dropdown/Dropdown";
import Pagination from "./components/Pagination/Pagination";
import { DataContext } from "./context/DataContext";
import { useWindowSize } from "./helper/windowSize";
import Toggle from "./components/Toggle/Toggle";
import Modal from "./components/Modal/Modal";
const App = () => {
  const {
    data,
    categories,
    cities,
    setSelectedCity,
    setSelectedCategory,
    setSelectedPage,
    setPages,
  } = useContext(DataContext);

  const size = useWindowSize();

  useEffect(() => {
    handlePage();
  }, [data]);
  
  const handleCity = (e) => {
    setSelectedCity(e.target.value);
    setSelectedPage("0");
  };

  const handleCategory = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedPage("0");
  };
  const handlePage = () => {
    setPages(data?.response.totalPageCount);
  };

  return (
    <div className="container">
      <div className="row">
        {size.width < 769 ? (
          <Toggle
            toggle={(show) => (
              <Button
                onClick={show}
                text={"FILTRELER"}
                className={"button_wrapper"}
              />
            )}
            content={(hide) => (
              <Modal>
                <div>
                  <Button onClick={hide} text={"X"} className={"button_icon"} />
                  <div className="col-12 col-lg-3">
                    <Dropdown
                      onChange={handleCity}
                      header="Şehir"
                      options={cities?.cities}
                    />
                    <Dropdown
                      onChange={handleCategory}
                      header="Kategori"
                      options={categories?.categories}
                    />
                  </div>
                </div>
              </Modal>
            )}
          />
        ) : (
          <div className="col-12 col-lg-3">
            <Dropdown
              onChange={handleCity}
              header="Şehir"
              options={cities?.cities}
            />
            <Dropdown
              onChange={handleCategory}
              header="Kategori"
              options={categories?.categories}
            />
          </div>
        )}

        <div className="col-12 col-lg-9 cards">
          {data?.response.suppliers.length > 0 ? (
            data.response.suppliers.map((item) => (
              <Card
                key={item.id}
                img={item.photoUrl}
                name={item.name}
                location={item.locationText}
                range={item.wageRangeText}
                type={item.wageTypeText}
                references={item.referenceCount}
                comments={item.reviewCount}
              />
            ))
          ) : (
            <div className="error">
              ARADIĞINIZ KRİTERLERLE EŞLEŞEN SONUÇ BULUNAMADI
            </div>
          )}
          <div>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
