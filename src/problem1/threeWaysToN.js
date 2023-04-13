var sum_to_n_a = (n) => {
    // straightforward method
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

var sum_to_n_b = (n) => {
    // using Gauss' formula
    return n * (n + 1) / 2;
}

var sum_to_n_c = (n) => {
    // using recursion
    if (n == 1) {
        return 1;
    }
    return n + sum_to_n_c(n - 1);
}