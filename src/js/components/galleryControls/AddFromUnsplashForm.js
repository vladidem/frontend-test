import React, { useContext } from 'react';

import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import { GalleryContext } from '../gallery/GalleryContext';
import { ModalContext } from '../modal/ModalContext';

const unsplashFormSchema = yup.object().shape({
  amount: yup.number().integer().moreThan(0).lessThan(101).required(),
});

const AddFromUnsplashForm = () => {
  const { addUnsplashImages } = useContext(GalleryContext);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(unsplashFormSchema),
  });
  const { closeModal } = useContext(ModalContext);

  const onSubmit = (data) => {
    const { amount } = data;

    addUnsplashImages(amount);

    if (closeModal) {
      closeModal();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <p className="modal__header">
        Добавить случайные изображения из unsplash
      </p>

      <label className="form__label">Количество случайных изображений</label>
      <input
        type="number"
        className="form__input"
        name="amount"
        ref={register({ required: true })}
        tabIndex="1"
      />
      {errors.amount && (
        <div className="form__error-message">
          Введите валидное количество от 1 до 100
        </div>
      )}

      <button className="button" type="submit" tabIndex="1">
        Добавить изображения
      </button>
    </form>
  );
};

export default AddFromUnsplashForm;
