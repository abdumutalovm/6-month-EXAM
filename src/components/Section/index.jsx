import React, { useEffect, useState } from 'react';
import { PuffLoader } from 'react-spinners';
import styles from './index.module.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function Section() {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoader(true);
    fetch('https://strapi-store-server.onrender.com/api/products?featured=true')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => console.error(error))
      .finally(() => {
        setLoader(false);
      });
  }, []);

  function handleRedirect(id) {
    navigate(`/product/${id}`,{state:products});
  }

  return (
    <div className={styles.container}>
      <h1>{t('featured product')}</h1>
      <div className={styles.productsCard}>
        {loader && <PuffLoader color='cyan' className={styles.loader} />}
        {!loader &&
          products?.data?.map((el, index) => {
            return (
              <div onClick={() => handleRedirect(el.id)} key={index} className={styles.card}>

                <img src={el.attributes.image} alt={el.title} />
                <h2>{el.attributes.title}</h2>
                <span>${el.attributes.price}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Section;
