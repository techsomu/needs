"use client";
import { useRouter } from 'next/navigation';

const categories = [
  { name: 'Electrician', icon: '💡' },
  { name: 'Plumber', icon: '🔧' },
  { name: 'Carpenter', icon: '🪵' },
  // Add more categories as needed
];

const CategoriesPage = () => {
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    router.push(`/partner/${category}/subcategories`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Choose Your Category</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.name}
            onClick={() => handleCategoryClick(cat.name.toLowerCase())}
            className="cursor-pointer p-4 border rounded-lg text-center hover:bg-gray-200"
          >
            <div className="text-4xl mb-2">{cat.icon}</div>
            <div className="text-lg font-semibold">{cat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
