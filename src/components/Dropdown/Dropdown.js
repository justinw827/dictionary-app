const Dropdown = ({ filter, handleFilterChange, types=[] }) => {
  const renderOptions = () => {
    return types.map(type => <option value={type}>{type}</option>)
  }

  return (
    <select style={{width: "100px", margin:"10px"}} value={filter} onChange={handleFilterChange}>
      <option value="none">none</option>
      {renderOptions()}
    </select>
  )
}

export default Dropdown