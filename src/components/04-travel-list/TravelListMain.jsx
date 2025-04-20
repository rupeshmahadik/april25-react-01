import React, { useState, useEffect } from "react";
import "./TravelListMain.css";

const Logo = () => {
  return (
    <div className="center">
      <h1>💼 Malang 🌴</h1>
    </div>
  );
};

const Form = ({ handleData }) => {
  const [intialitems, setIntialitems] = useState("");
  const [noofItems, setNoofItems] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!intialitems) return;
    const newItem = {
      intialitems,
      noofItems,
      packed: false,
      id: crypto.randomUUID(),
    };
    handleData(newItem);
    setIntialitems("");
    setNoofItems(1);
  };
  const num = Array.from({ length: 11 }, (_, i) => i + 1);

  return (
    <form className="travel-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        className="travel-form-select"
        value={noofItems}
        onChange={(e) => setNoofItems(e.target.value)}
      >
        {num.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <input
        placeholder="Enter item name"
        value={intialitems}
        onChange={(e) => setIntialitems(e.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

const PackageList = ({ data, handleDelete, handlePacked }) => {
  return (
    <div className="package-list">
      <ul className="package-list-items">
        {data.map((item) => (
          <Item
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            handlePacked={handlePacked}
          />
        ))}
      </ul>
    </div>
  );
};

const Item = ({ item, handleDelete, handlePacked }) => {
  return (
    <li key={item.id}>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => handlePacked(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {`${item.noofItems} ${item.intialitems}`}
      </span>
      <button className="btn" onClick={() => handleDelete(item.id)}>
        ❌
      </button>
    </li>
  );
};

const Stats = ({ data }) => {
  const packedItems = data.filter((item) => item.packed).length;
  const totalItems = data.length;
  const packedPercentage = Math.round((packedItems / totalItems) * 100);
  if (totalItems === 0) {
    return <div className="stats">No items on your list</div>;
  }
  return (
    <div className="stats">
      You have {data.length} items on your list and you already have{" "}
      {packedItems} item packed.
      <span>{packedPercentage}%</span>
    </div>
  );
};

const Sort = ({ data, setData }) => {
  const [sortBy, setSortBy] = useState("input");
  if (!data.length) return null;
  const handleSort = (item) => {
    if (item === "clear") {
      setData([]);
      return;
    }

    setSortBy(item);

    let sortedData;
    if (item === "description") {
      sortedData = [...data].sort((a, b) =>
        a.intialitems.localeCompare(b.intialitems)
      );
    } else if (item === "packed") {
      sortedData = [...data].sort((a, b) => a.packed - b.packed);
    } else if (item === "input") {
      sortedData = [...data].sort((a, b) => a.id.localeCompare(b.id));
    } else {
      sortedData = [...data];
    }

    setData(sortedData);
  };

  return (
    <>
      <div className="travel-sort center">
        <select
          name=""
          className="travel-sort-select"
          value={sortBy}
          onChange={(e) => handleSort(e.target.value)}
        >
          <option value="input">Sort by Input Order</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed Status</option>
        </select>
        <button
          className="btn-clear"
          style={{ marginLeft: "5px" }}
          onClick={() => handleSort("clear")}
        >
          Clear List
        </button>
      </div>
    </>
  );
};

const TravelListMain = () => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("travelListData");
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("travelListData", JSON.stringify(data));
  }, [data]);

  const handleData = (newItem) => {
    setData((prev) => [...prev, newItem]);
  };

  return (
    <>
      <div className="travel-list-main">
        <Logo />
        <Form handleData={handleData} />
        <PackageList
          data={data}
          handleDelete={(id) =>
            setData((items) => items.filter((item) => item.id !== id))
          }
          handlePacked={(id) =>
            setData((items) =>
              items.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item
              )
            )
          }
        />
        <Stats data={data} />
        <Sort data={data} setData={setData} />
      </div>
    </>
  );
};

export default TravelListMain;
