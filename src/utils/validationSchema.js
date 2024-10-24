import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2, "نام کاربر اجباریست"),
  mobile: Yup.string()
    .min(2, "شماره همراه اجباریست")
    .matches(/^\d{10}$/, "شماره همراه باید 10 عدد باشد")
    .matches(/^9\d{9}$/, "شماره همراه باید با 9 شروع شده باشد"),
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
