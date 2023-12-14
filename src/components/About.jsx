// import React from "react";
// import "./About.css";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

// const About = () => {
//   return (
//     <div className="about">
//       <div className="overlay"></div>
//       <div className="container">
//         <div className="row">
//           <h1>"Cinema Plus"</h1>
//           <div className="description">
//             <p>
//               CinemaPlus şəbəkəsinə 9 kinoteatr, 50+ ekran və 5000+ oturacaq
//               daxildir.
//             </p>
//             <p>
//               Yüksək ölçülü 3D-kontentini nümayiş etdirmək imkanı olan rəqəmsal
//               proyeksiya sistemi və yüksək keyfiyyətli kinoekranlar ilə təchiz
//               olunub. Həmçinin, gücləndirilmiş parlaqlıq və “Enhanced 4K Barco”
//               dəqiq təsvirinə malikdir. Bütün bunlar və başqa amillər
//               kinofilmləri ən yaxşı keyfiyyətdə nümayiş etdirmək imkanı yaradır.
//             </p>
//             <p>
//               “CinemaPlus” kinoteatrlar şəbəkəsinin tətbiq etdiyi “Platinum
//               Movie Suites” konsepsiyası tamaşaçılara yüksək komfortlu,
//               dəbdəbəli və dəridən hazırlanmış, söykənəcəyi tam arxaya açılan
//               italyan və ispan kreslolarda film izləmək və kinoseans zamanı qida
//               və içkiləri sifariş etmək imkanı yaradır.
//             </p>
//             <p>
//               Həmçinin kinoteatrda, zalların yuxarı pillələrində yerləşən, 6
//               nəfərdən 12 nəfərə kimi oturacaqları olan 6 şüşəli mini Skybox
//               zalları var. Tamaşaçılar fərdi işıqlandırma və gadjetlərin şarj
//               cihazı ilə təchiz olunmuş rahat oturacaqlarda film izləməkdən zövq
//               ala biləcəklər. Hər bir Skybox zalına giriş lift ilə mümkündür.
//             </p>
//             <p>
//               Kinoteatrda xüsusi qonaqlar üçün quraşdırılmış masalar və ayaq
//               dayağı olan geniş, rahat, avtomatik qatlanan oturacaqlarla təchiz
//               olunmuş iki VIP DIAMOND zalları var. Bütün oturacaqlar
//               bir-birindən müəyyən məsafədə yerləşir, bu da rahatlıq mühiti
//               yaradır. Son sıralarda, ev şəraitini xatırladan rahat divanlar
//               var.
//             </p>
//             <p>
//               Bundan əlavə “CinemaPlus” Azərbaycanda ilk dəfə Dolby Atmos
//               texnologiyası tətbiq edib.
//             </p>
//             <p>
//               Səs müşayiətini kinoteatrın istənilən yerinə yerləşdirmək və
//               yerini dəyişmək imkanı hesabına Dolby Digital Atmos film
//               yaradıcılarına kinoda səsi yeni bir mərhələyə çıxarmaq imkan
//               yaradır. Nəticədə tamaşaçı ekranda baş verənləri sadəcə izləmir,
//               hadisənin mərkəzinə daxil olur.
//               <br />
//               <br />
//               Həmçinin, 4DX formatı ölkəmizdə yalnız “CinemaPlus” kinoteatrında
//               tətbiq olunur. 4DX innovativ kinoteatr texnologiyası kəskin
//               süjetli blokbasterləri və qorxu filmlərini hərəkət, fırlanma və
//               kreslodan titrəyişlər, su damcıları və külək, ildırım və qar,
//               sabun köpükləri və ətir kimi əlavə xüsusi effektlər ilə vizual
//               effektlərini genişləndirir. Bunun nəticəsində 4DX, tamaşaçıları
//               böyük ekranda baş verən hadisələrə sövq etməklə kino sənayesində
//               ən valehedici formatlardan biri hesab olunur.
//             </p>
//           </div>
//           <ul className="location">
//             <li>
//               <a href="#">28 Mall</a>
//             </li>
//             <li>
//               <a href="#">Genclik Mall</a>
//             </li>
//             <li>
//               <a href="#">Deniz Mall</a>
//             </li>
//             <li>
//               <a href="#">Azerbaijan Cinema</a>
//             </li>
//             <li>
//               <a href="#">Amburan Mall</a>
//             </li>
//             <li>
//               <a href="#">Sumqayit</a>
//             </li>
//             <li>
//               <a href="#">Bakixanov Mall</a>
//             </li>
//             <li>
//               <a href="#">Gence Mall</a>
//             </li>
//             <li>
//               <a href="#">Naxcivan</a>
//             </li>
//             <li>
//               <a href="#">Shamaxi</a>
//             </li>
//           </ul>
//           <div className="col-md-6">
//             <img src="https://www.cinemaplus.az/site/templates/images/about1.png" />
//             <p>
//               CinemaPlus şəbəkəsinə 9 kinoteatr, 50+ ekran və 5000+ oturacaq
//               daxildir.
//             </p>
//           </div>
//           <div className="col-md-6">
//             <img src="https://www.cinemaplus.az/site/templates/images/about2.png" />
//             <p>
//               Bizim kinoteatrın “Platinum Movie Suites” zalında film izləyəndən
//               sonra Sizdə unudulmaz təəssüratlar qalacaq. Bu premium-zalın
//               konsepsiyası tamaşaçılara yüksək komfortlu, arxaya açılan
//               təmtəraqlı italyan dəri kreslolarında, kinoseans zamanı qida və
//               içki sifariş etmək imkanı olan zalda film izləmək imkanı təklif
//               edir.
//             </p>
//           </div>
//           <div className="col-md-6">
//             <img src="https://www.cinemaplus.az/site/templates/images/about3.png" />
//             <p>
//               “CinemaPlus” öz qonaqları üçün bileti müxtəlif rahat üsullar ilə
//               almaq imkanı yaradır: kinoteatrın www.cinemaplus.az rəsmi
//               saytından, İOS və Android əməliyyat sistemləri tərəfindən idarə
//               olunan smartfonlar üçün təzəlikcə işə düşmüş mobil tətbiq
//               vasitəsilə və ya kinoteatrın bilet kassasından.
//             </p>
//           </div>
//           <div className="col-md-6">
//             <img src="https://www.cinemaplus.az/site/templates/images/about4.png" />
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cum
//               magnam iusto accusantium fugit perspiciatis vero dignissimos
//               molestias. Eveniet dolores soluta praesentium a libero. Aperiam
//               similique vero quidem itaque recusandae.
//             </p>
//           </div>
//         </div>
//         <div>
//           <Form>
//             <h2>Contact Us</h2>
//             <Form.Label>Username</Form.Label>
//             <Form.Control type="text" placeholder="Enter username" />
//             <Form.Group controlId="formGroupEmail">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control type="email" placeholder="Enter email adress" />
//             </Form.Group>
//             <Form.Group className="mb-5" controlId="formGroupPhone">
//               <Form.Label>Phone number:</Form.Label>
//               <Form.Control type="number" placeholder="Enter phone number" />
//             </Form.Group>
//             <Form.Group className="mb-5" controlId="formGroupMessage">
//               <Form.Label>Message:</Form.Label>
//               <Form.Control type="text" placeholder="Your comments..." />
//             </Form.Group>
//             <Button className="mb-5" variant="primary" type="submit">
//               Submit
//             </Button>
//           </Form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
import React from "react";
import "./About.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div className="about">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <h1>"Cinema Plus"</h1>
          <div className="description">
            <p>
              CinemaPlus şəbəkəsinə 9 kinoteatr, 50+ ekran və 5000+ oturacaq
              daxildir.
            </p>
            <p>
              Yüksək ölçülü 3D-kontentini nümayiş etdirmək imkanı olan rəqəmsal
              proyeksiya sistemi və yüksək keyfiyyətli kinoekranlar ilə təchiz
              olunub. Həmçinin, gücləndirilmiş parlaqlıq və “Enhanced 4K Barco”
              dəqiq təsvirinə malikdir. Bütün bunlar və başqa amillər
              kinofilmləri ən yaxşı keyfiyyətdə nümayiş etdirmək imkanı yaradır.
            </p>
            <p>
              “CinemaPlus” kinoteatrlar şəbəkəsinin tətbiq etdiyi “Platinum
              Movie Suites” konsepsiyası tamaşaçılara yüksək komfortlu,
              dəbdəbəli və dəridən hazırlanmış, söykənəcəyi tam arxaya açılan
              italyan və ispan kreslolarda film izləmək və kinoseans zamanı qida
              və içkiləri sifariş etmək imkanı yaradır.
            </p>
            <p>
              Həmçinin kinoteatrda, zalların yuxarı pillələrində yerləşən, 6
              nəfərdən 12 nəfərə kimi oturacaqları olan 6 şüşəli mini Skybox
              zalları var. Tamaşaçılar fərdi işıqlandırma və gadjetlərin şarj
              cihazı ilə təchiz olunmuş rahat oturacaqlarda film izləməkdən zövq
              ala biləcəklər. Hər bir Skybox zalına giriş lift ilə mümkündür.
            </p>
            <p>
              Kinoteatrda xüsusi qonaqlar üçün quraşdırılmış masalar və ayaq
              dayağı olan geniş, rahat, avtomatik qatlanan oturacaqlarla təchiz
              olunmuş iki VIP DIAMOND zalları var. Bütün oturacaqlar
              bir-birindən müəyyən məsafədə yerləşir, bu da rahatlıq mühiti
              yaradır. Son sıralarda, ev şəraitini xatırladan rahat divanlar
              var.
            </p>
            <p>
              Bundan əlavə “CinemaPlus” Azərbaycanda ilk dəfə Dolby Atmos
              texnologiyası tətbiq edib.
            </p>
            <p>
              Səs müşayiətini kinoteatrın istənilən yerinə yerləşdirmək və
              yerini dəyişmək imkanı hesabına Dolby Digital Atmos film
              yaradıcılarına kinoda səsi yeni bir mərhələyə çıxarmaq imkan
              yaradır. Nəticədə tamaşaçı ekranda baş verənləri sadəcə izləmir,
              hadisənin mərkəzinə daxil olur.
              <br />
              <br />
              Həmçinin, 4DX formatı ölkəmizdə yalnız “CinemaPlus” kinoteatrında
              tətbiq olunur. 4DX innovativ kinoteatr texnologiyası kəskin
              süjetli blokbasterləri və qorxu filmlərini hərəkət, fırlanma və
              kreslodan titrəyişlər, su damcıları və külək, ildırım və qar,
              sabun köpükləri və ətir kimi əlavə xüsusi effektlər ilə vizual
              effektlərini genişləndirir. Bunun nəticəsində 4DX, tamaşaçıları
              böyük ekranda baş verən hadisələrə sövq etməklə kino sənayesində
              ən valehedici formatlardan biri hesab olunur.
            </p>
          </div>
          <ul className="location">
            <li>
              <a href="#">28 Mall</a>
            </li>
            <li>
              <a href="#">Genclik Mall</a>
            </li>
            <li>
              <a href="#">Deniz Mall</a>
            </li>
            <li>
              <a href="#">Azerbaijan Cinema</a>
            </li>
            <li>
              <a href="#">Amburan Mall</a>
            </li>
            <li>
              <a href="#">Sumqayit</a>
            </li>
            <li>
              <a href="#">Bakixanov Mall</a>
            </li>
            <li>
              <a href="#">Gence Mall</a>
            </li>
            <li>
              <a href="#">Naxcivan</a>
            </li>
            <li>
              <a href="#">Shamaxi</a>
            </li>
          </ul>
          <div className="col-md-6">
            <img src="https://www.cinemaplus.az/site/templates/images/about1.png" />
            <p>
              CinemaPlus şəbəkəsinə 9 kinoteatr, 50+ ekran və 5000+ oturacaq
              daxildir.
            </p>
          </div>
          <div className="col-md-6">
            <img src="https://www.cinemaplus.az/site/templates/images/about2.png" />
            <p>
              Bizim kinoteatrın “Platinum Movie Suites” zalında film izləyəndən
              sonra Sizdə unudulmaz təəssüratlar qalacaq. Bu premium-zalın
              konsepsiyası tamaşaçılara yüksək komfortlu, arxaya açılan
              təmtəraqlı italyan dəri kreslolarında, kinoseans zamanı qida və
              içki sifariş etmək imkanı olan zalda film izləmək imkanı təklif
              edir.
            </p>
          </div>
          <div className="col-md-6">
            <img src="https://www.cinemaplus.az/site/templates/images/about3.png" />
            <p>
              “CinemaPlus” öz qonaqları üçün bileti müxtəlif rahat üsullar ilə
              almaq imkanı yaradır: kinoteatrın www.cinemaplus.az rəsmi
              saytından, İOS və Android əməliyyat sistemləri tərəfindən idarə
              olunan smartfonlar üçün təzəlikcə işə düşmüş mobil tətbiq
              vasitəsilə və ya kinoteatrın bilet kassasından.
            </p>
          </div>
          <div className="col-md-6">
            <img src="https://www.cinemaplus.az/site/templates/images/about4.png" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cum
              magnam iusto accusantium fugit perspiciatis vero dignissimos
              molestias. Eveniet dolores soluta praesentium a libero. Aperiam
              similique vero quidem itaque recusandae.
            </p>
          </div>
        </div>

        <div>
          <Form>
            <h2>Contact Us</h2>
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email adress" />
            </Form.Group>
            <Form.Group className="mb-5" controlId="formGroupPhone">
              <Form.Label>Phone number:</Form.Label>
              <Form.Control type="number" placeholder="Enter phone number" />
            </Form.Group>
            <Form.Group className="mb-5" controlId="formGroupMessage">
              <Form.Label>Message:</Form.Label>
              <Form.Control type="text" placeholder="Your comments..." />
            </Form.Group>
            <Button className="mb-5" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default About;
