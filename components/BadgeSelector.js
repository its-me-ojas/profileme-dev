import React, { useContext } from "react";
import { StateContext } from "../pages/_app";
import { FormLabel } from "./FormLabel";

export const BadgeSelector = ({
  badgeType,
  badgeText,
  profileLink,
  handleBadgeClick,
}) => {
  const { state, dispatch } = useContext(StateContext);
  return (
    <label
      className={`min-h-12 border group select-none btn-sm bg-dark-700 ${
        !state.socials[profileLink].linkSuffix.length > 0
          ? "opacity-30"
          : "opacity-100"
      }`}
    >
      <input
        type="checkbox"
        name={badgeType}
        value={state.badges[badgeType].selected}
        onChange={handleBadgeClick}
        className="checkbox-input"
        checked={state.badges[badgeType].selected}
        disabled={
          !state.socials[profileLink].linkSuffix.length > 0 ? true : false
        }
      />
      <span className="text-xs text-white">{badgeText}</span>
    </label>
  );
};