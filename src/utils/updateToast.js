import { toast } from 'react-toastify';

export const updateToast = ({ id, type, text }) => {
  toast.update(id, {
    render: text,
    type: type,
    isLoading: false,
    autoClose: 4000,
  });
};
