//prob-1

function findPeakElement(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

prob - 2;
function cloneGraph(node) {
  if (!node) return null;

  const visited = new Map();

  function clone(current) {
    if (visited.has(current)) {
      return visited.get(current);
    }

    const copy = {
      val: current.val,
      neighbors: [],
    };

    visited.set(current, copy);

    for (const neighbor of current.neighbors) {
      copy.neighbors.push(clone(neighbor));
    }

    return copy;
  }

  return clone(node);
}
