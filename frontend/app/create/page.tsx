'use client';

import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../store/product.slice';
import ProductForm from '../../components/ProductForm';

export default function Create() {
  const dispatch = useDispatch<any>();
  const router = useRouter();

  const submit = async (data: any) => {
    await dispatch(createProduct(data));
    router.push('/');
  };

  return <ProductForm onSubmit={submit} />;
}
