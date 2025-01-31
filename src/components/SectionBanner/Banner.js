import "./BannerStyles.css"
function Banner(props) {
  return (
    <>
      <div className={props.cName}>
        <img className="ban-img" alt="bannerr" src={props.bannerImg} />
        <div className="banner-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}
export default Banner;