export default function validation(form, setErrors, errors) {
  if (!form.name) {
    setErrors({ ...errors, name: "Nombre vacio" });
    return errors;
  }
  const newErrors = {};

  if (!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(form.name)) {
    newErrors.name = "Invalid Name";
  }

  if (form.weight.length < 3) {
    newErrors.weight = "Missing to specify weight";
  }
  if (!/[0-9]/.test(form.weight)) {
    newErrors.weight = "Invalid Expression";
  }

  if (form.height.length < 5) {
    newErrors.height = "Missing to specify height";
  } else {
    if (!/[0-9_-]/.test(form.height)) {
      newErrors.height = "Invalid Expression";
    }
  }

  if (parseInt(form.life_span) < 1) {
    newErrors.life_span = "Missing to specify life span";
  } else {
    if (!/[0-9_-]/.test(form.life_span)) {
      newErrors.life_span = "Invalid Expression";
    }
  }

  if ([form.temperaments].length < 0) {
    newErrors.temperaments = "Assign at least one temperament";
  } else {
    if (!/[0-9_-]/.test(form.temperaments)) {
      newErrors.temperaments = "Invalid Expression";
    }
  }

  if (!form.image) {
    newErrors.image = "Enter URL";
  } else {
    if (!/(https?:\/\/.*\.(?:png|jpg))/i.test(form.image)) {
      newErrors.image = "Invalid expression";
    }
  }

  setErrors(newErrors);
  return newErrors;
}
