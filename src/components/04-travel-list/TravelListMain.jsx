import React, { useState } from "react";

const Logo = () => {
  return (
    <div className="center">
      <h1>💼 Malang 🌴</h1>
    </div>
  );
};

const Form = () => {
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
    setIntialitems("");
    setNoofItems(1);
  };
  const num = Array.from({ length: 11 }, (_, i) => i + 1);

  return (
    <form className="travel-form" onSubmit={handleSubmit}>
      <h3>What do you need for trip ? </h3>
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
        placeholder="item..."
        value={intialitems}
        onChange={(e) => setIntialitems(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

// const PackageList = ({ intialitems }) => {
//   return (
//     <div className="package-list">
//       <ul className="package-list-items">
//         {intialitems.map((item, index) => (
//           <Item item={item} index={index} />
//         ))}
//       </ul>
//     </div>
//   );
// };

// const Item = ({ item, index }) => {
//   return (
//     <li key={index}>
//       <span style={item.packed ? { textDecoration: "line-through" } : {}}>
//         {item}
//       </span>
//       <button className="btn">❌</button>
//     </li>
//   );
// };

// const Stats = () => {
//   return (
//     <div className="stats">
//       You have 3 items on your list and you already have 1 item packed.
//       <span>50%</span>
//     </div>
//   );
// };

const TravelListMain = () => {
  return (
    <>
      <div className="travel-list-main">
        <Logo />
        <Form />
        {/* <PackageList />
        <Stats /> */}
      </div>
    </>
  );
};

export default TravelListMain;
