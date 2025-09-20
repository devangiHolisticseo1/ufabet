const MembershipCard = ({ description, imgSrc, title}) => {
    return (
        <div className="memb-card">
            {imgSrc && <div className="memb-icon">
                <img src={imgSrc} />
            </div>}
            <div className="memb-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default MembershipCard;