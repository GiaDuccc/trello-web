export const mapOrder = (originalArray, orderArray, key) => {
  if (!originalArray || !orderArray || !key) return []

  const clonedArray = [...originalArray]
  const orderedArray = clonedArray.sort((a, b) => {
    return orderArray.indexOf(a[key]) - orderArray.indexOf(b[key])
  })

  return orderedArray
}

// Hàm sắp xếp dùng để sắp xếp dữ liệu của originArray giống với orderArray

// Short Hand:

// export const mapOrder = (originalArray, orderArray, key) => {
//   if (!originalArray || !orderArray || !key) return []
//   return [...originalArray].sort((a, b) => 
//     orderArray.indexOf(a[key]) - orderArray.indexOf(b[key])
//   )
// }