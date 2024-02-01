 import "./DataShow.css";

const DataShow = () => {
  return (
    <div className="datashow">
      <table>
      <thead>
        <tr>
          <th>SYMBOL</th>
          <th>OPEN</th>
          <th>HIGH</th>
          <th>LOW</th>
          <th>PREV CLOSE</th>
          <th>LTP</th>
          <th>%CHNG</th>
          
        </tr>
      </thead>
      <tbody>
          
          {Array.from({ length: 20 }, (_, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>Open {index + 1}</td>
              <td>High {index + 1}</td>
              <td>Low {index + 1}</td>
              <td>Prev Close {index + 1}</td>
              <td>LTP {index + 1}</td>
              <td>%CHNG {index + 1}</td>
            </tr>
          ))}
        </tbody>
    </table>
    </div>
  )
}

export default DataShow