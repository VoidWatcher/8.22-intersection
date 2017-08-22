function intersection (nums1, nums2) {
  let a = new Set(nums1);
  let b = new Set(nums2);
  let intersectionSet = new Set([...a].filter(x => b.has(x)));
  let arr = Array.from(intersectionSet); 
  return arr;
}

console.log(intersection([1, 1, 2, 1, 2, 2], [1, 2, 2]));