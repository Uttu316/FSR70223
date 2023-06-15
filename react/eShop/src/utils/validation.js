export const formValidation = (data) => {
  let errors = {};
  let isValidated = true;
  const { username, password } = data;
  if (username !== undefined) {
    if (username === "") {
      isValidated = false;
      errors = { ...errors, usernameError: "Please enter username" };
    }
    if (password !== undefined) {
      if (password === "") {
        isValidated = false;
        errors = { ...errors, passwordError: "Please enter password" };
      }
    }
    return {
      isValidated,
      errors,
    };
  }
};
