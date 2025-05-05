import Footer from '@/components/sections/Footer'
import React from 'react'

function AboutUsPage() {
  return (
    <div className=" text-gray-800">
      <div className="pt-40 bg-[#F4FFFC] container-padding pb-20">
        <div className="about-container about">
          <h2 className="mb-2 font-bold">نبذة عن الشركة</h2>
          <p>
            شركة كنز الصحراء إحدى الشركات الرائدة في مجال المقاولات منذ أكثر من
            40 عاماً، ومع كلّ الظروف والتغييرات والتطورات الحاصلة بالمملكة
            العربية السعودية وتواكباً مع رؤية 2030 فقد تم توسع الشركة وعمل بعض
            التطويرات منذ عام 2017 لتصبح باسم شركة كنز الصحراء للمقاولات .
          </p>
        </div>
        <div className="about-container about">
          <h2 className="mb-2 font-bold">مَن نحن</h2>
          <p>
            تعتبر شركة كنز الصحـراء شركة رائدة في مجالات المقاولات والإنشاء
            والتنفيذ وصيانة المباني والطرق والجسور والأعمال الميكانيكية
            والكهربائية، وتمتلك الشركة كافة المعدات والآليات والقدرات الفنية
            والإدارية والمالية بالإضافة إلى خبراتها الطويلة مما يؤهلها للقيام
            بتنفيذ أي نوع وحجم من المشاريع داخل المملكة العربية السعودية .
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AboutUsPage
