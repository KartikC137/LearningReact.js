import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroups({ items, heading, onSelectItem }: Props) {
  //Hook taps into builtin function in react
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // type annotations
  // const checkItems = items.length === 0 ? <p>No items found</p> : null;

  // const checkItems = () => {
  //   return items.length === 0 ? <p>No items found</p> : null;
  // };
  return (
    <>
      <h1>{heading}</h1>
      {/*{items.length === 0 ? <p>No items found</p> : null} equivalent to: */}
      {items.length === 0 && <p>No items found</p>}
      {/*true && "this is returned", false && "blah" returns false*/}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroups;
