import Button from "../Button";



// Updated Category Component
const Category = ({ categoryName, items, selectedItems, onSelect, error }) => {
  
  const handleItemSelect = (item) => {
    const newSelection = selectedItems.some((selected) => selected.id === item.id)
      ? selectedItems.filter((selected) => selected.id !== item.id)
      : [...selectedItems, item];
    onSelect(newSelection);
  };

  const isSelected = (item) =>
    selectedItems.some((selected) => selected.id === item.id);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        border: error ? "2px solid #ff4444" : "none",
        borderRadius: "8px",
        padding: error ? "12px" : "0",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <h3 style={{ margin: 0 }}>
          {categoryName.replace(/([A-Z])/g, " $1").trim()}
        </h3>
        {error && (
          <span style={{ color: "#ff4444", fontSize: "1rem" }}>{error}</span>
        )}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(150px, 1fr))",
          gap: "10px",
        }}
      >
        {items.map((item) => (
          <Button
            key={item.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
              borderRadius: "8px",
              background: isSelected(item) ? "#4CAF50" : "#f0f0f0",
              color: isSelected(item) ? "white" : "inherit",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => handleItemSelect(item)}
          >
            <span style={{ marginTop: "8px" }}>{item.name}</span>
          </Button>
        ))}
        <button>add new</button>
      </div>
    </div>
  );
};

export default Category;
// const Category = ({ categoryName, items }) => {
// const [selectedItems, setSelectedItems] = useState([]);
// const [missingItems, setMissedItem] = useState([]);
// const [error, setError] = useState(null);

//   const handleSelect = (item) => {
//     setSelectedItems((prev) => {
//       // If item is already selected, remove it
//       if (prev.some((selected) => selected.id === item.id)) {
//         return prev.filter((selected) => selected.id !== item.id);
//       }
//       // Otherwise add it
//       return [...prev, item];
//     });
//   };

//   const isSelected = (item) => 
//     selectedItems.some((selected) => selected.id === item.id);

//   return (
//     <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//       <h3 style={{ margin: 0 }}>
//         {categoryName.replace(/([A-Z])/g, " $1").trim()} {/* Format camelCase */}
//       </h3>
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, minmax(150px, 1fr))",
//           gap: "10px",
//         }}
//       >
//         {items.map((item) => {
//           return (
//             <>
//             <Button
//               key={item.id}
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 padding: "10px",
//                 borderRadius: "8px",
//                 background: isSelected(item) ? "#4CAF50" : "#f0f0f0",
//                 color: isSelected(item) ? "white" : "inherit",
//                 border: "none",
//                 cursor: "pointer",
//               }}
//               onClick={()=> handleSelect(item)}
//             >
//               <span style={{ marginTop: "8px" }}>{item.name}</span>
//             </Button>
//             </>
//           );
//         })}
//         <button>add new</button>
//       </div>
//     </div>
//   );
// };
// export default Category;