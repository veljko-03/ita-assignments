export const validateRegisterForm = ({
  email,
  password,
  date,
}) => {
  const errors = {};

  // Email
  if (!email.trim()) {
    errors.email = "E-mail is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid e-mail address.";
  }

  // Password
  if (!password) {
    errors.password = "Password is required.";
  } else if (password.length < 6) {
    errors.password = "Password must contain at least 6 characters.";
  }

  // Date of birth
  if (!date) {
    errors.date = "Date of birth is required.";
  } else {
    const selectedDate = new Date(date);
    const today = new Date();

    if (Number.isNaN(selectedDate.getTime())) {
      errors.date = "Please enter a valid date.";
    } else if (selectedDate > today) {
      errors.date = "Date of birth cannot be in the future.";
    }
  }

  return errors;
};

export const validateLoginForm = ({ email, password }) => {
  const errors = {};

  if (!email.trim()) {
    errors.email = "E-mail is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid e-mail address.";
  }

  if (!password) {
    errors.password = "Password is required.";
  }

  return errors;
};