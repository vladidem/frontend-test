import React, { useContext } from 'react';

import { useForm } from 'react-hook-form';

import shortid from 'shortid';

import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import { GalleryContext } from './GalleryContext';

const linkFormSchema = yup.object().shape({
  url: yup.string().url().required(),
});

const AddFromLinkForm = () => {
  const { addImage } = useContext(GalleryContext);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(linkFormSchema),
  });

  const onSubmit = (data) => {
    const image = {
      id: shortid.generate(),
      url: data.url,
    };
    addImage(image);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="url" ref={register({ required: true })} />

      {errors.url && 'Введите валидный url'}

      <input className="button" type="submit" value="Добавить изображение" />
    </form>
  );
};

export default AddFromLinkForm;
