import React, { useContext } from 'react';

import { useForm } from 'react-hook-form';

import { useDispatch } from 'react-redux';

import get from 'lodash-es/get';
import isEmpty from 'lodash-es/isEmpty';

import { ModalContext } from '../modal/ModalContext';

import { jsonSchema, urlSchema } from './schemas';
import { addFromJson, addFromUrl } from '../../redux/images/actions';

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
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm({
    resolver: anyResolver,
  });
  const { closeModal } = useContext(ModalContext);

  const onSubmit = (data) => {
    if (!isEmpty(data.json)) {
      dispatch(addFromJson(data.json));
    } else if (!isEmpty(data.url)) {
      dispatch(addFromUrl(data.url));
    }

    if (closeModal) {
      closeModal();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form addfromany-form">
      <p className="modal__header">Добавить изображения</p>

      <label className="form__label tooltip" tabIndex="1">
        Ссылка или JSON*
        <div className="tooltip__text">
          Текст JSON файла. Сам JSON файл можно выбрать/перетащить как и файлы
          изображений.
        </div>
      </label>
      <textarea
        className="form__input form__input--textarea"
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
