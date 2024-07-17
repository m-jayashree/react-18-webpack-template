import React from 'react';
export default function EpisodesTableRow(props) {
  const { rowData } = props;

  return (
     <tr key={rowData.episode}>
     <td><img src={rowData.image} alt={rowData.name} /></td>
     <td>{rowData.episode}</td>
     <td>{rowData.date}</td>
     <td>{rowData.name}</td>
   </tr>
  );
}
