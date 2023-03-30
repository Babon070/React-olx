import React from 'react';
import './Footer.scss'
import { Link, useLocation } from 'react-router-dom';
import Container from '../../utilis/Container';


const Footer = () => {

    const location = useLocation()


    return location.pathname.includes("/auth") ? (<></>) : (
        <section className='footer__section'>
          <Container>
             <div className='footer'>
                <div className='footer__wrap'>
                    <div className='footer__wrap--up'>
                       <img className='footer-logo' src="https://lindeal.com/images/2022/10/top-8-luchshikh-kazakhstanskikh-marketplejsov-olx.png" alt="" />
                       <h2>OLX bilan internetda biznesingizni boshlang!</h2>
                       <Link to='#'>
                            <span>Batafsil</span>
                       </Link>
                    </div>
                    <div className='footer__info'>
                        <div className='footer__info-block'>
                            <div className='desc'>
                            <img className='footer__info-logo' src="https://upload.wikimedia.org/wikipedia/commons/9/91/Logotyp_OLX_.png" alt="" />
                                <p>Oʻzbekistonda 1-raqamli eʼlonlar servisi
                                    Oʻzbekiston xususiy eʼlonlari OLX (avvalgi torg.uz) – bu yerda izlaganingizni topasiz.
                                    "Eʼlon joylashtirish" tugmasiga bosib, siz istalgan mavzuga oid onlayn-eʼlonni joylashtira olasiz – ish qidirish, xizmat koʻrsatish, avtomobillar, koʻchmas mulk, elektronika va boshqalar savdosi.
                                    OLX Oʻzbekiston servisi yordamida siz deyarli barcha istagan narsangizni sotish yoki sotib olishingiz mumkin. Qidiruv funksiyasidan foydalanib, oʻzingizni qiziqtirgan mavzuga oid sersisda mavjud eʼlonlarni hech bir qiyinchiliksiz topa olasiz.
                                    OLX Oʻzbekiston – sizning ishonchli va tengi yoʻq yordamchingiz.
                                </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className='footer__list'>
                      <div className='footer__list--text'>
                          <img className='footer__list--text-logo' src="https://www.kindpng.com/picc/m/440-4409677_checklist-icon-planning-icon-transparent-background-hd-png.png" alt="" />
                          <p> OLX servisining boʻlimlari: Bolalar dunyosi, Ko'chmas mulk, Transport, Ish, Hayvonlar, Uy va bog', Elektr         jihozlari, Xizmatlar, Moda va stil, Xobbi, dam olish sport, Tekinga beraman, Ayirboshlash
                          </p>
                      </div>
                    </div>
                    <hr />
    
                    <div className='footer__buttom'>
                        <div className='footer__buttom--list'>
                            <div>
                                <ul>
                                  <li>Mobil ilovalar</li>
                                  <li>Yordam</li>
                                  <li>Pullik xizmatlar</li>
                                  <li>OLX-da biznes</li>
                                  <li>Saytda reklama</li>
                                  <li>Foydalanish shartlari</li>
                                  <li>Maxfiylik siyosati</li>
                                </ul>
                            </div>
                            <div>
                            <ul>
                                  <li>Qanday sotib olish va sotish?</li>
                                  <li>Xavfsizlik qoidalari</li>
                                  <li>Sayt xaritasi</li>
                                  <li>Mintaqalar xaritasi</li>
                                  <li>Career</li>
                                  <li>Teskari aloqa</li>
                                </ul>
                            </div>
                            <div className='logo--store'>
                              <div className='img--store'>
                                    <img src="https://avatars.mds.yandex.net/i?id=0d198f88ad41ef090850e26b2bfde7dcb02bf012-8436979-images-thumbs&n=13" alt="" />
                                    <img src="https://avatars.mds.yandex.net/i?id=36301fe75deb60acc5552f5e3d17751245e1b519-3963373-images-thumbs&   n=13" alt="" />
                              </div>
                              <span>
                                     Telefoningiz uchun bepul ilova
                              </span>
                            </div>
                        </div>
                        <div className='footer__buttom--partner'>
                          <ul>
                            <li>
                                olx.1
                            </li>
                            <li>
                              olx.2
                            </li>
                            <li>
                                olx.3
                            </li>
                            <li>
                              olx.4
                            </li>
                          </ul>
                        </div>
                    </div>
                </div>
             </div>
          </Container>
        </section>
      )
}

export default Footer;
