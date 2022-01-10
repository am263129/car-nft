import React, { useState, useEffect } from "react";
import searchIcon from "../../assets/icons/ic_search.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from "@fortawesome/free-solid-svg-icons";
export const SearchInput = (props) => {
  const { keyword, setKeyword, placeholder } = props
  return (
    <div className="rounded-md border border-app-gray-300 items-center flex h-9 px-3 gap-2">
      <img src={searchIcon} alt="search" />
      <input type={"text"} className="w-full outline-none h-full text-sm" placeholder={placeholder} value={keyword} onChange={(e) => setKeyword(e.target.value)} />
    </div>
  )
}

export const CheckBox = (props) => {
  const { checked, onChange, label, option } = props
  const [check, setChecked] = useState(checked)
  const handleCheck = () => {
    setChecked(!check)
  }
  useEffect(() => {
    setChecked(checked)
  }, [checked])
  useEffect(() => {
    onChange(option, check)
  }, [check])
  return (
    <div className="flex gap-2 items-center cursor-pointer" onClick={handleCheck}>
      <div className={`border-2   w-4 h-4 ${check ? "bg-app-primary-100 border-app-primary-100" : "border-app-gray-200"} flex items-center justify-center p-1 `} style={{ borderRadius: "0.225rem" }} >
        <FontAwesomeIcon icon={faCheck} color="white" size="xs" />
      </div>
      <label className="text-sm">{label}</label>
    </div>
  )
}