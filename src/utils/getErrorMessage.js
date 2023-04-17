export const getErrorMessage = err => {
  return err.data?.message ?? err.error ?? err.message;
};
