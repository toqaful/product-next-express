'use client';

import { useState, useEffect } from 'react';

type ProductFormProps = {
  onSubmit: (data: {
    name: string;
    description?: string;
    price: number;
  }) => void;
  initialData?: {
    name: string;
    description?: string;
    price: number;
  };
};

export default function ProductForm({
  onSubmit,
  initialData
}: ProductFormProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(''); // ✅ string
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setDescription(initialData.description || '');
      setPrice(String(initialData.price)); // ✅ convert to string
    }
  }, [initialData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await onSubmit({
      name,
      description,
      price: Number(price) // ✅ convert here
    });

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md bg-white p-6 rounded shadow"
    >
      <h1 className="text-xl font-bold mb-4">
        {initialData ? 'Edit Product' : 'Create Product'}
      </h1>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Name</label>
        <input
          type="text"
          required
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Description</label>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Price</label>
        <input
          type="number"
          step="0.01"
          required
          value={price}
          onChange={e => setPrice(e.target.value)} // ✅ NO Number()
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white px-4 py-2 rounded w-full"
      >
        {loading ? 'Saving...' : 'Save'}
      </button>
    </form>
  );
}
