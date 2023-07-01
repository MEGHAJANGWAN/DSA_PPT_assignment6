function multiply(mat1, mat2) {
    const m = mat1.length;     // Number of rows in mat1
    const k = mat1[0].length;  // Number of columns in mat1 / rows in mat2
    const n = mat2[0].length;  // Number of columns in mat2
  
    // Initialize the result matrix with zeros
    const result = new Array(m);
    for (let i = 0; i < m; i++) {
      result[i] = new Array(n).fill(0);
    }
  
    // Perform matrix multiplication
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        for (let x = 0; x < k; x++) {
          result[i][j] += mat1[i][x] * mat2[x][j];
        }
      }
    }
  
    return result;
  }
  