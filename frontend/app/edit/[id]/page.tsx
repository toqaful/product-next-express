'use client';

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, updateProduct } from '../../../store/product.slice';
import ProductForm from '../../../components/ProductForm';

export default function Edit() {
  const { id } = useParams();
  const router = useRouter();
  const dispatch = useDispatch<any>();
  const { list } = useSelector((s: any) => s.products);

  useEffect(() => {
    if (!list.length) dispatch(fetchProducts());
  }, [dispatch, list.length]);

  const product = list.find((p: any) => p.id === Number(id));
  if (!product) return null;

  const submit = async (data: any) => {
    await dispatch(updateProduct({ id: product.id, data }));
    router.push('/');
  };

  return <ProductForm initialData={product} onSubmit={submit} />;
}
