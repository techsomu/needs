'use client';

import { useParams, useRouter } from 'next/navigation';

const subcategories: Record<string, string[]> = {
  electrician: ['Wiring', 'Installation', 'Repair'],
  plumber: ['Leak Fix', 'Pipe Installation', 'Drain Cleaning'],
  carpenter: ['Furniture Repair', 'Custom Furniture', 'Wood Polishing'],
};

const SubcategoriesPage = () => {
  const params = useParams();
  const router = useRouter();
  const category = params.category as string;

  const handleSubcategoryClick = (subcategory: string) => {
    router.push(`/partner/${category}/${subcategory}/form`);
  };

  if (!category || !subcategories[category]) {
    return <div className="p-6">Invalid category or loading...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Choose a Subcategory</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {subcategories[category].map((subcat) => (
          <button
            key={subcat}
            onClick={() => handleSubcategoryClick(subcat.toLowerCase())}
            className="p-4 border rounded-lg text-center hover:bg-gray-200"
          >
            {subcat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubcategoriesPage;
