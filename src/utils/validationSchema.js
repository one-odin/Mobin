import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2, "نام کاربر اجباریست"),
  mobile: Yup.string()
    .min(2, "شماره همراه اجباریست")
    .matches(/^\d{11}$/, "شماره همراه باید 11 عدد باشد")
    .matches(/^09\d{9}$/, "شماره همراه باید با 09 شروع شده باشد"),
  email: Yup.string().min(2, "نام کاربری اجباریست").email("ایمیل نامعتبر است"),
  country: Yup.string(),
  volume: Yup.string().matches(/^[0-9]$/, "سقف حجم باید زیر 10 گیگ باشد"),
});

const validateField = (field, value) => {
  try {
    Yup.reach(validationSchema, field).validateSync(value);
    return true;
  } catch (error) {
    return error.message; // Return the error message
  }
};

export default validateField;
