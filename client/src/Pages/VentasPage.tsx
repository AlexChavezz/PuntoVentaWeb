import styles from '../styles/VentasPageStyles.module.css';
import IconSearch from '../assets/search.svg';

export const VentasPage = () => {
    return (
        <section
            className={styles.ventasMainContainer}
        >
            <header
                className={styles.ventasHeader}
            >
                <h2
                    className={styles.ventasHeaderTitle}
                >Eben-Ezer’s SHOP</h2>
            </header>
            <main
                className={styles.ventasMainContent}
            >
                <article
                    className={styles.ventasMainContentSearchSection}
                >
                    <div
                        className={styles.ventasMainContentSearchBarContainer}
                    >
                        <img
                            src={IconSearch}
                            alt="Search Icon"
                            className={styles.ventasMainContentSearchBarIcon}
                        />
                        <form
                            className={styles.ventasMainContentSearchBarForm}
                        >
                            <input
                                type="text"
                                className={styles.ventasMainContentSearchBarInput}
                                placeholder="Buscar Producto"
                                // name={name}
                                // value={value}
                                // onChange={onChange}
                            />
                        </form>
                    </div>
                    <div
                        className={styles.ventasMainContentSearchResultsContainer}
                    >
                    </div>
                </article>
                <article
                    className={styles.ventasMainContentSaleSection}
                >
                </article>
            </main>
        </section>
    );
}
