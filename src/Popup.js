import { withCloseOnClickOutside } from "./withCloseOnClickOutside";

const PopupBody = () => {
  return (
    <div class="popup" />
  )
}

export const Popup = withCloseOnClickOutside(PopupBody);