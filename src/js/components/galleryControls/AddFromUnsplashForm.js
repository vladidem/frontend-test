import React, { useContext } from 'react';

import { useForm } from 'react-hook-form';

import { useDispatch } from 'react-redux';

import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import { ModalContext } from '../modal/ModalContext';
import { addFromUnsplash } from '../../redux/images/actions';

import cx from 'classnames';

const unsplashFormSchema = yup.object().shape({
  amount: yup.number().integer().moreThan(0).lessThan(101).required(),
});

const AddFromUnsplashForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(unsplashFormSchema),
  });
  const { closeModal } = useContext(ModalContext);

  const onSubmit = (data) => {
    const { amount } = data;

    dispatch(addFromUnsplash(amount));

    if (closeModal) {
      closeModal();
    }
  };

  const amountClasses = {
    form__input: true,
    'form__input--error': errors.amount,
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form add-from-unsplash-form"
    >
      <p className="modal__header">
        Добавить случайные изображения из unsplash
      </p>

      <label className="form__label">Количество случайных изображений</label>
      <input
        type="number"
        className={cx(amountClasses)}
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
