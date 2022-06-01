const Logo = ({ className }) => {

  return (
    <img className={`logo ${className ? className : ''}`} src="media/graphics/logo-markdown-editor.svg" />
  )
};

export {
  Logo
};

