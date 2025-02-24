function Button({handleClick, icon, styling}) {

  return (
    <>
        <button className={`${styling}`} onClick={handleClick}>
            {icon}
        </button>
    </>
  )
}

export default Button
