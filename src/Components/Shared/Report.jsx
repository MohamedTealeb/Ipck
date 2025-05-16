import React from 'react'

export default function Report() {
  return <>
  
   <section className="bg-gray-100 py-12 text-right font-sans">
      <h2 className="text-3xl font-bold text-center text-secondary mb-10">آراء العملاء</h2>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 px-4">
        {/* التقييم الأيسر */}
        <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-sm">
          <div className="text-yellow-500 mb-2">★★★★★</div>
          <p className="text-gray-800 mb-4">
            أول مرة أجرب مرتبة توفر لي راحة حقيقية! الفرق كان واضح من أول ليلة.. جودة خرافية ونوم أعمق من أي وقت فات!
          </p>
          <div className="flex items-center justify-end mt-4">
            <span className="ml-2 font-semibold">محمد احمد</span>
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="أحمد منير"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>

        {/* عرض الخصم */}
        <div
          className="relative bg-cover bg-center text-white rounded-xl shadow-lg p-8 w-full max-w-sm"
          style={{ backgroundImage: "url('/bed.jpg')" }} // غيّر المسار حسب صورتك
        >
          <div className="absolute inset-0 bg-black opacity-60 rounded-xl"></div>
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-bold mb-2">عرض اليوم</h3>
            <p className="text-lg mb-4">خصم 10% على جميع المراتب!</p>
            <p className="mb-2">استخدم كود</p>
            <p className="font-bold text-xl mb-4">First 10</p>
            <a href='products'>

            <button className= "cursor-pointer  bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full">
              كل المنتجات
            </button>
            </a>
          </div>
        </div>

        {/* التقييم الأيمن */}
        <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-sm">
          <div className="text-yellow-500 mb-2">★★★★★</div>
          <p className="text-gray-800 mb-4">
            المخدة دي بقت أهم حاجة ف حياتي بجد. نعومة من عالم تاني! الإحساس بالفخامة واضح، وريحتي زراحي. لا بجد جميلة.
          </p>
          <div className="flex items-center justify-end mt-4">
            <span className="ml-2 font-semibold">مروة عماد</span>
            <img
              src="https://randomuser.me/api/portraits/women/45.jpg"
              alt="مروة قطب"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  </>
}
