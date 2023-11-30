import "../footer/footerDescriptionWeb.css";

function FooterDescriptionWeb({name, link, customDescription}) {
  return (
    <div>
        <a href={link} className={customDescription}>{name}</a>
    </div>
  )
}

export default FooterDescriptionWeb