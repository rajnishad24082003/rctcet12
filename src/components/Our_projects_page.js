import React, { useState } from "react";
import Menu from "./menu";

function Our_projects_page({ result }) {
  const [items, setItems] = useState(Menu);
  const [active, setActive] = useState(false);
  const filterItem = (categItem) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updateItems);
    setActive(true);
  };

  return (
    <>
      <div className=" text-center font-bold text-2xl mt-3">
        <h1 className="p-4">Our Projects</h1>
      </div>
      <br />
      <div className="">
        <div className="border flex justify-evenly flex-wrap">
          <div className="bg-red-500">
            <a
              className={active ? "bg-yellow-600" : "bg-red-500"}
              href="javascrip:0;"
              onClick={() => filterItem("breakfast")}
            >
              Breackfast
            </a>
          </div>
          <div className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("lunch")}
            >
              Lunch
            </a>
          </div>
          <div className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("evening")}
            >
              Evening
            </a>
          </div>
          <div className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("dinner")}
            >
              Dinner
            </a>
          </div>
          <div className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => setItems(Menu)}
            >
              All
            </a>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-4">
        <div className="row">
          {items.map((elem) => {
            const { id, name, image, description, price } = elem;

            return (
              <div className="col-sm-4" id={id}>
                <div class="card mb-3">
                  <div class="row no-gutters">
                    <div class="col-md-5">
                      <img class="img-fluid" src={image} alt={name} />
                    </div>
                    <div class="col-md-7">
                      <div class="card-body">
                        <h5 class="card-title mb-0">{name}</h5>
                        <p class="card-text">{description}</p>
                        <div class="d-flex justify-content-between">
                          <div class="p-1">Price: {price}</div>
                          <button type="button" className="btn btn-success p-1">
                            Oreder Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Our_projects_page;
