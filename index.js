function findSecondLargest(arr) {
    // Initialize first and second largest to the smallest possible number
    let first = -Infinity, second = -Infinity;

    // Iterate through the array only once
    for (let i = 0; i < arr.length; i++) {
        // If the current element is greater than the largest (first)
        if (arr[i] > first) {
            // Update second largest to the previous largest value
            second = first;
            // Set the new largest value
            first = arr[i];
        }
        // If the current element is smaller than the largest
        // but greater than the current second largest
        else if (arr[i] > second && arr[i] < first) {
            // Update the second largest value
            second = arr[i];
        }
    }

    // Output the second largest value to the console
    console.log("Second largest number:", second);
}

// Test the function with the provided array
findSecondLargest([6, 13, 22, 18, 0, 3, 45, 57, 5, 12]);
