import React, { useContext } from 'react';

import { useForm } from 'react-hook-form';

import shortid from 'shortid';

import get from 'lodash-es/get';

import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import { GalleryContext } from '../gallery/GalleryContext';
import { ModalContext } from '../modal/ModalContext';

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
  const { closeModal } = useContext(ModalContext);

  const onSubmit = (data) => {
    const newImages = get(data, 'json.galleryImages', []);

    addImages(newImages.map((image) => ({ id: shortid.generate(), ...image })));

    if (closeModal) {
      closeModal();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <p className="modal__header">Добавить изображения из json</p>

      <label className="form__label">json</label>
      <textarea
        className="form__input"
        name="json"
        ref={register({ required: true })}
        tabIndex="1"
      />
      {errors.json && (
        <div className="form__error-message">Введите валидный json</div>
      )}

      <button className="button" type="submit" tabIndex="1">
        Добавить изображения
      </button>
    </form>
  );
};

export default AddFromJsonForm;
