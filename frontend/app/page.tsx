'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, deleteProduct } from '../store/product.slice';
import Link from 'next/link';

export default function Home() {
  const dispatch = useDispatch<any>();
  const { list, loading } = useSelector((s: any) => s.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div>
      <Link href="/create" className="bg-black text-white px-4 py-2 rounded">
        Add Product
      </Link>

      <ul className="mt-5 space-y-3">
        {list.map((p: any) => (
          <li key={p.id} className="border p-4 rounded">
            <h2 className="font-bold">{p.name}</h2>
            <p>{p.description}</p>
            <p>${p.price}</p>

            <div className="mt-2 space-x-2">
              <Link href={`/edit/${p.id}`} className="text-blue-600">
                Edit
              </Link>
              <button
                onClick={() => dispatch(deleteProduct(p.id))}
                className="text-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
