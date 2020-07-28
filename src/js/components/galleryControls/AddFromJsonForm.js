import React, { useContext } from 'react';

import { useForm } from 'react-hook-form';

import shortid from 'shortid';

import get from 'lodash-es/get';

import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import { GalleryContext } from '../gallery/GalleryContext';
import { ModalContext } from '../modal/ModalContext';
import { jsonSchema } from './schemas';

const jsonFormSchema = yup.object().shape({
  json: jsonSchema,
});

const AddFromJsonForm = () => {
  const { addFromJson } = useContext(GalleryContext);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(jsonFormSchema),
  });
  const { closeModal } = useContext(ModalContext);

  const onSubmit = (data) => {
    addFromJson(data.json);

    if (closeModal) {
      closeModal();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <p className="modal__header">Добавить изображения из JSON</p>

      <label className="form__label">JSON</label>
      <textarea
        className="form__input"
        name="json"
        ref={register({ required: true })}
        tabIndex="1"
      />
      {errors.json && (
        <div className="form__error-message">Введите валидный JSON</div>
      )}

      <button className="button" type="submit" tabIndex="1">
        Добавить изображения
      </button>
    </form>
  );
};

export default AddFromJsonForm;
