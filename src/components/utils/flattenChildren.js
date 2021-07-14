export default function flattenArr(arr) {
  const result = [];
  arr.forEach((item) => {
    const { id, children } = item;
    result.push({ id, data: item });
    if (children) result.push(...flattenArr(children));
  });
  return result;
}
