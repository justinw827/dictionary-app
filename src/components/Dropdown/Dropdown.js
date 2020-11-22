const Dropdown = ({ filter, handleFilterChange, types=[] }) => {
  const renderOptions = () => {
    const typesUnique = new Set(types)
    return [...typesUnique].map(type => <option value={type}>{type}</option>)
  }

  return (
    <select style={{width: "100px", margin:"10px"}} value={filter} onChange={handleFilterChange}>
      <option value="none">none</option>
      {renderOptions()}
    </select>
  )
}

export default Dropdown