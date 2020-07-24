import React, { useContext } from 'react';

import { useForm } from 'react-hook-form';

import shortid from 'shortid';

import get from 'lodash-es/get';

import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import { GalleryContext } from './GalleryContext';

const jsonFormSchema = yup.object().shape({
  json: yup
    .object()
    .shape({
      galleryImages: yup
        .array(yup.object().shape({ url: yup.string().url().required() }))
        .required(),
    })
    .required(),
});

const AddFromJsonForm = () => {
  const { addImages } = useContext(GalleryContext);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(jsonFormSchema),
  });

  const onSubmit = (data) => {
    const newImages = get(data, 'json.galleryImages', []);

    addImages(newImages.map((image) => ({ id: shortid.generate(), ...image })));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea name="json" ref={register({ required: true })} />

      {errors.json && 'Введите валидный json'}

      <input type="submit" value="Добавить изображения" />
    </form>
  );
};

export default AddFromJsonForm;
