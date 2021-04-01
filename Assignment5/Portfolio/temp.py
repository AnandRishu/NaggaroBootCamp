import os
import sys


# Test the solution
test0 = {
    'input': {'arr': [1, 7, 4, 2, 1, 3, 11, 5], 'target': 10}, 
    'output': (2, 6)
}

test1 = {
    'input': {'arr': [4, 2, 1, 3, 1, 7, 11, 5], 'target': 10}, 
    'output': (0, 4)
}


test2 = {
    'input': {'arr': [4, 5, 4, 2, 1, 3], 'target': 10}, 
    'output': (2, 6)
}


test3 = {
    'input': {'arr': [1, 7, 4, 2, 1, 2, 11, 5], 'target': 10}, 
    'output': (None, None)
}


test4 = {
    'input': {'arr': [], 'target': 10},
    'output': (None, None)
}

test5 = {
    'input': {'arr': [1, 7, 4, 2, 1, 10, 11, 5], 'target': 10}, 
    'output': (5, 6)
}

tests = [test0, test1, test2, test3, test4, test5]

# Brute force solution
def subarray_sum(arr, target):
    n = len(arr)
    for i in range(n):
        for j in range(i, n+1):
            if sum(arr[i:j]) == target:
                return i, j
    return None, None


# Optimization 1 - 
def subarray_sum2(arr, target):
    n = len(arr)
    for i in range(n):
        sub_arr_sum = 0
        for j in range(i, n):
            if sub_arr_sum == target:
                return i, j
            if (sub_arr_sum > target):
                break
            sub_arr_sum += arr[j]
    return None, None

# Sliding window system
def subarray_sum3(arr, target):
    n = len(arr)
    i, j, s = 0, 0, 0
    while i < n and j < n:
        if s == target:
            return i, j
        elif s < target:
            s += arr[j]
            j += 1
        elif s > target:
            s -= arr[i]
            i += 1
    return None, None




for test_num, test in enumerate(tests):
    result = subarray_sum3(**test['input'])
    print(f"Test #{test_num}")
    print('Expected: ', test['output'])
    print("Actual: ", result)
    print("PASS: ", result == test['output'])
    print()