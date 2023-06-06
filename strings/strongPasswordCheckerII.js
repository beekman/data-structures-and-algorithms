const strongPasswordCheckerII = (password) => {
    const regex = /^(?=.*[0-9])(?!.*(.)\1+)(?=.*[!-\/:-@[-`{-~])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z\d!-\/:-@[-`{-~]{8,}/g;
    return regex.test(password);
};
