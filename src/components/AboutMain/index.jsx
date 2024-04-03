import { useEffect, useState } from 'react';
import './index.css'
import { useTranslation } from 'react-i18next'
function AboutMain() {
  const {t,i18n} = useTranslation();
  const [lang,setLang] = useState('uz');

  useEffect(() => {
if(localStorage.getItem('lang')){
  i18n.changeLanguage(localStorage.getItem('lang'))
  setLang(localStorage.getItem('lang'))
}else{
  i18n.changeLanguage('uz');
  setLang('uz')
}
  },[])

  return (
    <div className='container'>
        <h1>{t('we love comfy')}<span className='span'>comfy</span></h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo sed officiis ea tempore! Similique eos minima sit porro, ratione aspernatur!</p>
    </div>
  )
}

export default AboutMain