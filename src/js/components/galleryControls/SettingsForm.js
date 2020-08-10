import React, { useContext } from 'react';

import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import cx from 'classnames';

import { GalleryContext } from '../gallery/GalleryContext';
import { ModalContext } from '../modal/ModalContext';

const settingsFormSchema = yup.object().shape({
  minHeight: yup.number().integer().moreThan(49).lessThan(1001).required(),
});

const SettingsForm = () => {
  const { updateMinHeight, imageMinHeight } = useContext(GalleryContext);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(settingsFormSchema),
    defaultValues: { minHeight: imageMinHeight },
  });
  const { closeModal } = useContext(ModalContext);

  const onSubmit = (data) => {
    const { minHeight } = data;

    updateMinHeight(minHeight);

    if (closeModal) {
      closeModal();
    }
  };

  const minHeightClasses = {
    form__input: true,
    'form__input--error': errors.minHeight,
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form settings-form">
      <p className="modal__header">Изменить минимальную высоту изображений</p>

      <label className="form__label" tabIndex="0">
        Минимальная высота изображений
      </label>
      <input
        type="number"
        className={cx(minHeightClasses)}
        name="minHeight"
        ref={register({ required: true })}
        tabIndex="0"
      />
      {errors.minHeight && (
        <div className="form__error-message">
          Введите валидную высоту от 50 до 1000
        </div>
      )}

      <button className="button" type="submit" tabIndex="0">
        Сохранить изменения
      </button>
    </form>
  );
};

export default SettingsForm;
