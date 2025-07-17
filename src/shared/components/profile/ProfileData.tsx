import { useState } from "react";
import { mockData } from "../../../core/data/mock_data"
import Category from "./Category"


const ProfileData = () => {
  const data = mockData.profileData;
  const [categoryErrors, setCategoryErrors] = useState({});

  // Track selections for all categories
  const [selections, setSelections] = useState(
    Object.keys(data).reduce((acc, category) => {
      acc[category] = [];
      return acc;
    }, {})
  );

  const validateSelections = () => {
    const errors = {};
    let isValid = true;

    Object.keys(selections).forEach((category) => {
      if (selections[category].length === 0) {
        errors[category] = "Please select at least one item";
        isValid = false;
      }
    });

    setCategoryErrors(errors);
    return isValid;
  };

  const handleSave = () => {
    if (validateSelections()) {
      console.log("Saved selections:", selections);
      // Proceed with saving data
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {Object.entries(data).map(([categoryName, items]) => (
        <Category
          key={categoryName}
          categoryName={categoryName}
          items={items}
          selectedItems={selections[categoryName]}
          onSelect={(selected) =>
            setSelections((prev) => ({
              ...prev,
              [categoryName]: selected,
            }))
          }
          error={categoryErrors[categoryName]}
        />
      ))}
      <div>
        <button onClick={handleSave}>Save preferences</button>
      </div>
    </div>
  );
};
export default ProfileData;
// const ProfileData = () => {
// const data= mockData.profileData;
//   return (
//     <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
//         {
//             Object.entries(data).map(([categoryName, items])=>(
//                <Category key={categoryName} categoryName={categoryName} items={items} />
//             ))
//         }
//         <div>
//           <button>save preferences</button>
//         </div>
//     </div>
//   )
// }

// export default ProfileData;