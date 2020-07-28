import React, { useContext } from 'react';

import { useForm } from 'react-hook-form';

import shortid from 'shortid';

import get from 'lodash-es/get';
import isEmpty from 'lodash-es/isEmpty';

import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import { GalleryContext } from '../gallery/GalleryContext';
import { ModalContext } from '../modal/ModalContext';

import {jsonSchema, urlSchema} from './schemas';

const anyResolver = (input) => {
  const data = get(input, 'jsonOrUrl', {});

  const jsonSchemaData = jsonSchema.isValidSync(data)
    ? jsonSchema.validateSync(data)
    : {};
  const urlSchemaData = urlSchema.isValidSync(data)
    ? urlSchema.validateSync(data)
    : {};
  const errors =
    isEmpty(jsonSchemaData) && isEmpty(urlSchemaData)
      ? { jsonOrUrl: 'error' }
      : {};

  return {
    values: {
      url: urlSchemaData,
      json: jsonSchemaData,
    },
    errors,
  };
};

const AddFromAnyForm = () => {
  const { addFromJson, addFromUrl } = useContext(GalleryContext);
  const { register, handleSubmit, errors } = useForm({
    resolver: anyResolver,
  });
  const { closeModal } = useContext(ModalContext);

  const onSubmit = (data) => {
    if (!isEmpty(data.json)) {
      addFromJson(data.json);
    } else if (!isEmpty(data.url)) {
      addFromUrl(data.url);
    }

    if (closeModal) {
      closeModal();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <p className="modal__header">Добавить изображения</p>

      <label className="form__label">Ссылка или JSON</label>
      <textarea
        className="form__input"
        name="jsonOrUrl"
        ref={register({ required: true })}
        tabIndex="1"
      />
      {errors.jsonOrUrl && (
        <div className="form__error-message">
          Введите валидный JSON со списком изображений или ссылку.
        </div>
      )}

      <button className="button" type="submit" tabIndex="1">
        Добавить изображения
      </button>
    </form>
  );
};

export default AddFromAnyForm;
