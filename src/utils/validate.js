export const checkValidateData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  // Password validation criteria
  const isPasswordValid =
    password.length >= 8 && // Minimum length of 8 characters
    /[a-z]/.test(password) && // At least one lowercase letter
    /[A-Z]/.test(password) && // At least one uppercase letter
    /\d/.test(password) && // At least one digit
    /[!@#$%^&*(),.?":{}|<>]/.test(password); // At least one special character

  if (!isEmailValid) {
    return "Email is not valid!";
  }
  if (!isPasswordValid) {
    return "Possword is not valid!";
  }
  return null;
};
