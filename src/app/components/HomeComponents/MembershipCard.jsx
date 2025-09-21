const MembershipCard = ({ description, imgSrc, title}) => {
    return (
        <article className="memb-card">
            {imgSrc && <figure className="memb-icon">
                <img src={imgSrc} alt={`${title} requirement illustration`} />
                <figcaption className="visually-hidden">Visual representation of {title}</figcaption>
            </figure>}
            <div className="memb-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </article>
    )
}

export default MembershipCard;