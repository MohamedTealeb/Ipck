import { FaSyncAlt, FaStore, FaSmile, FaCalendarAlt } from 'react-icons/fa';

const StatsGrid = () => {
  return (
    <div className=" text-white mt-5 py-6">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
        
        {/* العنصر 1 */}
        <div className="bg-secondary p-6 rounded-lg flex flex-col items-center">
          <FaSyncAlt className="text-3xl mb-2" />
          <h3 className="text-lg font-bold">10 سنوات ضمان</h3>
          <p className="text-sm text-blue-200">ضد عيوب الصناعة</p>
        </div>

        {/* العنصر 2 */}
        <div className="bg-secondary p-6 rounded-lg flex flex-col items-center">
          <FaStore className="text-3xl mb-2" />
          <h3 className="text-lg font-bold">+100</h3>
          <p className="text-sm text-blue-200">موزع بالمحافظات</p>
        </div>

        {/* العنصر 3 */}
        <div className="bg-secondary p-6 rounded-lg flex flex-col items-center">
          <FaSmile className="text-3xl mb-2" />
          <h3 className="text-lg font-bold">+100,000</h3>
          <p className="text-sm text-blue-200">عميل سعيد</p>
        </div>

   

      </div>
    </div>
  );
};

export default StatsGrid;
