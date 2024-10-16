function useSelect() {
  function fixOptions() {
    let values = [];
    for (let i = 1; i <= 27; i++) {
      values.push({ id: i - 1, value: i, label: `Quantity: ${i}` });
    }
    return values;
  }
  const options = fixOptions();
  return [options];
}

export default useSelect;
