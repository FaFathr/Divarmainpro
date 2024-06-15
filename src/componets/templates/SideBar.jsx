//کد خودم
// import styles from "./SideBar.module.css"

// const SideBar = ({categories}) => {
   
//   return (
//     <div className={styles.sidebar}>
//      <h4>دسته بندی ها</h4>
//      <ul>
//         {
//             categories.data.map(category =>(
//                 <li key={category._id}>
//                     <img src={`${category.icon}.svg`} />
//                     <p>{category.name}</p>
//                 </li>
//             ))
//         }
//      </ul>
//     </div>
//   )
// }

// export default SideBar
//تااینجا
import React from 'react';

const SideBar = ({ data }) => {
    // Add a check to handle undefined data
    if (!data) {
        return <div>Loading...</div>; // or any other fallback UI
    }

    return (
        <div>
            {/* Render your sidebar content */}
            <p>{data.someProperty}</p>
        </div>
    );
};

export default SideBar;
