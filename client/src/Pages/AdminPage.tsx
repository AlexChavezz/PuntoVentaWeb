import styles from '../styles/AdminPageStyles.module.css';
import userIcon from '../assets/users.svg';
import categoryIcon from '../assets/category.svg';
import { useEffect, useState } from 'react';
import UsersManagment from '../components/UsersManagment';
import ProductsManagment from '../components/ProductsManagment';
import { Navigate } from 'react-router-dom';

export const AdminPage = () => {

    // I need render condiditionaly the admin content.
    // Render both sites through the same route using useState.
    const [managmentPage, setManagmentPage] = useState<string>('users');
    function handleManagmentPageChange(page: string) {
        if(managmentPage !== page) setManagmentPage(page);
    }
    return (
        <section
            className={styles.adminPageContainer}
        >
            <aside
                className={styles.adminAsideMenuContainer}
            >
                <div
                    className={styles.adminAsideMenuContainerItems}
                    onClick={() => handleManagmentPageChange('users')}
                >
                    <img
                        src={userIcon}
                        alt="user"
                        className={styles.adminAsideMenuItem}
                    />
                    <span className={styles.span}>USUARIOS</span>
                </div>
                <div
                    className={styles.adminAsideMenuContainerItems}
                    onClick={() => handleManagmentPageChange('products')}
                >
                    <img
                        src={categoryIcon}
                        alt="category"
                        className={styles.adminAsideMenuItem}
                    />
                    <span className={styles.span}>PRODUCTOS</span>
                </div>
            </aside>
            <main
                className={styles.adminMainContentContainer}
            >
                {
                    managmentPage === 'users' ?
                        (
                            <UsersManagment />
                        )
                        :
                        (
                            <ProductsManagment />
                        )
                }
            </main>
        </section>
    )
}