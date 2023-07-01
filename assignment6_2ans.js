function searchMatrix(matrix, target) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
      return false;
    }
  
    const m = matrix.length;
    const n = matrix[0].length;
    let low = 0;
    let high = m * n - 1;
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const row = Math.floor(mid / n);
      const col = mid % n;
  
      if (matrix[row][col] === target) {
        return true;
      } else if (matrix[row][col] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return false;
  }