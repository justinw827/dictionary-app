const Dropdown = ({ filter, handleFilterChange, types=[] }) => {
  const renderOptions = () => {
    return types.map(type => <option value={type}>{type}</option>)
  }

  return (
    <select value={filter} onChange={handleFilterChange}>
      <option value="none">none</option>
      {renderOptions()}
    </select>
  )
}

export default Dropdown