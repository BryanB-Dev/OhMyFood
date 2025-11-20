import styles from './RestaurantCard.module.css';

export default function RestaurantCard({ name, imageUrl, address, newRestaurant }) {
    return (
        <div className={styles.restaurantCard}>
            <img src={imageUrl} alt={`${name} image`} className={styles.restaurantImage} />
            {newRestaurant && <span className={styles.newBadge}>Nouveau</span>}
            <div className={styles.restaurantInfo}>
                <div className={styles.textContent}>
                    <h3 className={styles.restaurantName}>{name}</h3>
                    <p className={styles.restaurantAddress}>{address}</p>
                </div>
                <button className={styles.favoriteButton}>
                    <svg className={styles.heartIcon} width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.2207 2.40527C14.1599 0.222558 17.2057 -0.147219 19.3223 1.62402L19.5244 1.80176C22.0187 4.12419 22.1558 8.32368 19.9121 10.8496L11.5977 20.2148C11.2807 20.5716 10.8021 20.5941 10.4648 20.2822L10.3994 20.2148L2.08496 10.8496C-0.0847856 8.40259 -0.0235333 4.38556 2.25 2.02539L2.47656 1.80176C4.53112 -0.108075 7.5843 0.134683 9.58887 2.19922L9.78027 2.40527L10.627 3.35742L11.001 3.77734L11.374 3.35742L12.2207 2.40527Z" stroke="#101010"/>
                    </svg>
                    <svg className={styles.heartIconHover} width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.865 1.43593C17.5103 -0.753131 14.0083 -0.359381 11.847 2.07343L11.0005 3.02499L10.154 2.07343C7.99701 -0.359381 4.49076 -0.753131 2.13607 1.43593C-0.562363 3.94843 -0.704161 8.45781 1.71068 11.1812L10.0251 20.5469C10.5622 21.1516 11.4345 21.1516 11.9716 20.5469L20.2861 11.1812C22.7052 8.45781 22.5634 3.94843 19.865 1.43593Z" fill="url(#paint0_linear_25368_713)"/>
                        <defs>
                            <linearGradient id="paint0_linear_25368_713" x1="11.0002" y1="-5.4601" x2="3.43443" y2="27.9923" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#9356DC"/>
                                <stop offset="1" stopColor="#FF79DA"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </button>
            </div>
        </div>
    );
}