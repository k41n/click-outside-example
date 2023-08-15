export const withCloseOnClickOutside =
  (Component) =>
  ({ open, onClose, ...props }) => {
    return open ? (
      <>
        <div class="overlay" onClick={onClose} />
        <Component {...props} />
      </>
    ) : null;
  };
