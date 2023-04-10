import { toast } from 'react-toastify';

export default function updateToast({ id, type, text }) {
  toast.update(id, {
    render: text,
    type: type,
    isLoading: false,
    autoClose: 4000,
  });
}
