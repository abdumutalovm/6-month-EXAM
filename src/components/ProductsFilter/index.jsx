import React, { useEffect,useState,useContext, createContext } from 'react'
import { PuffLoader } from 'react-spinners';
import styles from './index.module.css'
import { useTranslation } from 'react-i18next';


function Section() {
    const {t,i18n} = useTranslation();
    const [products,setProducts] = useState([]);
    const [loader,setLoader] = useState(false);
    useEffect(() => {
        setLoader(true)
        fetch('https://strapi-store-server.onrender.com/api/products')
          .then(response => response.json())
          .then(data => {
            setProducts(data);
          })
          .catch(error => console(error))
          .finally(() => {
          setLoader(false)
          })
      },[]);
  return (
   <>

   <div className={styles.container}>

    <h1>22 products</h1>  
    <div className={styles.productsCard}>
        {
            loader && <PuffLoader color='cyan' className={styles.loader}/>
        }
        {
            !loader && products?.data?.map((el,index) => {
                return(
                <div key={index} className={styles.card}>
                    <img src={el.attributes.image} alt={el.title} />
                   <h2>{el.attributes.title}</h2>
                   <span>${el.attributes.price}</span>
                </div>
                )
            })
        }
    </div>
   </div>
   </>
  )
}

export default Section