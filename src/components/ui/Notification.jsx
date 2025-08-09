import { toast } from "react-toastify";

const success = (message) => {
  toast.success(message, {
    className: "toast-success",
    bodyClassName: "toast-body",
  });
};

const error = (message) => {
  toast.error(message, {
    className: "toast-error",
    bodyClassName: "toast-body",
  });
};

const warning = (message) => {
  toast.warning(message, {
    className: "toast-warning",
    bodyClassName: "toast-body",
  });
};

const Notification = {
  success,
  error,
  warning,
};

export default Notification;
