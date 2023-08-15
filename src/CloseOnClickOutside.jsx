export const CloseOnClickOutside =
  ({ children, open, onClose }) => {
    return open ? (
      <>
        <div class="overlay" onClick={onClose} />
        {children}
      </>
    ) : null;
  };
