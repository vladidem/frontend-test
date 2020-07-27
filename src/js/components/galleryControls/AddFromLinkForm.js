import React, { useContext } from 'react';

import { useForm } from 'react-hook-form';

import shortid from 'shortid';

import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import { GalleryContext } from '../gallery/GalleryContext';
import { ModalContext } from '../modal/ModalContext';

const linkFormSchema = yup.object().shape({
  url: yup.string().url().required(),
});

const AddFromLinkForm = () => {
  const { addImage } = useContext(GalleryContext);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(linkFormSchema),
  });
  const { closeModal } = useContext(ModalContext);

  const onSubmit = (data) => {
    const image = {
      id: shortid.generate(),
      url: data.url,
    };
    addImage(image);

    if (closeModal) {
      closeModal();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <p className="modal__header">Добавить изображение по ссылке</p>

      <label className="form__label">Ссылка</label>
      <input
        className="form__input"
        name="url"
        ref={register({ required: true })}
        tabIndex="1"
      />
      {errors.url && (
        <div className="form__error-message">Введите валидный url</div>
      )}

      <button className="button" type="submit" tabIndex="1">
        Добавить изображение
      </button>
    </form>
  );
};

export default AddFromLinkForm;
