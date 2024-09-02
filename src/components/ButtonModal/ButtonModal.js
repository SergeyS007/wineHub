import "./ButtonModal.scss";

export const ButtonModal = ({
  selected = false,
  type = "button",
  children,
  ...otherProps
}) => {
  const classNames = ["hero__modal-button"];
  if (selected) {
    classNames.push("isSelected");
  }
  return (
    <button className={classNames.join(" ")} type={type} {...otherProps}>
      {children}
    </button>
  );
};
