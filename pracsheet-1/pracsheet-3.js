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

//prob-3
function maxSlidingWindow(nums, k) {
  let result = [];
  let deque = [];

  for (let i = 0; i < nums.length; i++) {
    while (deque.length && deque[0] <= i - k) {
      deque.shift();
    }

    while (deque.length && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop();
    }

    deque.push(i);

    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
// [3,3,5,5,6,7]

//prob-4
function trap(height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      leftMax = Math.max(leftMax, height[left]);
      water += leftMax - height[left];
      left++;
    } else {
      rightMax = Math.max(rightMax, height[right]);
      water += rightMax - height[right];
      right--;
    }
  }

  return water;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

// prob-6
function trap(height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      leftMax = Math.max(leftMax, height[left]);
      water += leftMax - height[left];
      left++;
    } else {
      rightMax = Math.max(rightMax, height[right]);
      water += rightMax - height[right];
      right--;
    }
  }

  return water;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
// prob-7
function coinChange(coins, amount) {
  let dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

console.log(coinChange([1, 2, 5], 11)); // 3
console.log(coinChange([2], 3)); // -1

//prob-8
function wordBreak(s, wordDict) {
  let words = new Set(wordDict);
  let dp = Array(s.length + 1).fill(false);

  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && words.has(s.slice(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
}

console.log(wordBreak("leetcode", ["leet", "code"])); // true

console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // false

//prob-8
function canFinish(numCourses, prerequisites) {
  let graph = Array.from({ length: numCourses }, () => []);

  for (let [course, prerequisite] of prerequisites) {
    graph[prerequisite].push(course);
  }

  let state = Array(numCourses).fill(0);

  function dfs(course) {
    if (state[course] === 1) return false;
    if (state[course] === 2) return true;

    state[course] = 1;

    for (let next of graph[course]) {
      if (!dfs(next)) return false;
    }

    state[course] = 2;
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }

  return true;
}

console.log(canFinish(2, [[1, 0]])); // true
console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ]),
); // false

//prob-9
function subsets(nums) {
  let result = [];

  function backtrack(index, current) {
    if (index === nums.length) {
      result.push([...current]);
      return;
    }

    backtrack(index + 1, current);

    current.push(nums[index]);
    backtrack(index + 1, current);
    current.pop();
  }

  backtrack(0, []);
  return result;
}

console.log(subsets([1, 2]));
// [[], [2], [1], [1, 2]]

//prob-10
function minDistance(word1, word2) {
  let m = word1.length;
  let n = word2.length;

  let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }

  return dp[m][n];
}

console.log(minDistance("horse", "ros")); // 3

//prob-10
function permutations(nums) {
  const result = [];

  function backtrack(path, used) {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;

      used[i] = true;
      path.push(nums[i]);

      backtrack(path, used);

      path.pop();
      used[i] = false;
    }
  }

  backtrack([], []);

  return result;
}

//prob-11
function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
}

//prob-11
function permutations(nums) {
  const result = [];

  function backtrack(path, used) {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;

      used[i] = true;
      path.push(nums[i]);

      backtrack(path, used);

      path.pop();
      used[i] = false;
    }
  }

  backtrack([], []);

  return result;
}

//prob-12
function exist(board, word) {
  const rows = board.length;
  const cols = board[0].length;

  function dfs(r, c, index) {
    if (index === word.length) {
      return true;
    }

    if (
      r < 0 ||
      c < 0 ||
      r >= rows ||
      c >= cols ||
      board[r][c] !== word[index]
    ) {
      return false;
    }

    const temp = board[r][c];
    board[r][c] = "#";

    const found =
      dfs(r + 1, c, index + 1) ||
      dfs(r - 1, c, index + 1) ||
      dfs(r, c + 1, index + 1) ||
      dfs(r, c - 1, index + 1);

    board[r][c] = temp;

    return found;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (dfs(r, c, 0)) {
        return true;
      }
    }
  }

  return false;
}

//prob-13
function lengthOfLIS(nums) {
  let dp = Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
// 4

//prob-14
function lengthOfLIS(nums) {
  let dp = Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
// 4

//prob-15
function findMissingRanges(nums, lower, upper) {
  let result = [];
  let prev = lower - 1;

  for (let i = 0; i <= nums.length; i++) {
    let current = i === nums.length ? upper + 1 : nums[i];

    if (current - prev >= 2) {
      let start = prev + 1;
      let end = current - 1;

      result.push(
        start === end ? `${start}` : `${start}->${end}`
      );
    }

    prev = current;
  }

  return result;
}

console.log(findMissingRanges([0, 1, 3, 50, 75], 0, 99));

//prob-16
function maxProduct(nums) {
  let max = nums[0];
  let min = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];

    if (num < 0) {
      [max, min] = [min, max];
    }

    max = Math.max(num, max * num);
    min = Math.min(num, min * num);

    result = Math.max(result, max);
  }

  return result;
}

console.log(maxProduct([2, 3, -2, 4])); // 6
console.log(maxProduct([-2, 0, -1]));   // 0

//prob-17
function canJump(nums) {
  let farthest = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > farthest) return false;

    farthest = Math.max(farthest, i + nums[i]);

    if (farthest >= nums.length - 1) return true;
  }

  return true;
}

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false

//prob-18
function canJump(nums) {
  let farthest = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > farthest) return false;

    farthest = Math.max(farthest, i + nums[i]);

    if (farthest >= nums.length - 1) return true;
  }

  return true;
}

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false

prob-19
function findMissingRanges(nums, lower, upper) {
  let result = [];
  let prev = lower - 1;

  for (let i = 0; i <= nums.length; i++) {
    let current = i === nums.length ? upper + 1 : nums[i];

    if (current - prev >= 2) {
      let start = prev + 1;
      let end = current - 1;

      result.push(
        start === end ? `${start}` : `${start}->${end}`
      );
    }

    prev = current;
  }

  return result;
}

console.log(findMissingRanges([0, 1, 3, 50, 75], 0, 99));