import React, { useState } from "react";

const ListRendering = () => {
  const [list, setList] = useState([
    {
      name: "GAUTHAM",
      age: 23,
      qualification: "BE.,",
      job: "software engineer",
      technology: "reactJS",
    },
  ]);

  return (
    <>
      <p style={{ marginTop: "20px" }}>List Rendering </p>
      <table style={{ border: "1px solid green", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid green",
                backgroundColor: "lightgreen",
                textAlign: "center",
                padding: 10,
              }}
            >
              Name
            </th>
            <th
              style={{
                border: "1px solid green",
                backgroundColor: "lightgreen",
                textAlign: "center",
                padding: 10,
              }}
            >
              Age
            </th>
            <th
              style={{
                border: "1px solid green",
                backgroundColor: "lightgreen",
                textAlign: "center",
                padding: 10,
              }}
            >
              Qualification
            </th>
            <th
              style={{
                border: "1px solid green",
                backgroundColor: "lightgreen",
                textAlign: "center",
                padding: 10,
              }}
            >
              Job
            </th>
            <th
              style={{
                border: "1px solid green",
                backgroundColor: "lightgreen",
                textAlign: "center",
                padding: 10,
              }}
            >
              Technology
            </th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => {
            return (
              <tr key={item.id}>
                <td
                  style={{
                    border: "1px solid green",
                    backgroundColor: "lightpink",
                    textAlign: "center",
                    padding: 10,
                  }}
                >
                  {item.name}
                </td>
                <td
                  style={{
                    border: "1px solid green",
                    backgroundColor: "lightpink",
                    textAlign: "center",
                    padding: 10,
                  }}
                >
                  {item.age}
                </td>
                <td
                  style={{
                    border: "1px solid green",
                    backgroundColor: "lightpink",
                    textAlign: "center",
                    padding: 10,
                  }}
                >
                  {item.qualification}
                </td>
                <td
                  style={{
                    border: "1px solid green",
                    backgroundColor: "lightpink",
                    textAlign: "center",
                    padding: 10,
                  }}
                >
                  {item.job}
                </td>
                <td
                  style={{
                    border: "1px solid green",
                    backgroundColor: "lightpink",
                    textAlign: "center",
                    padding: 10,
                  }}
                >
                  {item.technology}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ListRendering;

/* 
<tr>
<td style={{border:'1px solid green',backgroundColor:'lightpink',textAlign:'center',padding:10}}>GAUTHAM</td>
<td style={{border:'1px solid green',backgroundColor:'lightpink',textAlign:'center',padding:10}}>23</td>
<td style={{border:'1px solid green',backgroundColor:'lightpink',textAlign:'center',padding:10}}>BE.,</td>
<td style={{border:'1px solid green',backgroundColor:'lightpink',textAlign:'center',padding:10}}>Software developer</td>
<td style={{border:'1px solid green',backgroundColor:'lightpink',textAlign:'center',padding:10}}>ReactJS</td>
</tr> */
